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

export default function HowItWorksSection() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get Started in Three Simple Steps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Setting up your financial dashboard is quick and easy. Here's how it works:
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.title} className="relative">
                <div className="absolute h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white text-2xl font-bold">
                  {step.number}
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
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
