import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Info, Utensils } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { menus } from '../lib/data';

export function MenuDetail() {
  const { slug } = useParams<{ slug: string }>();
  const menu = menus.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!menu) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 font-display text-4xl text-gray-900">Menu Not Found</h1>
        <Link
          to="/menus"
          className="border-b border-saffron/30 pb-1 text-xs font-bold uppercase tracking-widest text-saffron transition-colors hover:border-saffron"
        >
          Back to Menus
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-cream pb-24">
      <div className="container mx-auto max-w-4xl px-6 pt-32">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 overflow-hidden border border-stone-100 bg-white p-8 text-center shadow-xl md:p-16"
        >
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-saffron via-magenta to-saffron opacity-70" />

          <span className="mb-6 block text-xs font-bold uppercase tracking-widest text-emerald">
            {menu.occasion}
          </span>
          <h1 className="mb-8 font-display text-5xl leading-tight text-gray-900 md:text-6xl">{menu.title}</h1>
          <div className="mx-auto mb-8 h-1 w-16 bg-saffron" />

          <div className="mb-10 flex flex-wrap justify-center gap-6 text-sm font-medium tracking-wide text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-saffron" />
              <span>{menu.season}</span>
            </div>
          </div>

          <p className="mx-auto max-w-2xl font-body text-lg italic leading-relaxed text-gray-600">
            {menu.description}
          </p>
        </motion.header>

        <div className="space-y-20">
          {menu.details?.intro && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="font-body text-xl font-light leading-loose text-gray-800">{menu.details.intro}</p>
            </motion.section>
          )}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative mx-auto max-w-md border border-stone-100 bg-white p-12 text-center shadow-lg"
          >
            <div className="absolute left-4 top-4 h-4 w-4 border-l border-t border-saffron" />
            <div className="absolute right-4 top-4 h-4 w-4 border-r border-t border-saffron" />
            <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-saffron" />
            <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-saffron" />

            <h2 className="mb-8 font-display text-3xl uppercase tracking-widest text-gray-900 underline decoration-saffron/30 decoration-1 underline-offset-8">
              Menu
            </h2>

            <div className="space-y-8">
              {menu.details?.components.map((component) => (
                <div key={component.name} className="flex flex-col items-center">
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald">{component.name}</h3>
                  <div className="flex flex-col gap-1 font-display text-xl leading-relaxed text-gray-800">
                    {component.items.map((item) => (
                      <span key={item.name}>{item.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
            <div className="space-y-12">
              {menu.details?.components && (
                <section>
                  <h3 className="mb-6 flex items-center gap-3 font-display text-2xl text-gray-900">
                    <Utensils size={20} className="text-saffron" />
                    The Details
                  </h3>
                  <div className="space-y-8">
                    {menu.details.components.map((component) => (
                      <div key={component.name} className="group border-b border-gray-100 pb-6 last:border-0">
                        <div className="mb-4 flex items-baseline justify-between">
                          <h4 className="font-display text-xl text-gray-800">{component.name}</h4>
                          {component.recipeSlug && (
                            <Link
                              to={`/recipes/${component.recipeSlug}`}
                              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-saffron transition-colors hover:text-gray-900"
                            >
                              Recipe <ArrowLeft size={10} className="rotate-180" />
                            </Link>
                          )}
                        </div>
                        <div className="space-y-5">
                          {component.items.map((item) => (
                            <div key={item.name}>
                              <p className="mb-1 font-display text-lg text-gray-700">{item.name}</p>
                              <p className="font-body text-sm italic leading-relaxed text-gray-500">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {menu.details?.servingTips && (
                <section className="rounded-sm bg-stone-50 p-8">
                  <h3 className="mb-4 flex items-center gap-2 font-display text-2xl text-gray-900">
                    <Info size={20} className="text-gray-400" />
                    Host Notes
                  </h3>
                  <p className="border-l-2 border-emerald pl-4 italic leading-relaxed text-gray-600">
                    {menu.details.servingTips}
                  </p>
                </section>
              )}
            </div>

            <div>
              {menu.details?.timeline && menu.details.timeline.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="mb-8 flex items-center gap-2 font-display text-2xl text-gray-900">
                    <Clock size={20} className="text-emerald" />
                    Timeline
                  </h3>
                  <div className="relative ml-3 space-y-10 border-l border-emerald/20 py-2">
                    {menu.details.timeline.map((item) => (
                      <div key={`${item.timing}-${item.task}`} className="relative pl-8">
                        <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald ring-4 ring-white" />
                        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-emerald">
                          {item.timing}
                        </span>
                        <p className="rounded-sm border border-gray-100 bg-white p-4 leading-relaxed text-gray-700 shadow-sm">
                          {item.task}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
