import { Link, useLocation } from 'react-router';
import { CarIcon } from 'lucide-react';

import useMediaQuery from '~/hooks/use-media-query';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

import NavbarMenu from './navigation-menu';
import NavbarDrawer from './navbar-drawer';

export interface NavbarNavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  navigationLinks: NavbarNavLink[];
}

export default function Navbar({ className, navigationLinks }: NavbarProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const location = useLocation();

  const navLinksWithActive = navigationLinks.map((link) => ({
    ...link,
    active: location.pathname === link.href,
  }));

  const LogoButton = (
    <Button asChild variant={isDesktop ? 'default' : 'outline'} className="p-5">
      <Link to="/" className="flex flex-row items-center">
        <span className="text-lg font-bold">AdRoam</span>
        <CarIcon size={26} />
      </Link>
    </Button>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-2 md:px-6 [&_*]:no-underline',
        className
      )}
    >
      <div className="container mx-auto flex py-2 max-w-screen-2xl items-center justify-between gap-4">
        {isDesktop ? (
          <div className="flex items-center justify-start w-full gap-2">
            {LogoButton}
            <NavbarMenu navigationLinks={navLinksWithActive} />
          </div>
        ) : (
          <>
            <NavbarDrawer>
              <NavbarMenu
                className="w-full"
                navigationLinks={navLinksWithActive}
                vertical={true}
              />
            </NavbarDrawer>
            {LogoButton}
          </>
        )}
      </div>
    </header>
  );
}
