import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-12 md:py-16 bg-muted/30">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-bold text-lg mb-4">Culinary Journey</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Exploring the world through authentic recipes and culinary traditions since 2023.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Cuisine Categories</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/category/italian" className="hover:underline">
              Italian Cuisine
            </Link>
            <Link href="/category/moroccan" className="hover:underline">
              Moroccan Cuisine
            </Link>
            <Link href="/category/french" className="hover:underline">
              French Cuisine
            </Link>
            <Link href="/category/spanish" className="hover:underline">
              Spanish Cuisine
            </Link>
            <Link href="/category/greek" className="hover:underline">
              Greek Cuisine
            </Link>
            <Link href="/category/lebanese" className="hover:underline">
              Lebanese Cuisine
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Explore</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/cooking-tips" className="hover:underline">
              Cooking Tips
            </Link>
            <Link href="/ingredients" className="hover:underline">
              Ingredient Guide
            </Link>
            <Link href="/kitchen-essentials" className="hover:underline">
              Kitchen Essentials
            </Link>
            <Link href="/meal-planning" className="hover:underline">
              Meal Planning
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Legal & Contact</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-sm text-muted-foreground">
            © {new Date().getFullYear()} Culinary Journey. All rights reserved.
          </p>
          <p className="text-center md:text-right text-sm text-muted-foreground">
            Designed with passion for food lovers worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}

