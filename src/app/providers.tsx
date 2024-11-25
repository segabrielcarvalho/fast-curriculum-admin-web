'use client';
import { ReactNode } from 'react';

import { ApolloWrapper } from '@/services/apollo/ApolloWrapper';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../contexts/Auth/AuthContext';

const Providers = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <ApolloWrapper>
      <AuthProvider>
        <ToastContainer className="animate__animated animate__fadeIn p-0 w-full max-w-sm" />
        {children}
      </AuthProvider>
    </ApolloWrapper>
  );
};

export default Providers;
