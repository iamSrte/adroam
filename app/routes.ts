import {
  type RouteConfig,
  route,
  layout,
  index,
} from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('/upload-ad', 'routes/upload-ad.tsx'),
    route('/signup', 'routes/signup.tsx'),
    route('/support', 'routes/support.tsx'),
  ]),
] satisfies RouteConfig;
