import Image from 'next/image';

const testimonials = [
  {
    content: "This dashboard has completely transformed how I manage my finances. The ability to see all my accounts in one place is invaluable.",
    author: "Sarah Johnson",
    role: "Crypto Investor",
    image: "/images/testimonials/user1.jpg"
  },
  {
    content: "The real-time tracking and analytics have helped me make better financial decisions. It's like having a personal financial advisor.",
    author: "Michael Chen",
    role: "Small Business Owner",
    image: "/images/testimonials/user2.jpg"
  },
  {
    content: "Security was my main concern, but their encryption and privacy measures are top-notch. I feel completely safe using this platform.",
    author: "Emma Williams",
    role: "Financial Analyst",
    image: "/images/testimonials/user3.jpg"
  }
];

const stats = [
  { label: 'Active Users', value: '50,000+' },
  { label: 'Financial Institutions', value: '1,000+' },
  { label: 'Customer Satisfaction', value: '4.9/5' },
];

interface TestimonialsSectionProps {
  className?: string;
}

export default function TestimonialsSection({ className = '' }: TestimonialsSectionProps) {
  return (
    <div className={`bg-gradient-to-b from-white to-blue-50/30 py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase bg-blue-50 inline-block px-4 py-1 rounded-full">
            Testimonials
          </h2>
          <p className="mt-6 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 sm:text-4xl">
            Trusted by Thousands of Users
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                <dd className="mt-2 text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Testimonials */}
        <div className="mt-8 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="lg:col-span-1">
              <div className="h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 group">
                <blockquote>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl overflow-hidden shadow-sm group-hover:shadow transition-shadow duration-300">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm font-medium text-blue-600">{testimonial.role}</div>
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
