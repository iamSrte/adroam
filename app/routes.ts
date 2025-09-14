import {
  type RouteConfig,
  route,
  layout,
  index,
} from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('/ad-submission', './routes/ad-submission.tsx'),
    route('/driver-signup', './routes/driver-signup.tsx'),
    route('/contact-us', './routes/contact-us.tsx'),
  ]),
] satisfies RouteConfig;
