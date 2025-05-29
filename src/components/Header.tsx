"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Home, Menu, Phone, ShoppingBag, X } from "lucide-react";
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
            <SheetContent
              className="bg-white/90 p-0 backdrop-blur-md [&>button]:hidden"
              side="left"
            >
              {/* Custom header with your own close button */}
              <div className="flex items-center justify-between border-b border-gray-100 p-6">
                <Image
                  src="/Logo.png"
                  className="h-10"
                  alt="luxuiria"
                  width={100}
                  height={100}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 transition-colors hover:bg-gray-100"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Navigation items - positioned right after header */}
              <div className="px-6">
                <NavigationMenu>
                  <NavigationMenuList className="flex w-full flex-col items-start">
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink
                        className="hover:text-warmdark block w-full cursor-pointer rounded-lg p-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:font-bold"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-start gap-4">
                          {" "}
                          <Home /> <span>Home</span>
                        </div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink
                        className="hover:text-warmdark block w-full cursor-pointer rounded-lg p-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:font-bold"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-start gap-4">
                          {" "}
                          <ShoppingBag /> <span>Shop</span>
                        </div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink
                        className="hover:text-warmdark block w-full cursor-pointer rounded-lg p-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:font-bold"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-start gap-4">
                          {" "}
                          <Phone /> <span>Contact</span>
                        </div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
