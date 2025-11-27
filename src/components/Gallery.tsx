import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Filter } from 'lucide-react';
import { Button } from './ui/button';

type MainFilterId = 'seminars' | 'sustainability' | 'community';
type SustainabilityFilterId =
  | 'farmerGroups'
  | 'trainings'
  | 'traceability'
  | 'mappingAudit'
  | 'womenSupport'
  | 'childProtection';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

type MainFilterConfig = { id: MainFilterId; label: string; description: string };
type SustainabilityFilterConfig = {
  id: SustainabilityFilterId;
  label: string;
  folder:
    | 'farmers'
    | 'trainings'
    | 'traceability'
    | 'audit'
    | 'support'
    | 'protection';
  description: string;
};

type GalleryFolder =
  | 'seminars'
  | 'development'
  | 'farmers'
  | 'trainings'
  | 'traceability'
  | 'audit'
  | 'support'
  | 'protection';

const mainFilterConfigs: MainFilterConfig[] = [
  {
    id: 'seminars',
    label: 'Seminars',
    description:
      'Scenes from our knowledge-sharing seminars, keynote sessions, and stakeholder briefings.',
  },
  {
    id: 'sustainability',
    label: 'Sustainability',
    description:
      'Explore each pillar of Adikanfo’s sustainability commitments—from farmer support to rigorous audits.',
  },
  {
    id: 'community',
    label: 'Community Development',
    description:
      'Snapshots of life-changing initiatives that strengthen the communities we serve.',
  },
];

const sustainabilityFilterConfigs: SustainabilityFilterConfig[] = [
  {
    id: 'farmerGroups',
    label: 'Farmer Groups',
    folder: 'farmers',
    description: 'Farmer group meetings and VSLA gatherings powered by our field teams.',
  },
  {
    id: 'trainings',
    label: 'Trainings',
    folder: 'trainings',
    description: 'Capacity-building workshops that equip farmers with good agricultural practices.',
  },
  {
    id: 'traceability',
    label: 'Traceability',
    folder: 'traceability',
    description: 'Field checks and digital processes that keep every cocoa bean fully traceable.',
  },
  {
    id: 'mappingAudit',
    label: 'Mapping & Audit',
    folder: 'audit',
    description: 'Data collection missions, mapping exercises, and compliance audits in action.',
  },
  {
    id: 'womenSupport',
    label: 'Women Support',
    folder: 'support',
    description: 'Initiatives that empower women entrepreneurs and caregivers within our value chain.',
  },
  {
    id: 'childProtection',
    label: 'Child Protection',
    folder: 'protection',
    description: 'Awareness campaigns and safeguarding interventions focused on protecting children.',
  },
];

const mainFilterDescriptions = mainFilterConfigs.reduce(
  (acc, filter) => ({ ...acc, [filter.id]: filter.description }),
  {} as Record<MainFilterId, string>
);

const sustainabilityDescriptions = sustainabilityFilterConfigs.reduce(
  (acc, filter) => ({ ...acc, [filter.id]: filter.description }),
  {} as Record<SustainabilityFilterId, string>
);

const seminarsModuleMap = import.meta.glob(
  '/public/seminars/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true, as: 'url' }
) as Record<string, string>;
const developmentModuleMap = import.meta.glob(
  '/public/development/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true, as: 'url' }
) as Record<string, string>;
const farmersModuleMap = import.meta.glob(
  '/public/farmers/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true, as: 'url' }
) as Record<string, string>;
const trainingsModuleMap = import.meta.glob(
  '/public/trainings/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true, as: 'url' }
) as Record<string, string>;
const traceabilityModuleMap = import.meta.glob(
  '/public/traceability/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true, as: 'url' }
) as Record<string, string>;
const auditModuleMap = import.meta.glob(
  '/public/audit/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true, as: 'url' }
) as Record<string, string>;
const supportModuleMap = import.meta.glob(
  '/public/support/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true, as: 'url' }
) as Record<string, string>;
const protectionModuleMap = import.meta.glob(
  '/public/protection/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true, as: 'url' }
) as Record<string, string>;

