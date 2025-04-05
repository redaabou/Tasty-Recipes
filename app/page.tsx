import Link from "next/link";
import { categories } from "./data/categories";
// import { featuredRecipes } from "../app/data/featuredRecipes";
import Image from "next/image";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ChefHat, Clock, Utensils, BookOpen, Award, Globe } from "lucide-react";

export default function Home() {
  
  const culinaryTips = [
    {
      title: "Perfect Pasta",
      description:
        "Always salt your pasta water until it tastes like the sea, and reserve some pasta water before draining to help sauce cling to the pasta.",
      icon: <Utensils className="h-8 w-8 text-primary" />,
    },
    {
      title: "Spice Storage",
      description:
        "Store spices in airtight containers away from heat, light, and moisture. Most ground spices stay fresh for about 6 months.",
      icon: <ChefHat className="h-8 w-8 text-primary" />,
    },
    {
      title: "Knife Skills",
      description:
        "Keep your knives sharp - a sharp knife is safer than a dull one as it requires less force and gives you more control.",
      icon: <Clock className="h-8 w-8 text-primary" />,
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <Image
          src="/images/cooking-ingredient.jpg"
          alt="Culinary Journey"
          width={1200}
          height={600}
          className="object-cover w-full h-[500px]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Culinary Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Embark on a global gastronomic adventure, exploring authentic
            recipes and culinary traditions from around the world.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="#categories">Explore Cuisines</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <Link href="#featured">Featured Recipes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Culinary Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Culinary Journey, we believe that food is more than just
              sustenance—it&apos;s a window into culture, history, and tradition.
              Each recipe tells a story of the people who created it, the land
              that nurtured its ingredients, and the generations who have
              preserved and evolved it.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our mission is to bring these stories to your kitchen, providing
              you with authentic recipes, techniques, and cultural context that
              allows you to experience the world&apos;s diverse culinary heritage
              from your own home.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Authentic Recipes</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Global Cuisines</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Cultural Context</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/pexels-photo-262978.jpeg"
              alt="Cooking ingredients"
              width={300}
              height={300}
              className="rounded-lg object-cover h-full"
            />
            <div className="grid grid-rows-2 gap-4">
              <Image
                src="/images/global-cuisine.jpg"
                alt="Cooking process"
                width={150}
                height={150}
                className="rounded-lg object-cover h-full"
              />
              <Image
                src="/images/Party-food.jpg"
                alt="Finished dish"
                width={150}
                height={150}
                className="rounded-lg object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
  {categories.map((category) => (
    <Link key={category.id} href={`/category/${category.id}`} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-200 block">
        <Image
          src={category.image}
          alt={category.name}
          width={300}
          height={160}
          className="rounded-md mb-2 object-cover w-full h-40"
        />
        <h2 className="text-xl font-semibold">{category.name}</h2>
        <p className="text-sm text-gray-500">
          {category.region} | {category.difficulty}
        </p>
      </a>
    </Link>
  ))}
</div>


      {/* Featured Recipes */}
      {/* <h2 className="text-2xl font-bold mb-4">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRecipes.map((recipe) => (
          <Link key={recipe.name} href={recipe.link}>
            <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
              <img src={recipe.image} alt={recipe.name} className="rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{recipe.name}</h3>
              <p className="text-sm text-gray-500">{recipe.cuisine}</p>
              <p className="text-xs text-gray-400">
                Prep: {recipe.prepTime} | Cook: {recipe.cookTime}
              </p>
            </div>
          </Link>
        ))}
      </div> */}

      {/* Culinary Tips */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Culinary Tips & Techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance your cooking skills with these professional tips that will
            help you elevate your dishes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {culinaryTips.map((tip, index) => (
            <Card key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">{tip.icon}</div>
              <h3 className="text-xl font-medium mb-2">{tip.title}</h3>
              <p className="text-muted-foreground">{tip.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-16">
        <div className="bg-muted rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Join Our Culinary Community
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive weekly recipe
                inspiration, cooking tips, and exclusive content delivered
                straight to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/chef.jpg"
                alt="Newsletter"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Our Blog */}
      <section>
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">About Our Food Blog</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
            Our restaurant blog is dedicated to sharing authentic recipes from
            around the world. We explore the history, ingredients, and
            techniques behind each dish to help you create amazing culinary
            experiences at home.
          </p>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Founded in 2023 by a team of passionate food enthusiasts, Culinary
            Journey aims to bridge cultural gaps through the universal language
            of food. We work with chefs, food historians, and home cooks from
            around the world to bring you the most authentic and accessible
            recipes.
          </p>
        </div>
      </section>
    </div>
  );
}
