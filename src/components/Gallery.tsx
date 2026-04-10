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
      {/* Hero — cocoa story + brand accent */}
      <section className="relative min-h-[480px] md:min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1634303316622-33b4d64f1f65?auto=format&fit=crop&w=2000&q=80"
            alt="Premium cocoa beans — from harvest to traceable supply"
            className="w-full h-full object-cover scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(26,17,13,0.92) 0%, rgba(45,33,28,0.75) 38%, rgba(93,168,198,0.22) 100%), linear-gradient(to top, rgba(26,17,13,0.85) 0%, transparent 55%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block mb-5 px-5 py-2 rounded-full bg-brand-muted backdrop-blur-md border border-brand/40 text-cream text-sm tracking-wide">
                From farm to market
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl mb-5 text-cream font-medium leading-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
            >
              A visual story of Ghanaian cocoa excellence
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-cream/90 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16 }}
            >
              Walk through seminars, sustainability field work, and community development — the people and practices behind every bean we source, trace, and bring to market with integrity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-cream border-b border-cocoa-200 sticky top-15 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-cocoa-700 mr-2">
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
                      ? 'bg-gradient-to-r from-brand to-brand-deep hover:from-brand-hover hover:to-brand-deep cursor-pointer text-white'
                      : 'border-cocoa-200 text-cocoa-800 hover:bg-cream-dark cursor-pointer'
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
                      ? 'bg-gradient-to-r from-brand to-brand-deep hover:from-brand-hover hover:to-brand-deep cursor-pointer text-white'
                      : 'border-cocoa-200 text-cocoa-800 hover:bg-cream-dark cursor-pointer'
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
            <p className="text-center text-cocoa-700 max-w-3xl mx-auto">{activeCaption}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gradient-to-b from-cream-dark to-cream">
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
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer border border-cocoa-200/80"
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
                    style={{
                      background:
                        'linear-gradient(to top, rgba(26,17,13,0.88) 0%, rgba(93,168,198,0.2) 55%, transparent 100%)',
                      backdropFilter: 'blur(1px)',
                    }}
                    initial={false}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-white mb-2">{image.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-cream/90 text-sm capitalize">
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
                    className="absolute inset-0 border-[3px] border-brand rounded-2xl opacity-0 group-hover:opacity-100"
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
              <p className="text-cocoa-600 text-lg">No images found in this category.</p>
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
                    className="absolute bottom-0 left-0 right-0 p-8"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(26,17,13,0.92) 0%, rgba(45,33,28,0.55) 45%, transparent 100%)',
                    backdropFilter: 'blur(2px)',
                  }}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-cream text-3xl mb-2">{selectedImage.title}</h2>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1 bg-brand/85 backdrop-blur-sm rounded-full text-white text-sm capitalize">
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
