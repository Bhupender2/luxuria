import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b shadow-xl">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-around">
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
      </div>
    </header>
  );
}
