import type { ReactNode } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from '~/components/ui/drawer';
import { Button } from '~/components/ui/button';

interface Props {
  children: ReactNode;
}

export default function NavbarDrawer({ children }: Props) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
          variant="ghost"
          size="icon"
        >
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full flex flex-col items-stretch gap-2">
        <DrawerClose asChild>
          <Button variant="ghost" size="icon">
            <XIcon />
          </Button>
        </DrawerClose>
        {children}
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
