import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-darkPurple py-8 min-w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0 flex items-center">
            <Image
              src="/logo.jpg"
              alt="AstroGaels Logo"
              width={40}
              height={40}
              className="mb-2 rounded-full"
            />
            <span className="px-2">&copy; 2024 AstroGaels. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <span className="px-2"> Made by Manning Wu (Class of 2025)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
