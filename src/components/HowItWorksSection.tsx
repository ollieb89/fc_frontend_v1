const steps = [
  {
    title: 'Connect Your Accounts',
    description: 'Link bank accounts, crypto wallets, and credit cards in seconds with our secure integration system.',
    number: '01',
  },
  {
    title: 'Securely Sync Data',
    description: 'Your data is encrypted and securely synchronized across all your connected accounts.',
    number: '02',
  },
  {
    title: 'See Consolidated Financial Overview',
    description: 'Get real-time updates, monthly overviews, and trending charts of your complete financial picture.',
    number: '03',
  },
];

interface HowItWorksSectionProps {
  className?: string;
}

export default function HowItWorksSection({ className = '' }: HowItWorksSectionProps) {
  return (
    <div className={`bg-white overflow-hidden py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase bg-blue-50 inline-block px-4 py-1 rounded-full">
            How It Works
          </h2>
          <p className="mt-6 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 sm:text-4xl">
            Get Started in Three Simple Steps
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Setting up your financial dashboard is quick and easy. Here&apos;s how it works:
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-12">
            {steps.map((step) => (
              <div key={step.title} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="absolute -top-6 left-8 h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-2xl font-bold transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {step.number}
                </div>
                <div className="mt-8 pt-4">
                  <h3 className="text-xl leading-6 font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
