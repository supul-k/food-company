import Image from 'next/image';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  icon: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mr. Sangeeth Wijesinghe',
    position: 'Founder & CEO',
    bio: 'BBM (SP) graduate from Uva Wellassa University with extensive experience in food innovation, mushroom cultivation, and value-added product development. Founder of Mr. Cook, Nature Mirror, and Sustenance Lanka.',
    image: '/team/ceo.jpg',
    icon: '👨‍🍳',
  },
  {
    name: 'Ms. Kumari Perera',
    position: 'Head of R&D',
    bio: 'Food technologist specializing in natural preservation methods and product development. Leads innovation for Wild Pick and Pepo product lines.',
    image: '/team/rd.jpg',
    icon: '🔬',
  },
  {
    name: 'Mr. Priyantha Bandara',
    position: 'Operations Manager',
    bio: 'Expert in supply chain management and farmer partnerships. Oversees harvesting, processing, and distribution across Uva Province.',
    image: '/team/operations.jpg',
    icon: '🏭',
  },
  {
    name: 'Ms. Nadeeka Weerasinghe',
    position: 'Quality Assurance Lead',
    bio: 'Ensures all products meet highest quality standards. Implements food safety protocols from farm to table.',
    image: '/team/qa.jpg',
    icon: '✅',
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Team
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the dedicated professionals behind Sustenance Lanka, working together to bring natural, nutritious food to your table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-48 flex items-center justify-center text-7xl">
                  {member.icon}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-brand-green font-semibold text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 text-gray-500 text-sm">
            <p>And many more dedicated staff members working across harvesting, production, and distribution.</p>
          </div>
        </div>
      </div>
    </section>
  );
}