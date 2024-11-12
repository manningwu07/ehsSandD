"use client";

import { Button } from "./ui/button";

export default function Sidebar({
  children,
  menuItems,
  selectedSection,
  setSelectedSection,
}: {
  children: React.ReactNode;
  menuItems: {label: string, icon:React.FC<React.SVGProps<SVGSVGElement>>}[];
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-gray-200 bg-white">
        <div className="p-4">
          <h2 className="mb-4 text-xl font-bold text-darkBlue">Quick Links</h2>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={item.label}>
                  <Button
                    onClick={() =>
                      setSelectedSection(menuItems[index]!.label.toLowerCase())
                    }
                    className={`flex items-center gap-3 rounded-md p-2 transition-colors ${
                      selectedSection === menuItems[index]?.label
                        ? "bg-darkGreen text-white"
                        : "text-darkBlue hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="h-[calc(100vh-4rem)] flex-1 overflow-y-auto bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );
}
