"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Book, Star, Users } from "lucide-react";
import Image from "next/image";

interface BookDetailsDialogProps {
  book: {
    id: number;
    title: string;
    author: string;
    coverUrl: string;
    description: string;
    rating: number;
    readers: number;
    genre: string;
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookDetailsDialog({
  book,
  open,
  onOpenChange,
}: BookDetailsDialogProps) {
  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{book.title}</DialogTitle>
          <DialogDescription>by {book.author}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="aspect-[3/4] relative">
            <Image
              src={book.coverUrl}
              alt={book.title}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">About</h4>
              <p className="text-sm text-muted-foreground">
                {book.description}
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Genre</span>
                <span>{book.genre}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Rating</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {book.rating}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Readers</span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {book.readers}
                </span>
              </div>
            </div>
            <Separator />
            <Button className="w-full">Add to Reading List</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}