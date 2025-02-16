import Image from 'next/image';

const features = [
  {
    name: 'Crypto Assets',
    description: 'Track your cryptocurrency portfolio with real-time balances and performance charts.',
    image: '/images/features/feature4.jpg',
  },
  {
    name: 'Bank Accounts',
    description: 'View all your bank accounts, transactions, and statements in one place.',
    image: '/images/features/feature2.jpg',
  },
  {
    name: 'Credit Cards',
    description: 'Monitor credit card balances, due dates, and spending patterns.',
    image: '/images/features/feature3.jpg',
  },
  {
    name: 'Loans & Liabilities',
    description: 'Keep track of mortgages, student loans, and other debts with payment schedules.',
    image: '/images/features/feature1.jpg',
  },
];

interface FeaturesSectionProps {
  className?: string;
}

export default function FeaturesSection({ className = '' }: FeaturesSectionProps) {
  return (
    <div className={`bg-gradient-to-b from-white to-blue-50/30 py-24 ${className}`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase bg-blue-50 inline-block px-4 py-1 rounded-full">Features</h2>
          <p className="mt-6 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 sm:text-4xl">
            Manage All Your Finances in One Dashboard
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to take control of your financial life, all in one place.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="w-full h-64 overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl leading-6 font-bold text-gray-900">{feature.name}</h3>
                  <p className="mt-4 text-base text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
