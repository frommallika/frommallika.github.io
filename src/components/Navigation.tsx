import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const hasDarkHero = ['/guides', '/menus'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Menus & Hosting', path: '/menus' },
    { name: 'Guides', path: '/guides' },
  ];

  const useLightText = hasDarkHero && !scrolled && !isOpen;

  return (
    <>
      <nav
        className={`fixed z-50 w-full transition-all duration-500 ${
          scrolled || isOpen
            ? 'border-b border-gray-100 bg-cream/95 py-4 shadow-sm backdrop-blur-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link to="/" className="relative z-50 group">
            <span
              className={`font-display text-2xl font-bold tracking-normal transition-colors ${
                useLightText ? 'text-white' : 'text-gray-900'
              }`}
            >
              FromMallika<span className={useLightText ? 'text-white' : 'text-saffron'}>.</span>
            </span>
          </Link>

          <div className="hidden items-center space-x-10 md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const textColorClass = useLightText
                ? isActive
                  ? 'text-white font-semibold'
                  : 'text-white/90 hover:text-white'
                : isActive
                  ? 'text-saffron font-semibold'
                  : 'text-gray-600 hover:text-saffron';

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative text-sm font-medium uppercase tracking-widest transition-colors ${textColorClass}`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full origin-left transform transition-transform duration-300 ${
                      useLightText ? 'bg-white' : 'bg-saffron'
                    } ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`z-50 transition-colors focus:outline-none md:hidden ${
              useLightText ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle navigation menu"
            type="button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-display text-4xl transition-all hover:italic ${
                    location.pathname === link.path ? 'text-saffron' : 'text-gray-800 hover:text-saffron'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
