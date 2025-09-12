import { useEffect, useState, useRef } from 'react';

import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';

import NavbarMenu from './navigation-menu';
import NavbarDrawer from './navbar-drawer';
import { Link, useLocation } from 'react-router';

export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navigationLinks: Navbar01NavLink[];
}

export default function Navbar01({
  className,
  logo,
  navigationLinks,
}: Navbar01Props) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setIsMobile(width < 768);
      }
    };
    checkWidth();
    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const navLinksWithActive = navigationLinks.map((link) => ({
    ...link,
    active: location.pathname === link.href,
  }));

  const LogoButton = (
    <Button
      asChild
      variant="outline"
      className={cn(
        'justify-center',
        location.pathname == '/' &&
          'bg-primary text-primary-foreground hover:bg-blue-600 hover:text-primary-foreground'
      )}
    >
      <Link to="/">
        <div className="flex gap-2 items-center">
          <span className="hidden sm:inline-block">AdRoam</span>
          {logo}
        </div>
      </Link>
    </Button>
  );

  return (
    <header
      ref={containerRef}
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline',
        className
      )}
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
        {isMobile ? (
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
        ) : (
          <div className="flex items-center justify-start w-full gap-2">
            {LogoButton}
            <NavbarMenu navigationLinks={navLinksWithActive} />
          </div>
        )}
      </div>
    </header>
  );
}
