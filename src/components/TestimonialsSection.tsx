import Image from 'next/image';

const testimonials = [
  {
    content: "This dashboard has completely transformed how I manage my finances. The ability to see all my accounts in one place is invaluable.",
    author: "Sarah Johnson",
    role: "Crypto Investor",
    image: "/vercel.svg"
  },
  {
    content: "The real-time tracking and analytics have helped me make better financial decisions. It's like having a personal financial advisor.",
    author: "Michael Chen",
    role: "Small Business Owner",
    image: "/vercel.svg"
  },
  {
    content: "Security was my main concern, but their encryption and privacy measures are top-notch. I feel completely safe using this platform.",
    author: "Emma Williams",
    role: "Financial Analyst",
    image: "/vercel.svg"
  }
];

const stats = [
  { label: 'Active Users', value: '50,000+' },
  { label: 'Financial Institutions', value: '1,000+' },
  { label: 'Customer Satisfaction', value: '4.9/5' },
];

export default function TestimonialsSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Thousands of Users
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Testimonials */}
        <div className="mt-8 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="lg:col-span-1">
              <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden p-8">
                <blockquote>
                  <p className="text-lg text-gray-600 mb-8">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
