const home = { path: '/dashboard' };

const routes = {
  home,
  auth: {
    login: { path: '/auth/login' },
    register: { path: '/auth/register' },
    forgotPassword: { path: '/auth/forgot-password' },
    resetPassword: { path: '/auth/reset-password' },
  },
  dashboard: {
    path: home.path,
    config: { path: '/dashboard/config' },
    curriculums: {
      path: '/dashboard/curriculum',
      create: { path: '/dashboard/curriculum/create' },
      show: {
        path: '/dashboard/curriculum',
        showFolder: { path: '/dashboard/curriculum/[id]' },
      },
    },
    professionalInfo: {
      path: '/dashboard/professional-info',
      show: {
        path: '/dashboard/professional-info',
        showFolder: { path: '/dashboard/professional-info/[id]' },
      },
    },
    models: { path: '/dashboard/models' },
    me: { path: '/dashboard/me' },
  },
};

export default routes;
