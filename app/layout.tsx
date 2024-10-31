import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { MainNav } from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reading Club',
  description: 'A community for book lovers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <MainNav />
            </div>
          </div>
          <main className="min-h-screen bg-background">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}