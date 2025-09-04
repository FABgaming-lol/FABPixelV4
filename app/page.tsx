'use client';

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow">
        <img src="/FabPixel-logo.png" alt="FABPixel Logo" className="h-10" />
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/FabPixel-banner.png)' }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center text-white">
          <h1 className="text-4xl font-bold">FABPixel</h1>
          <p className="mt-2 text-lg">Creative Designs & Roblox Art</p>
          <div className="mt-4 flex gap-4 justify-center">
            <a href="https://wa.me/1234567890" className="px-4 py-2 bg-green-500 rounded-xl text-white">Chat on WhatsApp</a>
            <a href="mailto:example@email.com" className="px-4 py-2 bg-blue-500 rounded-xl text-white">Email Me</a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative">
              <img src={`/portfolio${i}.jpg`} alt={`Portfolio ${i}`} className="rounded-xl shadow-lg pointer-events-none select-none" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
