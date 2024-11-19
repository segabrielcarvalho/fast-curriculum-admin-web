'use client';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import { Logo } from '@/components/Logo';
import { useAuthContext } from '@/contexts/Auth/AuthContext';
import { LoginMutationVariables } from '@/graphql/generated/graphql-types';
import routes from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().min(3, 'Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginMutationVariables>({
    resolver: zodResolver(loginSchema),
  });
  const { signIn } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const submitImplementation: SubmitHandler<
    LoginMutationVariables
  > = async args => {
    const { email, password } = args;
    try {
      setLoading(true);
      await signIn({ email, password, redirectPath: routes.dashboard.path });
      setLoading(false);
    } catch (e: any) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[430px]">
          <div className=" px-6 py-12 shadow sm:rounded-lg sm:px-12 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <Logo className="mx-auto h-12 mb-8" />
              <h2 className=" text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
                Faça login na sua conta
              </h2>
            </div>

            <div className="space-y-6 mt-10">
              <div>
                <div className="mt-2">
                  <Input
                    id="email"
                    isRequired
                    label="Username"
                    error={errors.email}
                    autoComplete="email"
                    {...register('email')}
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <Input
                    id="password"
                    type="password"
                    isRequired
                    label="Senha"
                    error={errors.password}
                    autoComplete="current-password"
                    {...register('password')}
                  />
                </div>
              </div>

              <div>
                <Button
                  className="w-full rounded-md py-2.5"
                  variant="solid"
                  color="slate"
                  isLoading={loading}
                  onClick={handleSubmit(submitImplementation)}
                >
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
