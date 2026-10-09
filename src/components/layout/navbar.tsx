"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/labs", label: "Labs" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

const secondaryLinks = [
  { href: "/lectures", label: "Lectures" },
  { href: "/assessments", label: "Assessments" },
  { href: "/staff", label: "Staff" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold flex items-center gap-2 text-foreground">
          <Bot className="h-5 w-5 text-primary" />
          <span>Intro to AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground font-semibold" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="inline-flex h-8 items-center justify-center gap-1 rounded-md px-2 text-sm font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              More <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {secondaryLinks.map((link) => (
                <DropdownMenuItem key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "w-full cursor-pointer",
                      pathname === link.href ? "font-semibold text-foreground" : ""
                    )}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b bg-background px-4 py-4">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "py-1.5 transition-colors hover:text-foreground",
                  pathname === link.href ? "text-foreground font-semibold" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-1 border-t pt-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                More
              </span>
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block py-1.5 transition-colors hover:text-foreground",
                    pathname === link.href ? "text-foreground font-semibold" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
