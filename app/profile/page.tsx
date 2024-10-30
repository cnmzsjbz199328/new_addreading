"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// 示例用户数据
const USER = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://github.com/shadcn.png",
  joinDate: "2024-01-01",
  booksCreated: 5,
  meetingsCreated: 3,
  meetingsAttended: 12,
};

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-8">
          {/* 左侧个人信息 */}
          <Card className="p-6 flex-1">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={USER.avatar} alt={USER.name} />
                <AvatarFallback>{USER.name[0]}</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">{USER.name}</h2>
              <p className="text-muted-foreground">{USER.email}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Joined {USER.joinDate}
              </p>
              <Button className="mt-4" variant="outline">
                Edit Profile
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{USER.booksCreated}</div>
                <div className="text-sm text-muted-foreground">Books Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{USER.meetingsCreated}</div>
                <div className="text-sm text-muted-foreground">Meetings Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{USER.meetingsAttended}</div>
                <div className="text-sm text-muted-foreground">Meetings Attended</div>
              </div>
            </div>
          </Card>

          {/* 右侧活动历史 */}
          <Card className="p-6 flex-1">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <ScrollArea className="h-[400px]">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <p className="font-medium">Created a new book</p>
                  <p className="text-sm text-muted-foreground">Web Development Best Practices</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <div className="border-b pb-4">
                  <p className="font-medium">Attended a meeting</p>
                  <p className="text-sm text-muted-foreground">React Development Discussion</p>
                  <p className="text-xs text-muted-foreground">5 days ago</p>
                </div>
                {/* Add more activity items as needed */}
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  );
}