// components/WhyChooseUs.tsx

export default function WhyChooseUs() {
  const points = [
    {
      title: "Fast Response Time",
      desc: "We respond quickly to all service requests, ensuring minimal downtime for your home or business.",
      icon: "⚡",
    },
    {
      title: "Licensed & Experienced",
      desc: "Our team consists of certified professionals with years of hands-on plumbing experience.",
      icon: "👨‍🔧",
    },
    {
      title: "Upfront Pricing",
      desc: "No hidden costs. Transparent pricing before we begin any work.",
      icon: "💰",
    },
    {
      title: "24/7 Emergency Service",
      desc: "Available anytime you need us, day or night.",
      icon: "🕒",
    },
  ];

  return (
    <section className="py-20 bg-white">
      
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
          Why Choose Us
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          Trusted Plumbing Experts You Can Rely On
        </h2>

        <p className="text-gray-500 mt-3">
          We deliver quality, speed, and reliability with every job we take.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-12 max-w-6xl mx-auto px-4 grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4">

        {points.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-xl text-xl">
              {item.icon}
            </div>

            <h3 className="font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}