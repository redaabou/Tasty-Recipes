export interface Category {
    id: string;
    name: string;
    image: string;
    description: string;
    featured: string;
    region: string;
    difficulty: string;
    longDescription: string;
    regions?: string[];
    keyIngredients?: string[];
    famousDishes?: string[];
    recipes?: Recipe[]; // Ensure Recipe is defined or imported
    
  }
  
  export interface Recipe {
    id: string;
    name: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    prepTime: string;
    cookTime: string;
    difficulty: string;
    region: string;
  
    
  }

  export interface FeaturedRecipe {
    name: string;
    cuisine: string;
    image: string;
    description: string;
    prepTime: string;
    cookTime: string;
    link: string;
  }
  