import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, FileText, Info, ListTodo } from "lucide-react"

const menuItems = [
  { label: "Events", icon: ListTodo, href: "/students/events" },
  { label: "Calendar", icon: Calendar, href: "/students/calendar" },
  { label: "Tournament Info", icon: Info, href: "/students/tournaments" },
  { label: "Resources", icon: FileText, href: "/students/resources" }
]

export default function StudentsLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <h2 className="text-xl font-bold text-darkBlue mb-4">Quick Links</h2> 
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
                      pathname === item.href
                        ? "bg-darkGreen text-white"
                        : "text-darkBlue hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  )
}