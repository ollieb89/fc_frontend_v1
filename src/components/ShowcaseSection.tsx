import Image from 'next/image';

const highlights = [
  'Real-time Balances',
  'Customizable Analytics',
  'AI-Powered Insights',
  'Secure Data Encryption',
];

interface ShowcaseSectionProps {
  className?: string;
}

export default function ShowcaseSection({ className = '' }: ShowcaseSectionProps) {
  return (
    <div className={`bg-gradient-to-b from-blue-50/30 to-white overflow-hidden py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 tracking-tight sm:text-3xl">
              Powerful Dashboard for Complete Financial Control
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Get a comprehensive view of your financial health with our intuitive dashboard. Monitor all your accounts, track investments, and analyze spending patterns in real-time.
            </p>

            <dl className="mt-10 space-y-6">
              {highlights.map((highlight) => (
                <div key={highlight} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <dt>
                    <div className="absolute -left-3 -top-3 flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white transform transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-14 text-lg leading-6 font-bold text-gray-900">{highlight}</p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 -mx-4 relative lg:mt-0">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  className="rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                  src="/images/showcase/product1.jpg"
                  alt="Financial Dashboard Showcase"
                  width={800}
                  height={600}
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
