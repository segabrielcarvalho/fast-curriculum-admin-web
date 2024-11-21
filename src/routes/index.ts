const home = { path: '/' };

const routes = {
  dashboard: {
    path: '/dashboard',
    curriculum: { path: '/dashboard/curriculum' },
    plan: { path: '/dashboard/plans' },
    config: { path: '/dashboard/config' },
    me: { path: '/dashboard/me' },
  },
};

export default routes;
