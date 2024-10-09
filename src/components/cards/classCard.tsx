import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

interface Lecture {
  id: number;
  title: string;
  description: string;
  date: string;
  slidesUrl: string;
  videoUrl?: string;
  category: string;
}

export default function ClassCard({ lecture }: { lecture: Lecture }) {
  return (
    <Card key={lecture.id} className="bg-purple-900 border-gold">
      <CardContent className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-gold">
          {lecture.title}
        </h2>
        <p className="mb-4 text-sm text-gray-300">{lecture.description}</p>
        <p className="mb-4 text-sm text-gray-400">Date: {lecture.date}</p>
        <div className="mb-4">
          <iframe
            src={lecture.videoUrl ? lecture.videoUrl : lecture.slidesUrl}
            title={lecture.title}
            allow={`accelerometer; encrypted-media; ${lecture.videoUrl && "autoplay; clipboard-write;  gyroscope; picture-in-picture"}`}
            allowFullScreen
            className="aspect-video h-full w-full"
          ></iframe>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-darkPurple"
            >
              View Slides
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[95vw] max-w-none border-gold bg-darkPurple rounded-lg">
            <DialogHeader>
            <DialogTitle className="text-gold mx-auto my-3">
                {lecture.title} - Slides
              </DialogTitle>
            </DialogHeader>
            <iframe
              src={lecture.slidesUrl}
              title={`${lecture.title} Slides`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="aspect-video h-full w-full"
            ></iframe>
          </DialogContent>
          {/* <DialogClose className="absolute right-4 top-4 rounded-full text-white mouse-click">
            <X></X>
          </DialogClose> */}
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-darkPurple"
            >
              Full Video
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[95vw] max-w-none border-gold bg-darkPurple rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-gold mx-auto my-3">
                {lecture.title} - Video
              </DialogTitle>
            </DialogHeader>
            <iframe
              src={lecture.videoUrl}
              title={`${lecture.title} Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video h-full w-full"
            ></iframe>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
