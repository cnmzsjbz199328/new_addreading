import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Book, Calendar, Users } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="container py-8">
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Welcome to Reading Club
        </h1>
        <p className={styles.description}>
          Join our community of book lovers. Discover new books, share your thoughts,
          and participate in engaging discussions.
        </p>
        <div className={styles.buttonGroup}>
          <Button asChild size="lg">
            <Link href="/meetings">Join a Meeting</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/books">Browse Books</Link>
          </Button>
        </div>
      </section>

      <section className={styles.featureGrid}>
        <Card className={styles.featureCard}>
          <Book className={styles.featureIcon} />
          <h2 className={styles.featureTitle}>Curated Books</h2>
          <p className={styles.featureDescription}>
            Explore our carefully selected collection of books across various genres.
          </p>
          <Button variant="secondary" className="w-full" asChild>
            <Link href="/books">View Collection</Link>
          </Button>
        </Card>

        <Card className={styles.featureCard}>
          <Calendar className={styles.featureIcon} />
          <h2 className={styles.featureTitle}>Regular Meetings</h2>
          <p className={styles.featureDescription}>
            Join our weekly book discussions and connect with fellow readers.
          </p>
          <Button variant="secondary" className="w-full" asChild>
            <Link href="/meetings">View Schedule</Link>
          </Button>
        </Card>

        <Card className={cn(styles.featureCard, styles.wideCard)}>
          <Users className={styles.featureIcon} />
          <h2 className={styles.featureTitle}>Community</h2>
          <p className={styles.featureDescription}>
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