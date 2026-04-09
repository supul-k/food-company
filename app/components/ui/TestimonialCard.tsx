interface TestimonialCardProps {
  text: string;
  author: string;
}

export default function TestimonialCard({ text, author }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <p className="font-semibold text-brand-green">— {author}</p>
    </div>
  );
}