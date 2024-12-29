import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, BookOpen, ArrowRight } from 'lucide-react';

const categories = [
  "Biography", "Business", "Children", "Fantasy", "Fiction",
  "History", "Literature", "Mystery", "Nonfiction", "Religion",
  "Romance", "Science Fiction", "Suspense", "Technology", "Thriller",
  "Travel", "Young Adult"
];

const CollectionBanner = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  return (
    <div className="relative h-[700px]"> {/* Container with fixed height */}
      {/* Gradient Background contained within hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/95 to-rose-500/95">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full">
        {/* Banner Section */}
        <section className="h-[400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full flex flex-col items-center justify-center text-center px-4 pt-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <BookOpen className="w-16 h-16 text-white/90 mb-4" />
            </motion.div>
            
            <h1 className="text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
              Discover our collection
            </h1>
            <p className="text-2xl text-white/90 mb-12 font-light drop-shadow-lg max-w-3xl leading-relaxed">
              Journey through countless stories and adventures in our carefully curated library
            </p>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`group px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300
                    ${selectedCategory === category 
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-xl scale-105' 
                      : 'bg-white/80 hover:bg-white border border-white/20 text-gray-700 hover:shadow-xl hover:scale-105'
                    }
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
                >
                  <span className="flex items-center gap-3">
                    <Book className="w-5 h-5" />
                    {category}
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 
                      ${selectedCategory === category ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100'}`} 
                    />
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Selected Category Display */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 mt-8 text-center"
            >
              <div className="inline-block px-8 py-4 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 shadow-lg">
                Exploring <span className="font-semibold text-amber-600">{selectedCategory}</span> Collection
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CollectionBanner;