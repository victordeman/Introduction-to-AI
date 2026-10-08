"use client";

import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-bold flex items-center gap-2">
          <span>Intro to AI</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/syllabus" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Syllabus
          </Link>
          <Link href="/lectures" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Lectures
          </Link>
          <Link href="/labs" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Labs
          </Link>
          <Link href="/resources" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Resources
          </Link>
          <Link href="/assessments" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Assessments
          </Link>
          <Link href="/staff" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Staff
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
