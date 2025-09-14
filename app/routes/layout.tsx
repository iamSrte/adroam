import { Outlet } from 'react-router';
import Footer from '~/components/footer';
import Navbar, { type NavbarNavLink } from '~/components/navbar/navbar';
import type { Route } from './+types/layout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'AdRoam' },
    { name: 'description', content: 'Welcome to Adroam!' },
  ];
}

const links: NavbarNavLink[] = [
  { href: '/upload-ad', label: 'ثبت تبلیغ' },
  { href: '/signup', label: 'ثبت نام رانندگان' },
  { href: '/support', label: 'پشتیبانی' },
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
