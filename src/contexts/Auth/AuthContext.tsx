import { usePathname, useRouter } from 'next/navigation';
import nookies from 'nookies';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import settings from '@/config/settings';
import {
  LoginMutationVariables,
  MeQuery,
  useLoginMutation,
  useMeQuery,
} from '@/graphql/generated/graphql-types';
import useToastHook from '@/hooks/useToastHook';
import routes from '@/routes';

export type User = MeQuery['me'];
type AuthProviderProps = { children: ReactNode };
type AuthContextData = {
  signIn(
    credentials: LoginMutationVariables & { redirectPath?: string },
  ): Promise<void>;
  signOut: (redirect: boolean) => void;
  user: User | null;
  queries: { me: ReturnType<typeof useMeQuery> };
};

let authChannel: BroadcastChannel;
const maxAge = 60 * 60 * 25 * 30;
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const me = useMeQuery();
  const router = useRouter();
  const pathname = usePathname();
  const { error } = useToastHook();
  const [login] = useLoginMutation();
  const { refetch, data, loading } = me;
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  async function signIn({
    email,
    password,
    redirectPath,
  }: LoginMutationVariables & { redirectPath?: string }) {
    try {
      const resp = await login({ variables: { email, password } });
      const token = resp.data?.login?.token || '';
      nookies.set(null, settings.tokenKey, token, {
        maxAge,
        path: '/',
        sameSite: 'Strict',
      });
      const refreshToken = 'not-implemented';
      nookies.set(null, settings.refreshTokenKey, refreshToken, {
        maxAge,
        path: '/',
        sameSite: 'Strict',
      });
      const user = await updateUser();
      if (user) afterLogin(redirectPath);
      authChannel.postMessage('signIn');
    } catch (e: any) {
      console.log('Error during signIn:', e);
      if (e.message) error({ message: e.message });
      signOut(false);
    }
  }

  const signOut = useCallback(
    (redirect: boolean) => {
      nookies.destroy(null, settings.tokenKey, { path: '/' });
      nookies.destroy(null, settings.refreshTokenKey, { path: '/' });
      setUser(null);
      authChannel.postMessage('signOut');
      if (redirect) {
        router.push(routes.auth.login.path);
        window.location.reload();
      }
    },
    [router],
  );

  const afterLogin = useCallback(
    async (redirect?: string) => {
      const path = redirect || pathname;
      router.push(path);
    },
    [router, pathname],
  );

  const updateUser = useCallback(async () => {
    try {
      const query = await refetch();
      const user = query.data.me;
      setUser(user);
      return user;
    } catch (e) {
      console.log('Error updating user:', e);
    }
  }, [refetch]);

  useEffect(() => {
    setIsLoadingUser(loading);
    if (data) setUser(data.me);
  }, [data, loading]);

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');
    authChannel.onmessage = message => {
      if (message.data === 'signOut') signOut(false);
      if (message.data === 'signIn') updateUser();
    };
    return () => authChannel.close();
  }, [isLoadingUser, router, user, signOut, updateUser]);

  useEffect(() => {
    if (data) setUser(data?.me);
  }, [data]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, queries: { me } }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error('useAuthContext must be used within an AuthProvider');
  return context;
}
