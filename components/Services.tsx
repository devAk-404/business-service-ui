// components/Services.tsx

import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
          Our Services
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          How We Can Help You
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Professional plumbing services tailored to your needs
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-12 max-w-6xl mx-auto px-4 grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3">

        {siteConfig.services.map((service, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
          >
            
            {/* IMAGE */}
            <div className="relative w-full h-40">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              
              {/* ICON */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center mb-4 text-lg">
                {service.icon || "🔧"}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-emerald-600 transition">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {service.desc || "Professional and reliable service you can trust."}
              </p>

              {/* CTA */}
              <div className="mt-4 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}