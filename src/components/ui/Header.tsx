"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b font-semibold shadow-xl">
      <div className="container mx-auto max-w-7xl px-4 py-2">
        {/* desktop version */}
        <div className="hidden justify-between md:flex">
          <div>
            <Image src="/Logo.png" width={150} height={200} alt="logo image" />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-warmdark cursor-pointer text-gray-700 transition-colors duration-200 hover:font-bold">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-warmdark cursor-pointer text-gray-700 transition-colors duration-200 hover:font-bold">
                  Shop
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-warmdark cursor-pointer text-gray-700 transition-colors duration-200 hover:font-bold">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* mobile version */}

        <div className="flex items-center justify-between py-4 md:hidden">
          <Image
            src="/Logo.png"
            className="h-10"
            alt="luxuiria"
            width={100}
            height={100}
          />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="rounded-lg p-2 hover:bg-white/10">
                <Menu size={24} className="text-warmdark" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-white/90 backdrop-blur-md" side="right">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-start space-y-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink className="hover:text-warmdark cursor-pointer text-gray-700 transition-colors duration-200 hover:font-bold">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="hover:text-warmdark cursor-pointer text-gray-700 transition-colors duration-200 hover:font-bold">
                      Shop
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="hover:text-warmdark cursor-pointer text-gray-700 transition-colors duration-200 hover:font-bold">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
