import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Recipe } from '../lib/data';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link to={`/recipes/${recipe.slug}`} className="block cursor-pointer group">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-sm bg-gray-100">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col items-center space-y-2 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
            {recipe.category} / {recipe.cookTime}
          </span>
          <h3 className="font-display text-2xl text-gray-900 transition-colors duration-300 group-hover:text-saffron">
            {recipe.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
