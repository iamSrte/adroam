import { Outlet } from 'react-router';
import { Navbar, type NavbarNavLink, Footer } from '~/components/layout';
import type { Route } from './+types/layout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'AdRoam' },
    { name: 'description', content: 'Welcome to Adroam!' },
  ];
}

const links: NavbarNavLink[] = [
  { href: '/ad-submission', label: 'ثبت تبلیغ' },
  { href: '/driver-signup', label: 'ثبت نام رانندگان' },
  { href: '/contact-us', label: 'پشتیبانی' },
];

export default function Layout() {
  return (
    <div>
      <div className="w-full relative">
        <Navbar navigationLinks={links} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
