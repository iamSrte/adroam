import { Link } from 'react-router';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '~/components/ui/navigation-menu';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

import type { Navbar01NavLink } from './navbar';

interface Props {
  vertical?: boolean;
  navigationLinks: Navbar01NavLink[];
  className?: string;
}

export default function NavbarMenu({
  navigationLinks,
  vertical,
  className,
}: Props) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList
        className={cn('w-full flex gap-2', vertical ? 'flex-col' : 'flex-row')}
      >
        {navigationLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            <Button
              asChild
              variant="secondary"
              className={cn(
                'justify-center',
                link.active && 'bg-primary text-primary-foreground'
              )}
            >
              <Link to={link.href}>{link.label}</Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
