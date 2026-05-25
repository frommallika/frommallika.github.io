import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Compass, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { guides } from '../lib/data';

export function Guides() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'bay-area-eats':
        return <MapPin className="h-6 w-6" />;
      case 'travel-planning':
        return <Compass className="h-6 w-6" />;
      case 'textiles':
        return <BookOpen className="h-6 w-6" />;
      default:
        return <Compass className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/6147b8f6-6711-49fc-baaf-c3b6c7aef777/1765675173066-322346fc/image.png"
            alt="Garden with roses and fence"
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
              Life & Style
            </span>
            <h1 className="mb-8 font-display text-6xl text-white drop-shadow-md md:text-8xl">Guides & Musings</h1>
            <div className="mx-auto mb-8 h-1 w-24 bg-white/80" />
            <p className="mx-auto max-w-2xl font-body text-xl font-light leading-relaxed text-white/90 drop-shadow-sm">
              Beyond the kitchen, I love exploring the world, finding beautiful things, and sharing the gems I
              discover along the way.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              className="group relative flex h-full flex-col overflow-hidden bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/10 transition-colors group-hover:bg-black/0" />
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-6 top-6 z-20 rounded-full bg-white/90 p-3 text-gray-900 shadow-sm backdrop-blur-sm">
                  {getIcon(guide.id)}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <span className="mb-3 text-xs font-bold uppercase tracking-widest text-saffron">
                  {guide.subtitle}
                </span>
                <h3 className="mb-4 font-display text-3xl text-gray-900 transition-colors group-hover:text-saffron">
                  {guide.title}
                </h3>
                <p className="mb-8 flex-1 font-body font-light leading-relaxed text-gray-500">{guide.description}</p>

                <div className="mt-auto border-t border-gray-100 pt-6">
                  <Link
                    to={`/guides/${guide.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 transition-all hover:text-saffron group-hover:gap-3"
                  >
                    Read Full Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
