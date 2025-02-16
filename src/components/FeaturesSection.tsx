import Image from 'next/image';

const features = [
  {
    name: 'Crypto Assets',
    description: 'Track your cryptocurrency portfolio with real-time balances and performance charts.',
    icon: '/globe.svg',
  },
  {
    name: 'Bank Accounts',
    description: 'View all your bank accounts, transactions, and statements in one place.',
    icon: '/file.svg',
  },
  {
    name: 'Credit Cards',
    description: 'Monitor credit card balances, due dates, and spending patterns.',
    icon: '/vercel.svg',
  },
  {
    name: 'Loans & Liabilities',
    description: 'Keep track of mortgages, student loans, and other debts with payment schedules.',
    icon: '/next.svg',
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-12 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Manage All Your Finances in One Dashboard
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to take control of your financial life, all in one place.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Image src={feature.icon} alt={feature.name} width={24} height={24} className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
