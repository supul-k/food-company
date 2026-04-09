import Button from '../ui/Button';

export default function StorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are ?</h2>
              <p className="text-brand-green font-semibold text-lg mb-3">About our Chello Team</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The brand name of dairy products Chello was born in 1995, at Kompitiya, a very remote village in Rathnapura district. From the humble beginning as a small-scale domestic enterprise, Chello has become one of the most respected and trusted brands of dairy products of Sri Lanka today.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                The founder of Chello, Mr Kapila Ruwan Bandara, a very young and enthusiastic businessman would have never believed in 1995, that he was starting to write a new chapter in Sri Lanka's business history when he started his business journey setting up a small scale ice lolly plant.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For a period more than 5 years Chello had to experience huge difficulties and hardships. With the help of his family members, the young entrepreneur was able to boost his business and within a decade the demand of Chello products outstripped manufacturing capacity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Now the Chello has reached to its peak furnishing with job facilities for more than 600 employees under the flag of Chello and the brand of Chello is not only a symbol of dairy products in Sri Lanka, but is an essential part of the business of this country.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-amber-100 h-64 rounded-2xl flex items-center justify-center text-8xl relative overflow-hidden">
                <span className="relative z-10">🏭</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-transparent opacity-50"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 h-40 rounded-2xl flex items-center justify-center text-6xl">🥛</div>
                <div className="bg-amber-100 h-40 rounded-2xl flex items-center justify-center text-6xl">🐄</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}