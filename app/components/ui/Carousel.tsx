'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({ slides, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, current]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full bg-gray-300">
            {/* Replace with Next.js Image when you have real images */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-30"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-30"
      >
        ❯
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? 'bg-brand-yellow' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}