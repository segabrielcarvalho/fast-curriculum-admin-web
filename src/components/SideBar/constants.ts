import { RoleEnum } from '@/graphql/generated/graphql-types';
import routes from '@/routes';
import {
  BriefcaseIcon,
  HomeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  {
    name: 'Dashboard',
    href: routes.dashboard.path,
    icon: HomeIcon,
    roles: [RoleEnum.Admin, RoleEnum.User],
  },
  // {
  //   name: 'Usuários',
  //   href: routes.dashboard.users.path,
  //   icon: UsersIcon,
  //   roles: [RoleEnum.Admin],
  // },

  {
    name: 'Currículos',
    href: routes.dashboard.curriculum.path,
    icon: BriefcaseIcon,
    roles: [RoleEnum.Admin, RoleEnum.User],
  },
  {
    name: 'Plano',
    href: routes.dashboard.plan.path,
    icon: RocketLaunchIcon,
    roles: [RoleEnum.Admin, RoleEnum.User],
  },
];
