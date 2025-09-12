import { Link } from 'react-router';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

import type { Navbar01NavLink } from './navbar';

interface Props {
  vertical?: boolean;
  navigationLinks: Navbar01NavLink[];
  className?: string;
}

export default function NavbarMenu({ navigationLinks, vertical }: Props) {
  return (
    <div
      className={cn('flex gap-2', vertical ? 'flex-col w-full' : 'flex-row')}
    >
      {navigationLinks.map((link, index) => (
        <Button
          asChild
          key={index}
          variant="outline"
          className={cn(
            'justify-center',
            link.active &&
              'bg-primary text-primary-foreground hover:bg-blue-600 hover:text-primary-foreground'
          )}
        >
          <Link to={link.href}>{link.label}</Link>
        </Button>
      ))}
    </div>
  );
}
