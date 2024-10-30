"use client";

import Link from "next/link";
import { Book, Calendar, LogIn, User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Book className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Reading Club
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/meetings"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              <div className="flex items-center gap-x-1">
                <Calendar className="h-4 w-4" />
                <span>Meetings</span>
              </div>
            </Link>
            <Link
              href="/books"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              <div className="flex items-center gap-x-1">
                <Book className="h-4 w-4" />
                <span>Books</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/auth">
                <LogIn className="h-4 w-4" />
                <span className="sr-only">Sign In</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/profile">
                <User className="h-4 w-4" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}