import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <nav
          className={`transition-all duration-300 w-full max-w-5xl rounded-full border ${
            isScrolled || isMobileMenuOpen
              ? 'glass-nav border-white/10 shadow-2xl shadow-black/50'
              : 'bg-transparent border-transparent'
          }`}
        >
          <div className="px-6 py-3 flex justify-between items-center">
            <NavLink to="/" className="text-xl font-bold tracking-tight flex items-center gap-2 z-50">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/20">
                <span className="text-white font-display font-bold">R</span>
              </div>
              <span className="font-display">RJ Global</span>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:flex items-center">
                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                Get Started
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden md:hidden px-6 pb-6"
              >
                <div className="flex flex-col space-y-2 pt-4 border-t border-white/5">
                    {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                        `text-lg font-medium py-2 transition-colors ${
                            isActive ? 'text-brand-500' : 'text-gray-400'
                        }`
                        }
                    >
                        {item.label}
                    </NavLink>
                    ))}
                    <button className="w-full bg-brand-500 text-white px-5 py-3 rounded-lg text-lg font-semibold mt-4">
                        Get Started
                    </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-dark-border py-20 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="text-xl font-bold font-display">RJ Global</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Redefining business efficiency with intelligent, autonomous AI agents.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#" className="text-gray-600 hover:text-white transition-colors">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><NavLink to="/about" className="hover:text-brand-400 transition-colors">About Us</NavLink></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-white">Product</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><NavLink to="/features" className="hover:text-brand-400 transition-colors">AI Agents</NavLink></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-white">Contact</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="mailto:hello@rjglobal.ai" className="hover:text-brand-400 transition-colors">hello@rjglobal.ai</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Support Center</a></li>
                <li>123 Innovation Dr,<br />San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; 2024 RJ Global Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};