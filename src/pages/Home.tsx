import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RecipeCard } from '../components/RecipeCard';
import { bio, recipes } from '../lib/data';

export function Home() {
  const featuredRecipes = recipes.filter((recipe) => recipe.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <section className="px-6 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col items-center text-center md:mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 font-display text-6xl leading-[0.9] tracking-normal text-gray-900 md:text-8xl lg:text-9xl"
            >
              From
              <br />
              <span className="italic text-saffron">Mallika</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-3xl font-display text-2xl font-light leading-relaxed text-gray-600 md:text-3xl"
            >
              Recipes, recommendations, and notes worth remembering.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="relative h-[50vh] w-full overflow-hidden rounded-sm md:h-[70vh]"
          >
            <img
              src="/images/home-hero.png"
              alt="Indian meal and travel keepsakes arranged on richly patterned textiles"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
            <div className="order-2 space-y-8 md:order-1">
              <h2 className="font-display text-4xl text-gray-900 md:text-5xl">{bio.title}</h2>
              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
                {bio.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1000&auto=format&fit=crop"
                  alt="Mallika"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-saffron">
                Seasonal Favorites
              </span>
              <h2 className="font-display text-4xl text-gray-900 md:text-5xl">From my kitchen</h2>
            </div>
            <Link
              to="/recipes"
              className="hidden items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-gray-900 md:flex"
            >
              View recipes <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
