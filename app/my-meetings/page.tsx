"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// 示例数据
const MY_MEETINGS = [
  {
    id: 1,
    title: "Classic Literature Discussion",
    date: "2024-03-25",
    time: "19:00",
    book: "The Great Gatsby",
    participants: 8,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Sci-Fi Book Club",
    date: "2024-03-28",
    time: "20:00",
    book: "1984",
    participants: 12,
    status: "upcoming",
  },
];

export default function MyMeetingsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeetings = MY_MEETINGS.filter((meeting) =>
    meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    meeting.book.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Meetings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your reading club meetings
          </p>
        </div>
        <Button onClick={() => window.location.href = "/meetings/create"}>
          Create New Meeting
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search meetings..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMeetings.map((meeting) => (
          <div key={meeting.id} className="bg-card rounded-lg shadow-sm p-6">
            <h3 className="font-semibold mb-2">{meeting.title}</h3>
            <div className="text-sm text-muted-foreground">
              <p>Book: {meeting.book}</p>
              <p>Date: {meeting.date}</p>
              <p>Time: {meeting.time}</p>
              <p>Participants: {meeting.participants}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 