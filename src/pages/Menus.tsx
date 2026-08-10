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
            src="/images/menu-hosting-hero-original.png"
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

      <div className="container mx-auto px-6 py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-saffron">
            Browse Menus
          </span>
          <h2 className="font-display text-4xl text-gray-900 md:text-5xl">Hosting ideas at a glance</h2>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menus.map((menu) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="group flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link
                to={`/menus/${menu.slug}`}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-stone-100"
                aria-label={`Read ${menu.title}`}
              >
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-emerald">{menu.occasion}</span>
                  <span className="text-gray-300">/</span>
                  <span className="text-gray-400">{menu.season}</span>
                </div>

                <Link to={`/menus/${menu.slug}`} className="mb-3 block">
                  <h2 className="font-display text-2xl leading-tight text-gray-900 transition-colors hover:text-saffron group-hover:text-saffron md:text-3xl">
                    {menu.title}
                  </h2>
                </Link>
                <p className="mb-6 flex-1 font-body text-sm font-light leading-relaxed text-gray-500 md:text-base">
                  {menu.description}
                </p>

                <Link
                  to={`/menus/${menu.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 transition-all hover:text-saffron group-hover:gap-3"
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
