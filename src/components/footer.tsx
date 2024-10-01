import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-darkPurple py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0 flex items-center">
            <Image
              src="/logo.jpg"
              alt="Gemini Academy Logo"
              width={40}
              height={40}
              className="mb-2 rounded-full"
            />
            <span className="px-2">&copy; 2024 Gemini Academy. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
