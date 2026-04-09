export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-brand-yellow to-brand-green text-white py-20">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">SOME WORDS ABOUT US</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-2xl md:text-3xl font-semibold">Sri Lanka's Pure Milk to the World.</p>
                </div>
            </div>
        </section>
    );
}