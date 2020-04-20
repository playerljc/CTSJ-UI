import { browserConfig } from '@ctsj/router';

// @ts-ignore
import App from '@/components/app';
// @ts-ignore
import Affix from '@/packages/affix/demo';

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
    ],
  },
];

// @ts-ignore
const Router = browserConfig(config);

export default Router;
