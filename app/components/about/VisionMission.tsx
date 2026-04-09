export default function VisionMission() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
              To be the Leader in Enriching Sri Lanka's Dairy Sector By providing the best quality produce for all Sri Lankans
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-brand-green mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To Enhance Stakeholder Incomes, Improve the Dairy Farmer Livelihood and contribute towards the development of Dairy Sector in Sri Lanka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}