import { GraduationCap, Users, BookOpen, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#110a1abe] to-[#030307] text-white">
      <header className="sticky top-0 z-50 bg-[#1a002d] border-b border-[#2c0038]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Gemini Academy Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold">Gemini Academy</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="hover:text-[#ffd700] transition-colors">About Us</Link>
            <Link href="/team" className="hover:text-[#ffd700] transition-colors">The Team</Link>
            <Link href="/classes" className="hover:text-[#ffd700] transition-colors">Classes</Link>
            <Button className="bg-[#ffd700] text-[#1a002d] hover:bg-[#ffd700]/90">Join Us</Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 text-center bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Gemini Academy</h1>
            <p className="text-xl mb-8">Unlock Your Potential in the Stars</p>
            <Button className="bg-[#ffd700] text-[#1a002d] hover:bg-[#ffd700]/90 text-lg px-8 py-3">
              Start Your Journey
            </Button>
          </div>
        </section>

        <section className="py-16 bg-[#2c0038]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1a002d] p-6 rounded-lg flex flex-col items-center text-center">
                <GraduationCap className="w-12 h-12 mb-4 text-[#ffd700]" />
                <h3 className="text-xl font-semibold mb-2">Expert Education</h3>
                <p>Learn from industry professionals and experienced educators.</p>
              </div>
              <div className="bg-[#1a002d] p-6 rounded-lg flex flex-col items-center text-center">
                <Users className="w-12 h-12 mb-4 text-[#ffd700]" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p>Join a supportive network of like-minded individuals.</p>
              </div>
              <div className="bg-[#1a002d] p-6 rounded-lg flex flex-col items-center text-center">
                <BookOpen className="w-12 h-12 mb-4 text-[#ffd700]" />
                <h3 className="text-xl font-semibold mb-2">Diverse Courses</h3>
                <p>Explore a wide range of subjects tailored to your interests.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
            <div className="bg-[#2c0038] p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-[#ffd700]" />
                <Star className="w-5 h-5 text-[#ffd700]" />
                <Star className="w-5 h-5 text-[#ffd700]" />
                <Star className="w-5 h-5 text-[#ffd700]" />
                <Star className="w-5 h-5 text-[#ffd700]" />
              </div>
              <p className="text-lg mb-4">"Gemini Academy has transformed my learning experience. The courses are engaging, and the community is incredibly supportive."</p>
              <p className="font-semibold">- Sarah J., Astrophysics Student</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#2c0038]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Join?</h2>
            <p className="text-xl mb-8">Embark on your learning journey with Gemini Academy today!</p>
            <form className="max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="mb-4" />
              <Button className="w-full bg-[#ffd700] text-[#1a002d] hover:bg-[#ffd700]/90">Sign Up Now</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a002d] border-t border-[#2c0038] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/logo.jpg" alt="Gemini Academy Logo" width={40} height={40} className="rounded-full mb-2" />
              <p>&copy; 2023 Gemini Academy. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#ffd700]">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#ffd700]">Terms of Service</Link>
              <Link href="#" className="hover:text-[#ffd700]">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}