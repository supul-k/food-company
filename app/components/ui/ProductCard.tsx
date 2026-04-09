import Image from 'next/image';
import Button from './Button';

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
}

export default function ProductCard({ name, category, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gray-200 relative">
        {/* Replace with <Image src={image} fill alt={name} /> when you have real images */}
        <div className="w-full h-full flex items-center justify-center text-4xl bg-amber-50">
          🥛
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-brand-green font-semibold">{category}</p>
        <h3 className="font-bold text-lg mt-1">{name}</h3>
        <Button variant="outline" className="mt-3 w-full">View Product</Button>
      </div>
    </div>
  );
}