const folderImageMaps: Record<GalleryFolder, Record<string, string>> = {
  seminars: seminarsModuleMap,
  development: developmentModuleMap,
  farmers: farmersModuleMap,
  trainings: trainingsModuleMap,
  traceability: traceabilityModuleMap,
  audit: auditModuleMap,
  support: supportModuleMap,
  protection: protectionModuleMap,
};

const convertFolderToImages = (
  folder: GalleryFolder,
  idPrefix: string,
  categoryLabel: string
): GalleryImage[] =>
  Object.keys(folderImageMaps[folder] ?? {})
    .sort()
    .map((key, index) => ({
      id: `${idPrefix}-${index}`,
      src: folderImageMaps[folder][key],
      alt: `${categoryLabel} image ${index + 1}`,
      title: `${categoryLabel} ${index + 1}`,
      category: categoryLabel,
    }));

const galleryCollections = {
  seminars: convertFolderToImages('seminars', 'seminars', 'Seminars'),
  community: convertFolderToImages('development', 'community', 'Community Development'),
  sustainability: sustainabilityFilterConfigs.reduce(
    (acc, filter) => ({
      ...acc,
      [filter.id]: convertFolderToImages(
        filter.folder,
        filter.id,
        `Sustainability · ${filter.label}`
      ),
    }),
    {} as Record<SustainabilityFilterId, GalleryImage[]>
  ),
};

export function Gallery() {
  const [activeMainFilter, setActiveMainFilter] = useState<MainFilterId>('seminars');
  const [activeSustainabilityFilter, setActiveSustainabilityFilter] =
    useState<SustainabilityFilterId>('farmerGroups');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeMainFilter === 'seminars'
      ? galleryCollections.seminars
      : activeMainFilter === 'community'
        ? galleryCollections.community
        : galleryCollections.sustainability[activeSustainabilityFilter] ?? [];

  const activeCaption =
    activeMainFilter === 'sustainability'
      ? sustainabilityDescriptions[activeSustainabilityFilter]
      : mainFilterDescriptions[activeMainFilter];

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
            Explore our Seminars and Adikanfo's Sustainability Program in action: documenting farmer training on Good Practices, the impact of our Village Savings and Loans (VSLA) initiatives, our partnership with Rikolto for Community Development and Diversification (e.g., animal rearing and agroforestry), Child Protection awareness efforts, and the rigorous traceability steps that track our quality cocoa from the farm to the market.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-15 z-40">
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
            {mainFilterConfigs.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={() => setActiveMainFilter(category.id)}
                  variant={activeMainFilter === category.id ? 'default' : 'outline'}
                  className={`${
                    activeMainFilter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 cursor-pointer'
                      : 'border-blue-300 text-blue-700 hover:bg-blue-50 cursor-pointer'
                  }`}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
          {activeMainFilter === 'sustainability' && (
            <motion.div
              className="flex flex-wrap items-center justify-center gap-2 mt-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {sustainabilityFilterConfigs.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setActiveSustainabilityFilter(filter.id)}
                  size="sm"
                  variant={
                    activeSustainabilityFilter === filter.id ? 'default' : 'outline'
                  }
                  className={`${
                    activeSustainabilityFilter === filter.id
                      ? 'hover:to-emerald-800 cursor-pointer'
                      : 'border-emerald-300 text-emerald-700 hover:bg-emerald-50 cursor-pointer'
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
            </motion.div>
          )}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-center text-gray-600 max-w-3xl mx-auto">{activeCaption}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
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
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                  //   style={{
                  //   background:
                  //   "linear-gradient(to top, rgba(0,153,175,0.85), rgba(0,153,175,0) 70%)",
                  //   backdropFilter: "blur(1px)",
                  // }}
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
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10 cursor-pointer"
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
                  style={{
                    background:
                    "linear-gradient(to top, rgba(0,153,175,0.85), rgba(0,153,175,0) 70%)",
                    backdropFilter: "blur(1px)",
                  }}
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
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer"
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
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer"
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
