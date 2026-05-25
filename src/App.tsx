import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { RecipeDetail } from './pages/RecipeDetail';
import { GuideDetail } from './pages/GuideDetail';
import { MenuDetail } from './pages/MenuDetail';
import { Menus } from './pages/Menus';
import { Guides } from './pages/Guides';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import './global.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-cream font-body text-gray-900 antialiased selection:bg-saffron selection:text-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:slug" element={<RecipeDetail />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/menus/:slug" element={<MenuDetail />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:slug" element={<GuideDetail />} />
            <Route
              path="/about"
              element={
                <div className="pt-32 text-center">
                  <h1 className="font-display text-4xl">Coming Soon</h1>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
