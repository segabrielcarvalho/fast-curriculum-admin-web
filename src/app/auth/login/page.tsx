import { GradientBackground } from '@/components/Gradient';
import type { Metadata } from 'next';
import { LoginForm } from './context/login-form';

export const metadata: Metadata = {
  title: 'Acesse sua Conta',
  description:
    'Faça login para acessar sua conta e aproveitar todos os recursos do Fast Curriculum.',
};

export default function Login() {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <LoginForm />
    </main>
  );
}
