'use client';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Sidebar from '@/components/SideBar';
import { ReactNode } from 'react';
import Banner from '../components/Banner';
import useDisclosure from '../hooks/useDisclosure';

function AppLayout({ children }: { children: ReactNode }) {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <div className="relative lg:pl-20 flex flex-col w-full min-h-screen">
        <Header onOpen={onOpen} />
        <Banner
          buttonHref="#"
          buttonText="Experimente agora"
          title="Experimente os planos premium"
          description="Desbloqueie todos os benefícios e aproveite ao máximo nossos recursos exclusivos."
        />
        <main className="flex-1 p-5 md:mx-10 custom-scrollbar flex-wrap box-border">
          <MainContent>{children}</MainContent>
        </main>
      </div>
    </>
  );
}

export default AppLayout;
