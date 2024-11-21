'use client';
import clientConfig from '@/config/client';
import settings from '@/config/settings';
import { ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support';
import { parseCookies } from 'nookies';

const httpLink = new HttpLink({
  uri: clientConfig.apiGraphqlUrl,
});

const authLink = setContext((_, { headers }) => {
  const cookies = parseCookies();
  const token = cookies[settings.tokenKey];
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    networkError.message = 'Não foi possível conectar ao servidor';
  }
});

const makeClient = () => {
  const link =
    typeof window === 'undefined'
      ? ApolloLink.from([
          errorLink,
          new SSRMultipartLink({
            stripDefer: true,
          }),
          authLink,
          httpLink,
        ])
      : ApolloLink.from([errorLink, authLink, httpLink]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
