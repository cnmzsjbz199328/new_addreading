"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 示例数据
const MY_BOOKS = [
  {
    id: 1,
    title: "Introduction to React",
    author: "Your Name",
    status: "draft",
    lastEdited: "2024-03-21",
    genre: "Technology",
    description: "A comprehensive guide to React development",
  },
  {
    id: 2,
    title: "Web Development Best Practices",
    author: "Your Name",
    status: "published",
    lastEdited: "2024-03-20",
    genre: "Technology",
    description: "Essential practices for modern web development",
  },
];

export default function MyBooksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredBooks = MY_BOOKS.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || book.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Books</h1>
          <p className="text-muted-foreground mt-2">
            Manage your book creations
          </p>
        </div>
        <Button onClick={() => window.location.href = "/books/create"}>
          Create New Book
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search your books..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-card rounded-lg shadow-sm p-6">
            <h3 className="font-semibold mb-2">{book.title}</h3>
            <div className="text-sm text-muted-foreground">
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Status: {book.status}</p>
              <p>Last Edited: {book.lastEdited}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="outline" size="sm">
                Delete
              </Button>
              {book.status === "draft" && (
                <Button variant="outline" size="sm">
                  Publish
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 