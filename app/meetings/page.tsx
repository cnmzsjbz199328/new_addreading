"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import MeetingCard from "@/components/meetings/meeting-card";
import CreateMeetingDialog from "@/components/meetings/create-meeting-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MEETINGS = [
  {
    id: 1,
    title: "The Great Gatsby Discussion",
    date: "2024-02-15",
    time: "18:00",
    location: "Central Library",
    attendees: 12,
    book: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: 2,
    title: "1984 Book Club",
    date: "2024-02-18",
    time: "19:00",
    location: "Community Center",
    attendees: 8,
    book: "1984",
    author: "George Orwell",
  },
];

export default function MeetingsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Book Club Meetings</h1>
          <p className="text-muted-foreground mt-2">
            Join our upcoming discussions or create your own meeting
          </p>
        </div>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          Create Meeting
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="my-meetings">My Meetings</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MEETINGS.map((meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="text-center py-8 text-muted-foreground">
            No past meetings to display
          </div>
        </TabsContent>

        <TabsContent value="my-meetings">
          <div className="text-center py-8 text-muted-foreground">
            Sign in to view your meetings
          </div>
        </TabsContent>
      </Tabs>

      <CreateMeetingDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </div>
  );
}