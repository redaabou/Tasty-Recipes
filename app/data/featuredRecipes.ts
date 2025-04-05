import { FeaturedRecipe } from "../types";

export const featuredRecipes: FeaturedRecipe[] = [
  {
    name: "Pasta Carbonara",
    cuisine: "Italian",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "A classic Roman pasta dish with eggs, cheese, pancetta, and black pepper",
    prepTime: "10 min",
    cookTime: "15 min",
    link: "/recipe/italian/pasta-carbonara",
  },
  {
    name: "Chicken Tagine",
    cuisine: "Moroccan",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "A fragrant Moroccan slow-cooked stew with preserved lemons and olives",
    prepTime: "20 min",
    cookTime: "90 min",
    link: "/recipe/moroccan/tagine",
  },
  {
    name: "Moussaka",
    cuisine: "Greek",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Layered dish with eggplant, potatoes, and minced meat topped with béchamel sauce",
    prepTime: "45 min",
    cookTime: "60 min",
    link: "/recipe/greek/moussaka",
  },
];
