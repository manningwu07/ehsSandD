import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="Brand"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Brand</span>
        </Link>
        <nav className="hidden items-center space-x-4 md:flex">
          <Link href="/" className="hover:text- transition-colors">
            1
          </Link>
          <Link href="/" className="hover:text- transition-colors">
            2
          </Link>
          <Link href="/" className="hover:text- transition-colors">
            3
          </Link>
          <Link href="/" className="hover:text- transition-colors">
            4
          </Link>
          <Link href="/" className="hover:text- transition-colors">
            5
          </Link>
        </nav>
      </div>
    </header>
  );
}
