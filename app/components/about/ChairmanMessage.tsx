import Image from "next/image";

export default function CEOMessage() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Message from Our Founder & CEO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO Image & Info */}
            <div className="md:col-span-1">
              {/* <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center p-8 shadow-lg"> */}
                <Image
                  src="/about/chairman.png"
                  alt="Mr. Sangeeth Wijesinghe - Founder & CEO of Sustenance Lanka"
                  width={400}
                  height={400}
                  className="object-cover w-full h-auto rounded-full border-4 border-brand-green shadow-md"
                  priority
                />
              {/* </div> */}
              <div className="text-center mt-4">
                <p className="font-semibold text-gray-800 text-xl">
                  Mr. Sangeeth Wijesinghe
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  BBM (SP)
                </p>
                <span className="inline-block px-3 py-1 bg-brand-green text-white text-xs rounded-full">
                  Founder & CEO
                </span>
              </div>
            </div>

            {/* CEO Message Content */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-yellow mb-3">Entrepreneurial Journey</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mr. Sangeeth Wijesinghe began his entrepreneurial journey in September 2016 as the founder of
                    <span className="font-semibold text-gray-800"> Mr. Cook</span>. Under this brand, he established
                    Mr. Cook Mobile Restaurant, offering customers a unique catering experience that brought
                    restaurant-quality food directly to events and gatherings.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-green mb-3">Expansion & Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building on this success, he expanded the brand into several successful ventures, including:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">•</span> Mr. Cook Fast Food Outlet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">•</span> Mr. Cook Green Café
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">•</span> Travel with Mr. Cook
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-yellow mb-3">Agricultural Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As the founder of <span className="font-semibold text-gray-800">Nature Mirror (Pvt) Ltd</span>,
                    he gained extensive experience in mushroom cultivation and the development of value-added
                    mushroom products. His expertise also extends to vegetable farming and greenhouse management,
                    ensuring sustainable and high-yield agricultural practices.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-green mb-3">Sustenance Lanka Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As the founder of <span className="font-semibold text-gray-800">Sustenance Lanka (Pvt) Ltd</span>,
                    he has focused on new product development using natural foods such as vegetables, leaves, flowers,
                    roots, and yams. His vision is to bring traditional, nutritious foods back to modern tables while
                    supporting local farmers and sustainable agriculture.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-yellow mb-3">Education & Professional Training</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    He successfully completed his studies in <span className="font-semibold">Hospitality, Tourism, and Event Management</span>
                    at <span className="font-semibold">Uva Wellassa University</span>.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    As part of his professional training, he gained hands-on experience in the industry, including:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Night Auditor at Heritage Grand Hotel, Badulla – Six months
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Event Planner at Aitken Spence PLC – Three months
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-yellow mb-3">Innovation Milestone</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-bold text-2xl text-brand-green">132</span>
                    <span className="text-gray-600"> innovative products and recipes developed to date</span>
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Through dedication and passion for natural food solutions, Mr. Wijesinghe has successfully
                    developed 132 innovative products and recipes, contributing significantly to the advancement
                    of natural and sustainable food solutions in Sri Lanka.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-brand-green font-semibold text-lg">— Sangeeth Wijesinghe</p>
                  <p className="text-sm text-gray-500">Founder & CEO, Sustenance Lanka (Pvt) Ltd</p>
                  <p className="text-sm text-gray-500">BBM (SP)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}