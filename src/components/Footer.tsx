import { Heart, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1c1917] pt-20 pb-10 text-cream">
      <div className="container mx-auto px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="mb-6 font-display text-2xl text-saffron">FromMallika</h3>
            <p className="max-w-sm font-light leading-relaxed text-white/60">
              Vegetarian recipes rooted in Indian tradition and inspired by flavors from around the world.
              Celebrating the art of hosting, travel, and eating well.
            </p>
            <div className="mt-8 flex space-x-6">
              <a href="https://www.instagram.com/" aria-label="Instagram" className="text-white/60 transition-colors hover:text-saffron">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email" className="text-white/60 transition-colors hover:text-saffron">
                <Mail size={20} />
              </a>
              <Link to="/" aria-label="Home" className="text-white/60 transition-colors hover:text-saffron">
                <Heart size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4 md:pl-12">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/40">Explore</h4>
            <ul className="space-y-3 font-light text-white/80">
              <li>
                <Link to="/recipes" className="transition-colors hover:text-saffron">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/menus" className="transition-colors hover:text-saffron">
                  Menus & Hosting
                </Link>
              </li>
              <li>
                <Link to="/guides" className="transition-colors hover:text-saffron">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between text-xs font-light text-white/20 md:flex-row">
          <p>Copyright {new Date().getFullYear()} FromMallika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
