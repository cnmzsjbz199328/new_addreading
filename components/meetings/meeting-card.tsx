import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface MeetingCardProps {
  meeting: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    book: string;
    author: string;
  };
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">
            {meeting.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {meeting.book} by {meeting.author}
          </p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-x-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>
            {formatDate(meeting.date)} at {meeting.time}
          </span>
        </div>
        <div className="flex items-center gap-x-2 text-sm">
          <MapPin className="h-4 w-4" />
          <span>{meeting.location}</span>
        </div>
        <div className="flex items-center gap-x-2 text-sm">
          <Users className="h-4 w-4" />
          <span>{meeting.attendees} attending</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">Join Meeting</Button>
      </CardFooter>
    </Card>
  );
}