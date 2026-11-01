import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { GoldDivider } from './FloralElements';

export default function PhotoGallery({ gallery = [] }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photo = gallery[0];

  return (
    <section id="gallery" className="py-6 sm:py-8 px-4 max-w-lg mx-auto text-center">
      {/* Title */}


      {/* "us" label above the photo */}
      <p className="font-alex text-4xl sm:text-5xl text-[#A8586E] mb-4 leading-none">us</p>

      {/* Single centred photo */}
      {photo && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative mx-auto max-w-[300px] sm:max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden bg-[#F4E2E6] shadow-lg border border-[#D8B26E]/40 cursor-pointer flex items-center justify-center"
          onClick={() => setSelectedPhoto(photo)}
        >
          {/* Blurred ambient backdrop */}
          <img
            src={photo.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-40 select-none pointer-events-none"
          />
          {/* Main photo */}
          <img
            src={photo.src}
            alt={photo.title || 'Couple'}
            className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-1.5 border border-white/50 rounded-xl pointer-events-none group-hover:border-white/90 transition-colors z-20" />
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#742A3D]/40 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </motion.div>
      )}

      {/* Golden Divider below Gallery */}
      <div className="w-full flex justify-center mt-7">
        <GoldDivider className="w-44" />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#742A3D]/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/15 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto object-cover max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
