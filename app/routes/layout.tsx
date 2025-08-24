import { Outlet } from 'react-router';
import { CarIcon } from 'lucide-react';
import Navbar01, { type Navbar01NavLink } from '~/components/navbar/navbar';
import type { Route } from './+types/layout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'AdRoam' },
    { name: 'description', content: 'Welcome to Adroam!' },
  ];
}

const links: Navbar01NavLink[] = [
  { href: '/signup', label: 'ثبت نام' },
  { href: '/support', label: 'پشتیبانی' },
];

export default function Navbar() {
  return (
    <div>
      <div className="w-full relative">
        <Navbar01 logo={<CarIcon />} navigationLinks={links} />
        <Outlet />
      </div>
    </div>
  );
}
