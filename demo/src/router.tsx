// demo的路由

import { browserConfig } from '@ctsj/router';

// @ts-ignore
import App from '@/components/app';
// @ts-ignore
import Affix from '@ctsj/ui/affix/demo';
// @ts-ignore
import Icon from '@ctsj/ui/icon/demo';
// @ts-ignore
import Layout from '@ctsj/ui/layout/demo';
// @ts-ignore
import Grid from '@ctsj/ui/grid/demo';
// @ts-ignore
import Divider from '@ctsj/ui/divider/demo';

// @ts-ignore
const config = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        redirect: '/affix',
      },
      {
        path: '/affix',
        component: Affix,
      },
      {
        path: '/icon',
        component: Icon,
      },
      {
        path: '/layout',
        component: Layout,
      },
      {
        path: '/grid',
        component: Grid,
      },
      {
        path: '/divider',
        component: Divider,
      },
    ],
  },
];

// @ts-ignore
const Router = browserConfig(config);

export default Router;
