"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { PhoneCall } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
 

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="py-3">
            <Link href="/">
              <Image
                src="/images/logo/nesticologo.png"
                alt="Neu-Logo"
                width={142}
                height={142}
              />
            </Link>
          </div>

      {/* Navigation Links -----------*/}
      <nav className="flex space-x-6 items-center text-sm font-medium text-gray-700">
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-cyan-500 focus:outline-none relative">
            HOME
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"></span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Home 1</DropdownMenuItem>
            <DropdownMenuItem>Home 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="#">ABOUT</Link>
        <Link href="#">SERVICE</Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-cyan-500 focus:outline-none">
            PAGES
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Page 1</DropdownMenuItem>
            <DropdownMenuItem>Page 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="#">CONTACT</Link>
      </nav>

      {/* Contact & Button */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <PhoneCall className="h-4 w-4" />
          <span>+88 017*****</span>
        </div>
        <Button className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-md px-4">
          Get Free Quote
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
