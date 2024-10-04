import { Card, CardContent } from "~/components/ui/card"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  position: string
  introduction: string
  imageUrl: string
}

export default function TeamMemberCard({ name, position, introduction, imageUrl }: TeamMemberProps) {
  return (
    <Card className="bg-darkPurple text-white overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={`${name} - ${position}`}
          layout="fill"
          className="object-contain pt-4 px-2 max-h-72"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mx-auto text-xl md:text-2xl font-bold text-gold">{name}</h3>
        <p className="mx-auto text-sm text-[#B19CD9] mb-2">{position}</p>
        <p className="text-sm">{introduction}</p>
      </CardContent>
    </Card>
  )
}