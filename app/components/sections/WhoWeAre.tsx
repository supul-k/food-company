import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Who We Are ?
            </h2>
            <p className="text-brand-green font-semibold mb-2">Sustenance Lanka (Pvt) Ltd</p>
            <p className="text-gray-600 mb-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Sustenance Lanka is dedicated to transforming Sri Lanka's agricultural landscape
              by applying the best post-harvest preservation methods. We strive to store,
              protect, and enhance local produce, ensuring minimal waste and maximum
              nutritional value.
            </p>
            <p className="text-gray-600 mb-6">
              Through innovative processing, packing, storage, and distribution, we introduce
              nutritious new food and beverage products to the market. Our commitment to
              Research & Development allows us to continuously push the boundaries of
              innovation in the food industry, creating value-added solutions for modern
              consumers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button variant="primary">Read More About Us</Button>
              </Link>
              <Link href="/products">
                <Button variant="outline">Our Products</Button>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="bg-amber-100 h-96 rounded-2xl flex items-center justify-center text-6xl overflow-hidden">
            <Image
              src="/hero/who-we.png"
              alt="Sustenance Lanka - Agricultural Preservation and Innovation"
              width={1000}
              height={700}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}