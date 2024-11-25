import { RoleEnum } from '@/graphql/generated/graphql-types';
import routes from '@/routes';
import { BriefcaseIcon, IdentificationIcon } from '@heroicons/react/24/outline';

type QueryObject = Record<string, string | number | undefined | null>;

export const getNavigation = (query: QueryObject = {}) => {
  const navigation = [
    {
      name: 'Curriculos',
      href: addQueryToPath(routes.dashboard.curriculums.path, query),
      icon: BriefcaseIcon,
      roles: [RoleEnum.Admin, RoleEnum.User],
    },
    {
      name: 'Informações Profissionais',
      href: addQueryToPath(routes.dashboard.professionalInfo.path, query),
      icon: IdentificationIcon,
      roles: [RoleEnum.Admin, RoleEnum.User],
    },
  ];

  return navigation;
};

const addQueryToPath = (path: string, query: QueryObject): string => {
  const queryString = Object.entries(query)
    .filter(([, value]) => value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value as string | number)}`,
    )
    .join('&');

  return queryString ? `${path}?${queryString}` : path;
};
