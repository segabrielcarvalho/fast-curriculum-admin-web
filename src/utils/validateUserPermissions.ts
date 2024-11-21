import { User } from '@/contexts/Auth/AuthContext';

type UserPermission = Partial<User> & {
  permissions?: string[];
};

type ValidateUserPermissionsParams = {
  user: UserPermission;
  permissions?: string[];
  roles?: string[];
};

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams) {
  if (permissions && permissions.length > 0) {
    const hasAllPermissions = permissions.every(permission => {
      if (!user.permissions) return false;
      return user.permissions.includes(permission);
    });
    if (!hasAllPermissions) return false;
  }

  if (roles && roles.length > 0) {
    const hasRole = roles.some(role => {
      return user.role === role;
    });
    if (!hasRole) return false;
  }

  return true;
}
