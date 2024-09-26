import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  name: string
  price: number
  description: string
  features: string[]
}

export default function ServiceCard({ name, price, description, features }: ServiceCardProps) {
  return (
    <Card className="bg-darkPurple border border-gold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="text-center">
          <span className="text-4xl font-bold text-gold">${price}</span>
        </div>
        <p className="text-center text-gray-300">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-gold" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-gold text-darkPurple hover:bg-gold/90 transition-colors">
          <Link href="#">Purchase</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

