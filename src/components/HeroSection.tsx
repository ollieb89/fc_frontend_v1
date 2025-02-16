import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <div className={`relative bg-gradient-to-b from-blue-50/50 to-white overflow-hidden pt-16 pb-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 lg:max-w-2xl lg:w-full">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">All Your Finances</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 mt-2">in One Place</span>
              </h1>
              <p className="mt-6 text-lg text-gray-500 sm:text-xl sm:max-w-xl sm:mx-auto lg:mx-0">
                Manage crypto, banks, credit cards, and loans from a single platform. Get real-time insights into your complete financial picture.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-x-0 sm:space-x-4">
                <a
                  href="#"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow transform hover:-translate-y-0.5"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Learn More
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-16 lg:mt-0">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-full">
          <Image
            src="/images/hero/hero-banner.jpg"
            alt="Financial Dashboard"
            width={800}
            height={600}
            className="w-full h-full object-contain lg:object-cover rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-lg" />
        </div>
      </div>
    </div>
  );
}
