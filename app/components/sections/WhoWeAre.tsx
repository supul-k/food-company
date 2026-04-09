import Link from 'next/link';
import Button from '../ui/Button';
// import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Who We Are ?
            </h2>
            <p className="text-brand-green font-semibold mb-2">From Start to Now.</p>
            <p className="text-gray-600 mb-4">
              The brand name of dairy products Chello was born in 1995, at Kompitiya, a very remote village in Rathnapura district. From the humble beginning as a small-scale domestic enterprise, Chello has become one of the most respected and trusted brands of dairy products of Sri Lanka today.
            </p>
            <p className="text-gray-600 mb-6">
              The founder of Chello, Mr Kapila Ruwan Bandara, a very young and enthusiastic businessman would have never believed in 1995, that he was starting to write a new chapter in Sri Lanka’s business history when he started his business journey setting up a small scale ice lolly plant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button variant="primary">Read More About Us</Button>
              </Link>
              <Link href="/#">
                <Button variant="outline">Our CSR Projects</Button>
              </Link>
            </div>
          </div>
          <div className="bg-amber-100 h-96 rounded-2xl flex items-center justify-center text-6xl">
            🐄
          </div>
        </div>
      </div>
    </section>
  );
}