"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, Users, User } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <BookOpen className="h-6 w-6" />
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/" ? "text-primary" : "text-muted-foreground"
          )}
        >
          Reading Club
        </Link>
        <Link
          href="/meetings"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/meetings" ? "text-primary" : "text-muted-foreground"
          )}
        >
          My Meetings
        </Link>
        <Link
          href="/my-books"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/my-books" ? "text-primary" : "text-muted-foreground"
          )}
        >
          My Books
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <Link
          href="/profile"
          className={cn(
            "p-2 rounded-full hover:bg-accent transition-colors",
            pathname === "/profile" && "bg-accent"
          )}
        >
          <User className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
} 