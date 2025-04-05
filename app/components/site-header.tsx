"use client"

import Link from "next/link"
import { Home, Menu, Search, User, ShoppingBag } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import { Input } from "@/app/components/ui/input"
import { useState } from "react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const categories = [
    { id: "italian", name: "Italian" },
    { id: "moroccan", name: "Moroccan" },
    { id: "french", name: "French" },
    { id: "spanish", name: "Spanish" },
    { id: "greek", name: "Greek" },
    { id: "lebanese", name: "Lebanese" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Home className="h-6 w-6" />
          <span className="font-bold text-xl hidden md:inline-block">Tasty Recipes</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {category.name}
            </Link>
          ))}
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </Link>
          <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Blog
          </Link>
        </nav>

        <div className="flex items-center ml-auto gap-4">
          <div className="hidden md:flex relative w-40 lg:w-64">
            <Input type="search" placeholder="Search recipes..." className="pr-8" />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Saved recipes</span>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden ml-4">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setOpen(false)}>
              <Home className="h-6 w-6" />
              <span className="font-bold text-xl">Tasty Recipes</span>
            </Link>

            <div className="relative mb-6">
              <Input type="search" placeholder="Search recipes..." className="pr-8" />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="text-foreground/60 hover:text-foreground transition-colors text-lg"
                  onClick={() => setOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/about"
                className="text-foreground/60 hover:text-foreground transition-colors text-lg"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-foreground/60 hover:text-foreground transition-colors text-lg"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
            </nav>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Saved
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

