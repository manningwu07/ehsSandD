import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { NavLink } from "~/types/components";

interface NavbarProps {
  links: NavLink[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="EHS Speech & Debate"
              height={40}
              width={40}
              className="mx-2 rounded-full"
            />
            <span className="hidden font-bold sm:inline-block">
              EHS Speech & Debate
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-sm font-medium text-darkGreen transition-colors hover:underline`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden"
                  size="icon"
                >
                  <Menu className="right-0 h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="text-white"
              >
                <nav className="flex flex-col space-y-4">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:underline ${link.join ? "text-emerald-300" : "text-white"}}`}
                    >
                      {link.text}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
