import { type ReactNode } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
} from '~/components/ui/drawer';
import { Button } from '~/components/ui/button';

interface Props {
  children: ReactNode;
}

export default function NavbarDrawer({ children }: Props) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost" className="size-10">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col items-start p-2 gap-y-2">
        <DrawerClose asChild>
          <Button variant="ghost" size="icon">
            <XIcon />
          </Button>
        </DrawerClose>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
