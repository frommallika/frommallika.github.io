import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Printer, Users } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { recipes } from '../lib/data';

export function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!recipe) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 font-display text-4xl text-gray-900">Recipe Not Found</h1>
        <p className="mb-8 font-light text-gray-600">The recipe you are looking for seems to be missing.</p>
        <Link
          to="/recipes"
          className="border-b border-saffron/30 pb-1 text-xs font-bold uppercase tracking-widest text-saffron transition-colors hover:border-saffron"
        >
          Back to Index
        </Link>
      </div>
    );
  }

  const getHeaderColor = (category: string) => {
    switch (category) {
      case 'Indian':
        return 'bg-rust';
      case 'Fusion':
        return 'bg-plum';
      case 'Global':
        return 'bg-olive';
      case 'Baking':
        return 'bg-rust';
      default:
        return 'bg-rust';
    }
  };

  return (
    <article className="min-h-screen bg-cream pb-24">
      <div className={`${getHeaderColor(recipe.category)} px-6 pt-32 pb-16 text-white`}>
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-white/80">
              {recipe.category}
            </span>
            <h1 className="mb-6 max-w-4xl font-display text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
              {recipe.title}
            </h1>
            <p className="mb-8 max-w-3xl font-display text-xl font-light italic leading-relaxed text-white/90 md:text-2xl">
              {recipe.description}
            </p>

            <div className="flex flex-wrap items-center gap-8 border-t border-white/20 pt-6 text-sm font-medium tracking-wide">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-white/80" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-white/80" />
                <span>Serves {recipe.servings}</span>
              </div>
              <div className="flex gap-2 md:ml-auto">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="rounded-sm bg-white/20 px-2 py-1 text-[10px] uppercase tracking-widest text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto mt-12 max-w-5xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="min-h-[400px]"
          >
            <div className="sticky top-32 h-[500px] w-full overflow-hidden rounded-sm shadow-lg shadow-gray-200/50">
              <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-sm border border-gray-100 bg-white p-8 shadow-sm md:p-10"
          >
            <h3 className="mb-8 border-b border-gray-100 pb-4 font-display text-3xl text-gray-900">
              Ingredients
            </h3>
            <ul className="space-y-4">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="group flex items-start gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300 transition-colors group-hover:bg-saffron" />
                  <span className="text-lg font-light leading-relaxed text-gray-700 transition-colors group-hover:text-gray-900">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16 rounded-sm bg-white p-8 shadow-xl shadow-gray-200/50 md:p-16"
        >
          <div className="mb-10 flex items-center justify-between border-b border-gray-100 pb-6">
            <h3 className="font-display text-3xl text-gray-900 md:text-4xl">Preparation</h3>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 transition-colors hover:text-gray-900"
              type="button"
            >
              <Printer size={16} /> Print
            </button>
          </div>

          <div className="mx-auto max-w-3xl space-y-12">
            {recipe.instructions.map((step, index) => (
              <div key={step} className="group flex gap-6 md:gap-10">
                <div className="flex flex-shrink-0 flex-col items-center">
                  <span className="font-display text-5xl text-gray-200 transition-colors duration-300 group-hover:text-rust">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="mt-4 h-full w-px bg-gray-100 transition-colors duration-300 group-hover:bg-rust/20" />
                </div>
                <p className="pt-2 pb-8 text-xl font-light leading-relaxed text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <Link
          to="/recipes"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={16} /> Back to Recipes
        </Link>
      </div>
    </article>
  );
}
