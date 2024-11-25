'use client';

import { useGetProfessionalInfoByUserIdQuery } from '@/graphql/generated/graphql-types';
import { useSearchParams } from 'next/navigation';
import { createContext, ReactNode, useContext } from 'react';

type UserJourneyProviderProps = { children: ReactNode };
type ContextType = {
  graphql: {
    professionalInfoQuery: ReturnType<
      typeof useGetProfessionalInfoByUserIdQuery
    >;
  };
};

const ProfessionalInfoContext = createContext<ContextType | undefined>(
  undefined,
);

export function ProfessionalInfoContextProvider({
  children,
}: UserJourneyProviderProps) {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId') || '';

  const professionalInfoQuery = useGetProfessionalInfoByUserIdQuery({
    variables: { userId },
    fetchPolicy: 'cache-and-network',
    skip: !userId,
  });

  const value: ContextType = {
    graphql: { professionalInfoQuery },
  };

  return (
    <ProfessionalInfoContext.Provider value={value}>
      {children}
    </ProfessionalInfoContext.Provider>
  );
}

export const useProfessionalInfoContext = () => {
  const context = useContext(ProfessionalInfoContext);

  if (context === undefined) {
    throw new Error(
      'useProfessionalInfoContext must be used within a ProfessionalInfoContextProvider',
    );
  }

  return context;
};
