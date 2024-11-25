import { useAuthContext } from '../contexts/Auth/AuthContext';
import { RoleEnum } from '../graphql/generated/graphql-types';
import { validateUserPermissions } from '../utils/validateUserPermissions';

type UseCamParams = {
  permissions?: string[];
  roles?: RoleEnum[];
};
export function useCan({ permissions, roles }: UseCamParams) {
  const { user } = useAuthContext();
  if (!user) return false;

  const userHasValidPermissions = validateUserPermissions({
    user,
    permissions,
    roles,
  });

  return userHasValidPermissions;
}
