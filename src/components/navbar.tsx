import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { NavLink, NavButton } from "~/types/components";

interface NavbarProps {
  links: NavLink[];
  buttons: NavButton[];
}

export default function Navbar({ links, buttons }: NavbarProps) {
  return (
    <header className="supports-[backdrop-filter]:bg-white/40 sticky top-0 z-50 w-full backdrop-blur flex justify-center">
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
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            {buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={button.variant as "default" | "outline" | "secondary"}
                className="hidden md:flex"
              >
                <Link href={button.href}>{button.text}</Link>
              </Button>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                    >
                      {link.text}
                    </Link>
                  ))}
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      asChild
                      variant={
                        button.variant as "default" | "outline" | "secondary"
                      }
                    >
                      <Link href={button.href}>{button.text}</Link>
                    </Button>
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
