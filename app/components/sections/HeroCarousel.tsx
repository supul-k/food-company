import Carousel from '../ui/Carousel';
import { carouselSlides } from '@/app/lib/data';

export default function HeroCarousel() {
  return <Carousel slides={carouselSlides} />;
}