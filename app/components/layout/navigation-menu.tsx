import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import type { NavbarNavLink } from './navbar';

interface NavbarMenuProps {
  vertical?: boolean;
  className?: string;
  navigationLinks: NavbarNavLink[];
}

export default function NavbarMenu({
  navigationLinks,
  vertical,
}: NavbarMenuProps) {
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
            'justify-center hover:text-primary font-semibold p-5',
            link.active && 'text-primary'
          )}
        >
          <Link to={link.href}>{link.label}</Link>
        </Button>
      ))}
    </div>
  );
}
