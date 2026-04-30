// components/Testimonials.tsx

import { siteConfig } from "@/config/siteConfig";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
          Testimonials
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          Trusted by Our Customers
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Real feedback from happy clients who trust our plumbing services
        </p>
      </div>

      {/* GRID */}
      <div className="mt-12 max-w-6xl mx-auto px-4 grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3">
        
        {siteConfig.testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            {/* TOP */}
            <div>
              <div className="text-emerald-500 text-3xl mb-2">“</div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {t.text}
              </p>

              {/* STARS */}
              <div className="flex mt-4 text-yellow-400 text-sm">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            {/* USER */}
            <div className="flex items-center mt-6 gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-600">
                {t.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {t.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {t.role || "Customer"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}