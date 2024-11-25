'use client';

import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import { Logo } from '@/components/Logo';
import { useAuthContext } from '@/contexts/Auth/AuthContext';
import { LoginMutationVariables } from '@/graphql/generated/graphql-types';
import routes from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().min(3, 'Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export const LoginForm = () => {
  const { signIn } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm<LoginMutationVariables>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
      <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
        <form
          onSubmit={handleSubmit(async args => {
            await signIn({
              email: args.email,
              password: args.password,
              redirectPath: routes.home.path,
            });
          })}
          className="p-7 sm:p-11"
        >
          <div className="flex items-start">
            <Link href="/" title="Home">
              <Logo className="h-9 w-48 fill-black" />
            </Link>
          </div>
          <h1 className="mt-8 text-base/6 font-medium">Bem-vindo de volta!</h1>
          <p className="mt-1 text-sm/5 text-gray-600">
            Faça login na sua conta para continuar.
          </p>

          <div className="mt-6 space-y-4">
            <Input
              required
              autoFocus
              type="email"
              label="Email"
              {...register('email')}
            />

            <Input
              required
              autoFocus
              type="password"
              label="Senha"
              {...register('password')}
            />
          </div>

          <div className="mt-2 flex items-center justify-end text-sm/5">
            <Link href="#" className="font-medium hover:text-gray-600">
              Esqueceu sua senha?
            </Link>
          </div>
          <div className="mt-8">
            <Button isLoading={isLoading} type="submit" className="w-full">
              Entrar
            </Button>
          </div>

          <div>
            <div className="relative mt-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Ou entre com
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="text-sm font-semibold leading-6">Google</span>
              </a>
            </div>
          </div>
        </form>
        <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
          Não possui uma conta?
          <Link
            href="/auth/register"
            className="ml-1 font-medium hover:text-gray-600"
          >
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
};
