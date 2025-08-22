import { useEffect, useState, useRef } from 'react';

import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';

import NavbarMenu from './navigation-menu';
import NavbarDrawer from './navbar-drawer';

export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks: Navbar01NavLink[];
}

export default function Navbar01({
  className,
  logo,
  logoHref = '#',
  navigationLinks,
}: Navbar01Props) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

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

  const LogoButton = (
    <Button
      variant="ghost"
      className="flex items-center gap-x-2 hover:text-primary"
    >
      <span className="hidden text-xl sm:inline-block">AdRoam</span>
      {logo}
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
            <div className="flex items-center justify-start">{LogoButton}</div>
            <div className="flex items-center justify-end">
              <NavbarDrawer>
                <NavbarMenu className='w-full' navigationLinks={navigationLinks} vertical={true} />
              </NavbarDrawer>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-end w-full gap-4">
            <NavbarMenu navigationLinks={navigationLinks} />
            {LogoButton}
          </div>
        )}
      </div>
    </header>
  );
}
