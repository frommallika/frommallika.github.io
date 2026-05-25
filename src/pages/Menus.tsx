import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menus } from '../lib/data';

export function Menus() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/6147b8f6-6711-49fc-baaf-c3b6c7aef777/1765676072007-77d11ed1/image.png"
            alt="Candlelit dinner setting with wine and flowers"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 block text-sm font-bold uppercase tracking-[0.2em] text-white/90">
              The Art of Gathering
            </span>
            <h1 className="mb-8 font-display text-6xl text-white drop-shadow-md md:text-8xl">Menus & Hosting</h1>
            <div className="mx-auto mb-8 h-1 w-24 bg-white/80" />
            <p className="mx-auto max-w-2xl font-body text-xl font-light leading-relaxed text-white/90 drop-shadow-sm">
              Curated menus for every occasion, from festive Diwali dinners to casual backyard brunches.
              Because the best memories are made around the table.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-24">
          {menus.map((menu, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              key={menu.id}
              className={`group flex flex-col items-stretch overflow-hidden bg-white shadow-sm transition-shadow duration-500 hover:shadow-lg ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="relative min-h-[400px] w-full overflow-hidden md:w-1/2">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative flex w-full flex-col justify-center p-10 md:w-1/2 md:p-16">
                <span className="pointer-events-none absolute right-6 top-4 select-none font-display text-9xl text-gray-50 opacity-50">
                  {index + 1}
                </span>

                <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-emerald">
                  {menu.occasion}
                </span>
                <h2 className="mb-6 font-display text-4xl text-gray-900 transition-colors group-hover:text-saffron">
                  {menu.title}
                </h2>
                <p className="mb-10 font-body text-lg font-light leading-relaxed text-gray-500">
                  {menu.description}
                </p>

                <Link
                  to={`/menus/${menu.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 transition-all hover:text-saffron group-hover:gap-4"
                >
                  Read Full Guide <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
