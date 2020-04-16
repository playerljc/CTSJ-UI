import {
  browserConfig,
} from '@ctsj/router';

import App from '@/app';
import Affix from '@/packages/affix/demo';

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
    ],
  },
];

// @ts-ignore
const Router = browserConfig(config);

export default Router;
