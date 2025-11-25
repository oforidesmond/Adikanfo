import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Filter } from 'lucide-react';
import { Button } from './ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'farming', label: 'Farming' },
    { id: 'processing', label: 'Processing' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'community', label: 'Community' },
  ];

  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1714102367897-4a19259feb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZhcm1lciUyMGhhcnZlc3Rpbmd8ZW58MXx8fHwxNzYzODE2MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cocoa farmer harvesting',
      category: 'farming',
      title: 'Cocoa Harvesting',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1757332914733-212a7af33f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGZydWl0JTIwcG9kc3xlbnwxfHx8fDE3NjM4MTYwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cocoa pods on tree',
      category: 'farming',
      title: 'Fresh Cocoa Pods',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1637922808382-0e5930886159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMHBsYW50YXRpb24lMjBmaWVsZHxlbnwxfHx8fDE3NjM4MTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cocoa plantation',
      category: 'farming',
      title: 'Cocoa Plantation',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1634303316622-33b4d64f1f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGJlYW5zJTIwY2hvY29sYXRlfGVufDF8fHx8MTc2MzgxNTAzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cocoa beans',
      category: 'processing',
      title: 'Premium Cocoa Beans',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1619615174792-a5edcfeafdfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjb2NvYSUyMHByb2Nlc3Npbmd8ZW58MXx8fHwxNzYzODE2MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cocoa processing',
      category: 'processing',
      title: 'Quality Processing',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1665323418441-4c4e21e8bbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMHBvZHMlMjB0cmVlfGVufDF8fHx8MTc2MzgxNTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cocoa pods close up',
      category: 'farming',
      title: 'Cocoa Pod Close-up',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzYzNzE0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Storage facility',
      category: 'facilities',
      title: 'Modern Storage Facility',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1618743572100-a3933e759dd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjM4MTUwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Warehouse facility',
      category: 'facilities',
      title: 'Warehouse Operations',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1585094659595-04a44bcba305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYWdyaWN1bHR1cmUlMjB3b3JrZXJzfGVufDF8fHx8MTc2MzgxNjAyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Agriculture workers',
      category: 'community',
      title: 'Our Team at Work',
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1740741703636-1680d0c0f0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybWVycyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2MzgxNTAzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Farmers community',
      category: 'community',
      title: 'Farming Community',
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1652605961557-79888dcfab34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwY29tbXVuaXR5JTIwZ2hhbmF8ZW58MXx8fHwxNzYzODE2MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Ghana farming community',
      category: 'community',
      title: 'Community Partnership',
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1696343782507-a8188a2e4865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaGFuYSUyMGxhbmRzY2FwZSUyMGZpZWxkc3xlbnwxfHx8fDE3NjM4MTUyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Ghana landscape',
      category: 'farming',
      title: 'Beautiful Ghana',
    },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-blue-200">Our Operations</span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Gallery
          </motion.h1>

          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our journey from farm to market - showcasing our farmers, facilities, and the quality cocoa we produce
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-gray-600 mr-2">
              <Filter size={20} />
              <span className="text-sm">Filter by:</span>
            </div>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                      : 'border-blue-300 text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                  whileHover={{ y: -8 }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                    initial={false}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-white mb-2">{image.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-200 text-sm capitalize">
                          {image.category}
                        </span>
                        <motion.div
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                        >
                          <ZoomIn className="text-white" size={20} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Hover Border Animation */}
                  <motion.div
                    className="absolute inset-0 border-4 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                layoutId={`image-${selectedImage.id}`}
              >
                <ImageWithFallback
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain"
                />

                {/* Image Info Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/95 to-transparent p-8"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-white text-3xl mb-2">{selectedImage.title}</h2>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1 bg-blue-500/50 backdrop-blur-sm rounded-full text-blue-100 text-sm capitalize">
                      {selectedImage.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <motion.button
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const currentIndex = filteredImages.findIndex(
                      (img) => img.id === selectedImage.id
                    );
                    const prevIndex =
                      currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                    setSelectedImage(filteredImages[prevIndex]);
                  }}
                >
                  ← Previous
                </motion.button>
                <motion.button
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const currentIndex = filteredImages.findIndex(
                      (img) => img.id === selectedImage.id
                    );
                    const nextIndex =
                      currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                    setSelectedImage(filteredImages[nextIndex]);
                  }}
                >
                  Next →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
