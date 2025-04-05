import { categories } from "@/app/data/categories"; 
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/app/components/ui/card"; // Adjust the path based on your project structure
import { Clock, Utensils } from "lucide-react"; // Import the Clock and Utensils icons


export default async function CategoryPage({
  params,
}: { 
  params: Promise<{ categoryid: string }> // Wrap params in a Promise
}) {
  const resolvedParams = await params; // Await the params if it's a Promise
  const { categoryid } = resolvedParams;

  const category = categories.find(cat => cat.id === categoryid) || { 
    name: "Unknown",
    description: "No details available for this category.",
    longDescription: "No additional details available.", // Add this line
    image: "/placeholder.svg",
    regions: [],
    recipes: [],
    keyIngredients: [],
    famousDishes: [],
};

    return (
        <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          width={1000}
          height={500}
          className="object-cover w-full h-[300px] md:h-[400px]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">{category.description}</p>
        </div>
      </div>

       {/* Category Information */}
       <section className="mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About {category.name}</h2>
            <p className="text-muted-foreground mb-6">{category.longDescription}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="font-medium mb-2">Key Regions</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {(category.regions ?? []).map((region, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                      <span>{region}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Key Ingredients</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {(category.keyIngredients ?? []).map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Famous Dishes</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {(category.famousDishes ?? []).map((dish, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-medium mb-4">Cooking Techniques</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Difficulty Levels</h4>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Beginner</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">Moderate</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">Advanced</span>
                </div>
              </div>
              <div>
              <h4 className="text-sm font-medium mb-1">Common Methods</h4>
                <p className="text-sm text-muted-foreground">
                  {categoryid === "italian" && "Sautéing, Braising, Al dente pasta cooking, Risotto stirring"}
                  {categoryid === "moroccan" && "Slow cooking, Steaming, Spice blending, Preserving"}
                  {categoryid === "french" && "Sautéing, Flambéing, Poaching, Sauce making"}
                  {categoryid === "spanish" && "Grilling, Slow cooking, Frying, Rice cooking"}
                  {categoryid === "greek" && "Grilling, Baking, Slow roasting, Phyllo handling"}
                  {categoryid === "lebanese" && "Grilling, Mezze preparation, Yogurt straining, Spice mixing"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      {/* <section className="mb-8">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                Beginner
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                Moderate
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                Advanced
              </Button>
            </div>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <ArrowUpDown className="h-4 w-4" />
            <span>Sort by</span>
          </Button>
        </div>
      </section> */}

      {/* Recipes */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Popular {category.name} Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.recipes?.map((recipe) => (
            <Link href={`/recipe/${recipe.id}`} key={recipe.id} legacyBehavior>
              <a  target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        recipe.difficulty === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : recipe.difficulty === "Moderate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{recipe.name}</h3>
                  <p className="text-muted-foreground mb-4">{recipe.description}</p>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Prep: {recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils className="h-4 w-4" />
                      <span>Cook: {recipe.cookTime}</span>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span>Region: {recipe.region}</span>
                  </div>
                </CardContent>
              </Card>
              </a>
            </Link>
          ))}
        </div>
      </section>
        </div>
    );
}
