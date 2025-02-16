import Image from 'next/image';

const highlights = [
  'Real-time Balances',
  'Customizable Analytics',
  'Advanced Reports',
  'Secure Data Encryption',
];

export default function ShowcaseSection() {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Powerful Dashboard for Complete Financial Control
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Get a comprehensive view of your financial health with our intuitive dashboard. Monitor all your accounts, track investments, and analyze spending patterns in real-time.
            </p>

            <dl className="mt-10 space-y-10">
              {highlights.map((highlight) => (
                <div key={highlight} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
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
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{highlight}</p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0">
            <div className="relative space-y-4">
              <div className="relative">
                <Image
                  className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                  src="/window.svg"
                  alt="Dashboard Screenshot"
                  width={800}
                  height={600}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent opacity-25 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
