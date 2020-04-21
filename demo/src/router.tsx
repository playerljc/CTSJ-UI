// demo的路由

import { browserConfig } from '@ctsj/router';

// @ts-ignore
import App from '@/components/app';
// @ts-ignore
import Affix from '@ctsj/ui/affix/demo';
// @ts-ignore
import Icon from '@ctsj/ui/icon/demo';

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
      }
    ],
  },
];

// @ts-ignore
const Router = browserConfig(config);

export default Router;
