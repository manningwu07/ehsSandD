import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkPurple py-8 min-w-full text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0 flex items-center">
            <Image
              src="/logo.jpg"
              alt="Brand"
              width={40}
              height={40}
              className="mb-2 rounded-full"
            />
            <span className="px-2">&copy; Date Brand. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <span className="px-2"> Links usually but you can put other info here as well.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
