import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Star, Users } from "lucide-react";

interface BookCardProps {
  book: {
    id: number;
    title: string;
    author: string;
    coverUrl: string;
    rating: number;
    readers: number;
    genre: string;
  };
  onClick: () => void;
}

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[3/4] relative">
        <Image
          src={book.coverUrl}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold leading-none tracking-tight mb-2">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        <div className="flex items-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{book.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{book.readers}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="secondary" className="w-full" onClick={onClick}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}