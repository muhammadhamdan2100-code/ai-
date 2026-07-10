"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Renders an image at natural aspect ratio (no stretching/cropping) with a
 * hover "zoom" affordance; clicking opens a fullscreen lightbox overlay.
 */
export function Lightbox({ src, alt, width, height, className }: LightboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full text-left ${className ?? ""}`}
        aria-label={`Zoom in: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.015]"
        />
        <span className="absolute inset-0 bg-base/0 group-hover:bg-base/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity glass rounded-full p-3">
            <ZoomIn size={20} className="text-ink" />
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 md:p-12"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-6 right-6 glass rounded-full p-2.5 text-ink hover:text-accent-cyan transition-colors"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
