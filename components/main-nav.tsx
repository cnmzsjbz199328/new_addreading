"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Users, User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import styles from "./main-nav.module.css";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <BookOpen className="h-6 w-6" />
      <nav className={styles.nav}>
        <Link
          href="/"
          className={cn(
            styles.link,
            pathname === "/" ? styles.activeLink : styles.inactiveLink
          )}
        >
          Reading Club
        </Link>
        <Link
          href="/meetings"
          className={cn(
            styles.link,
            pathname === "/meetings" ? styles.activeLink : styles.inactiveLink
          )}
        >
          My Meetings
        </Link>
        <Link
          href="/my-books"
          className={cn(
            styles.link,
            pathname === "/my-books" ? styles.activeLink : styles.inactiveLink
          )}
        >
          My Books
        </Link>
      </nav>
      <div className={styles.rightSection}>
        <Link
          href="/profile"
          className={cn(
            styles.profileLink,
            pathname === "/profile" && styles.activeProfile
          )}
        >
          <User className="h-6 w-6" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
} 