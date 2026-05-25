import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { recipes } from '../lib/data';

export function Recipes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Indian', 'Fusion', 'Global', 'Baking', 'Breakfast', 'Dinner'];

  const filteredRecipes = recipes.filter((recipe) => {
    const normalizedSearch = searchQuery.toLowerCase();
    const matchesSearch =
      recipe.title.toLowerCase().includes(normalizedSearch) ||
      recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(normalizedSearch));
    const matchesFilter =
      activeFilter === 'All' || recipe.category === activeFilter || recipe.tags.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h1 className="mb-6 font-display text-5xl text-gray-900 md:text-6xl">From My Kitchen</h1>
          <p className="mx-auto max-w-2xl font-body text-lg font-light text-gray-500">
            Vegetarian home cooking rooted in Indian tradition and shaped by global flavors.
          </p>
        </div>

        <div className="mx-auto mb-16 max-w-6xl space-y-8">
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for paneer, avocado, or spicy..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full border border-gray-200 bg-white py-4 pl-12 pr-12 text-lg font-light shadow-sm outline-none transition-all focus:border-saffron focus:ring-1 focus:ring-saffron"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
                type="button"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`border px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === filter
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-transparent text-gray-500 hover:border-gray-400'
                }`}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="mb-4 font-display text-3xl text-gray-300">No recipes found</p>
            <p className="font-body text-gray-500">Try adjusting your search terms or filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
              }}
              className="mt-6 text-saffron underline hover:text-orange-700"
              type="button"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
