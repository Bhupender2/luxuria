"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Home,
  Menu,
  Phone,
  ShoppingBag,
  X,
  Search,
  User,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 font-semibold shadow-sm backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 py-3">
        {/* Desktop Version */}
        <div className="hidden items-center justify-between md:flex">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/Logo.png"
              width={140}
              height={180}
              alt="Luxuria Logo"
              className="transition-transform duration-200 hover:scale-105"
            />
          </div>

          {/* Center Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-warmdark after:bg-warmdark relative cursor-pointer text-gray-700 transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:font-bold hover:after:w-full">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-warmdark after:bg-warmdark relative cursor-pointer text-gray-700 transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:font-bold hover:after:w-full">
                  Shop
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-warmdark after:bg-warmdark relative cursor-pointer text-gray-700 transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:font-bold hover:after:w-full">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-warmdark after:bg-warmdark relative cursor-pointer text-gray-700 transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:font-bold hover:after:w-full">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-warmdark/10 hover:text-warmdark rounded-full p-2 transition-colors"
            >
              <Search size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-warmdark/10 hover:text-warmdark rounded-full p-2 transition-colors"
            >
              <Heart size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-warmdark/10 hover:text-warmdark rounded-full p-2 transition-colors"
            >
              <User size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-warmdark/10 hover:text-warmdark relative rounded-full p-2 transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="bg-warmdark absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
                2
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="flex items-center justify-between md:hidden">
          <Image
            src="/Logo.png"
            className="h-10"
            alt="Luxuria"
            width={100}
            height={100}
          />

          <div className="flex items-center gap-3">
            {/* Mobile Cart Icon */}
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-warmdark/10 hover:text-warmdark relative rounded-full p-2 transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="bg-warmdark absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
                2
              </span>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-warmdark/10 hover:text-warmdark rounded-lg p-2 transition-colors"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="bg-white/95 p-0 backdrop-blur-md [&>button]:hidden"
                side="left"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-gray-100 bg-white/50 p-6">
                  <Image
                    src="/Logo.png"
                    className="h-10"
                    alt="Luxuria"
                    width={100}
                    height={100}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 transition-colors hover:bg-gray-100"
                  >
                    <X size={20} className="text-gray-600" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="p-6">
                  <NavigationMenu>
                    <NavigationMenuList className="flex w-full flex-col items-start gap-2">
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink
                          className="hover:bg-warmdark/5 hover:text-warmdark flex w-full cursor-pointer flex-row items-center gap-4 rounded-xl p-4 text-gray-700 transition-all duration-200 hover:font-bold"
                          onClick={() => setIsOpen(false)}
                        >
                          <Home size={20} />
                          <span>Home</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink
                          className="hover:bg-warmdark/5 hover:text-warmdark flex w-full cursor-pointer flex-row items-center gap-4 rounded-xl p-4 text-gray-700 transition-all duration-200 hover:font-bold"
                          onClick={() => setIsOpen(false)}
                        >
                          <ShoppingBag size={20} />
                          <span>Shop</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink
                          className="hover:bg-warmdark/5 hover:text-warmdark flex w-full cursor-pointer flex-row items-center gap-4 rounded-xl p-4 text-gray-700 transition-all duration-200 hover:font-bold"
                          onClick={() => setIsOpen(false)}
                        >
                          <User size={20} />
                          <span>About</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink
                          className="hover:bg-warmdark/5 hover:text-warmdark flex w-full cursor-pointer flex-row items-center gap-4 rounded-xl p-4 text-gray-700 transition-all duration-200 hover:font-bold"
                          onClick={() => setIsOpen(false)}
                        >
                          <Phone size={20} />
                          <span>Contact</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                  {/* Mobile Action Buttons */}
                  <div className="flex-start mt-8 flex border-t border-gray-100 pt-6">
                    <div className="grid grid-cols-1 gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center gap-2"
                      >
                        <Search size={16} />
                        Search
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center gap-2"
                      >
                        <Heart size={16} />
                        Wishlist
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center gap-2"
                      >
                        <User size={16} />
                        Account
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
