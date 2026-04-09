import Button from '../ui/Button';
import { csrProjects } from '@/app/lib/aboutData';

export default function CSRProjects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our CSR Projects
              </h2>
              <p className="text-gray-600 mb-6">
                Committed to giving back to the community and creating sustainable impact.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {csrProjects.map((project, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl mb-2">{project.icon}</div>
                    <h3 className="font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.description}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="primary">Learn More About Our CSR</Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-100 h-48 rounded-2xl flex items-center justify-center text-7xl">🤝</div>
              <div className="bg-green-100 h-48 rounded-2xl flex items-center justify-center text-7xl">📚</div>
              <div className="bg-amber-100 h-48 rounded-2xl flex items-center justify-center text-7xl">🏥</div>
              <div className="bg-green-100 h-48 rounded-2xl flex items-center justify-center text-7xl">🌳</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}