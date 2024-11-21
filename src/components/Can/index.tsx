import { useCan } from '@/hooks/useCan';
import { ReactNode } from 'react';
import { RoleEnum } from '../../graphql/generated/graphql-types';

export type Roles = keyof typeof RoleEnum;
interface ICanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: RoleEnum[];
}

export function Can({ children, permissions, roles }: ICanProps) {
  const can = useCan({ permissions, roles });
  if (can) return <>{children}</>;

  return null;
}
