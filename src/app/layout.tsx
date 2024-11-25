import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

import moment from 'moment';
import 'moment/locale/pt-br';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

moment.locale('pt-br');

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Painel FastCurriculum',
  description: 'FastCurriculum - Acesse o sistema',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-slate-100" lang="pt-br">
      <body
        className={`${inter.className} h-full justify-center items-center w-auto`}
      >
        <div id="portal-root" />
        <div id="app-root" />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
