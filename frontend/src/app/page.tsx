"use client";
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-orange-600 tracking-tight">
          Caterers<span className="text-gray-900">nearme</span>
        </div>
        <Link 
          href="/caterers" 
          className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition"
        >
          Explore
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-32">
        <div className="max-w-4xl">
          {/* Quote Section */}
          <p className="text-orange-600 font-semibold tracking-widest uppercase mb-4">
            — Premium Catering Services —
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            “Good food is the foundation of <br />
            <span className="text-orange-600">genuine happiness.</span>”
          </h1>
          
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we connect you with 
            the finest caterers in the city to make your events unforgettable.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/caterers" 
              className="bg-orange-600 text-white text-lg px-10 py-4 rounded-2xl font-bold shadow-xl shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all"
            >
              Explore Caterers
            </Link>
         
          </div>
        </div>
      </main>

      {/* Features Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-3xl mb-4">🍽️</div>
            <h3 className="font-bold text-xl mb-2">Verified Caterers</h3>
            <p className="text-gray-500">Only the best, hand-picked chefs for your special day.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="font-bold text-xl mb-2">Best Pricing</h3>
            <p className="text-gray-500">Filters that help you find great food within your budget.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="font-bold text-xl mb-2">All Cuisines</h3>
            <p className="text-gray-500">From North Indian to Continental, we have it all.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2026 Caterersnearme. All rights reserved.
      </footer>
    </div>
  );
}