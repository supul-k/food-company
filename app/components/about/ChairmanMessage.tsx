export default function ChairmanMessage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Chairman's Message
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-amber-100 h-64 rounded-2xl flex items-center justify-center text-8xl relative">
                <span>👨‍💼</span>
              </div>
              <p className="text-center mt-4 font-semibold text-gray-800">Kapila Ruwan Bandara</p>
              <p className="text-center text-sm text-gray-500">Chairman, CHELLO Dairy Products</p>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 leading-relaxed mb-4">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                  It gives me great pleasure to share the journey of "CHELLO" Dairy Products (Pvt) Ltd. Established in 1995 at Kompitiya, Godakawela, as a small domestic enterprise, our foundation has always been quality. From the very beginning, this commitment to excellence has earned the trust and loyalty of generations of consumers.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Today, "CHELLO" has grown to its peak, providing opportunities and facilities for over 600 employees. Learning from past challenges, we have not only revamped the organization but also embraced modern trends, bringing young, skilled professionals into management to strengthen our operations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I am proud to share this success and glory with my family, directors, and employees, whose dedication continues to drive the company forward. Throughout our history, the emphasis on quality has remained our greatest strength, and I proudly declare that <span className="font-semibold text-brand-yellow">maintaining high-quality standards is our religion.</span>
                </p>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-brand-green font-semibold">— Kapila Ruwan Bandara</p>
                  <p className="text-sm text-gray-500">Chairman, CHELLO Dairy Products (Pvt) Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}