import { motion } from 'framer-motion';
import { Calendar, Share2 } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { guides } from '../lib/data';

export function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides.find((item) => item.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!guide) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 font-display text-4xl text-gray-900">Guide Not Found</h1>
        <Link
          to="/guides"
          className="border-b border-saffron/30 pb-1 text-xs font-bold uppercase tracking-widest text-saffron transition-colors hover:border-saffron"
        >
          Back to Guides
        </Link>
      </div>
    );
  }

  const shareGuide = async () => {
    if (navigator.share) {
      await navigator.share({
        title: guide.title,
        text: guide.description,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <article className="min-h-screen bg-cream pb-24">
      <header className="container mx-auto max-w-4xl px-6 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 block text-xs font-bold uppercase tracking-widest text-saffron">
            {guide.subtitle}
          </span>
          <h1 className="mb-8 font-display text-5xl leading-[0.9] text-gray-900 md:text-7xl lg:text-8xl">
            {guide.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm font-medium tracking-wide text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{guide.date}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <button onClick={shareGuide} className="flex items-center gap-2 transition-colors hover:text-gray-900" type="button">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>
        </motion.div>
      </header>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-24 h-[50vh] w-full overflow-hidden md:h-[70vh]"
      >
        <img src={guide.image} alt={guide.title} className="h-full w-full object-cover" />
      </motion.div>

      <div className="container mx-auto max-w-3xl px-6">
        <div className="prose prose-lg prose-stone mx-auto">
          <p className="mb-16 font-display text-2xl italic leading-relaxed text-gray-800 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:text-saffron md:text-3xl">
            {guide.description}
          </p>

          {guide.content.map((section) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="mb-6 font-display text-3xl text-gray-900 md:text-4xl">{section.heading}</h2>
              <div className="mb-10 whitespace-pre-line font-body text-lg font-light leading-loose text-gray-600">
                {section.text}
              </div>
              {section.image && (
                <figure className="my-12">
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full rounded-sm shadow-xl shadow-gray-200/50"
                  />
                  <figcaption className="mt-4 text-center text-xs uppercase tracking-widest text-gray-400">
                    {section.heading}
                  </figcaption>
                </figure>
              )}
            </motion.div>
          ))}

          <div className="mt-24 border-t border-gray-200 pt-12 text-center">
            <h3 className="mb-4 font-display text-2xl text-gray-900">Thanks for reading</h3>
            <Link
              to="/guides"
              className="border-b border-saffron/30 pb-1 text-xs font-bold uppercase tracking-widest text-saffron transition-colors hover:border-saffron"
            >
              Read another guide
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
