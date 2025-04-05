import { categories } from "@/app/data/categories";
import Image from "next/image";

interface Props {
  params: Promise<{ id: string }>; // Wrap params in a Promise
}

export default async function RecipePage({ params }: Props) {
  const resolvedParams = await params; // Await the params if it's a Promise
  const { id } = resolvedParams;

  const recipe = categories
    .flatMap((category) => category.recipes || [])
    .find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-red-600">
        Recipe not found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{recipe.name}</h1>
          <p className="text-gray-500 text-sm">
            <span className="mr-2">📍 {recipe.region}</span> |{" "}
            <span className="ml-2">⏱ Prep: {recipe.prepTime} | Cook: {recipe.cookTime}</span> |{" "}
            <span className="ml-2">🔥 Difficulty: {recipe.difficulty}</span>
          </p>
        </header>

        <div className="mb-6">
          <Image
            src={recipe.image}
            alt={recipe.name}
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{recipe.description}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </article>
    </div>
  );
}
