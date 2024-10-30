import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Book, Calendar, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-8">
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to Reading Club
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Join our community of book lovers. Discover new books, share your thoughts,
          and participate in engaging discussions.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/meetings">Join a Meeting</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/books">Browse Books</Link>
          </Button>
        </div>
      </section>

      <section className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <Book className="h-12 w-12 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Curated Books</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Explore our carefully selected collection of books across various genres.
          </p>
          <Button variant="secondary" className="w-full" asChild>
            <Link href="/books">View Collection</Link>
          </Button>
        </Card>

        <Card className="p-6">
          <Calendar className="h-12 w-12 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Regular Meetings</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Join our weekly book discussions and connect with fellow readers.
          </p>
          <Button variant="secondary" className="w-full" asChild>
            <Link href="/meetings">View Schedule</Link>
          </Button>
        </Card>

        <Card className="p-6 sm:col-span-2 lg:col-span-1">
          <Users className="h-12 w-12 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Community</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Be part of a growing community of passionate readers and thinkers.
          </p>
          <Button variant="secondary" className="w-full" asChild>
            <Link href="/profile">Join Us</Link>
          </Button>
        </Card>
      </section>
    </div>
  );
}