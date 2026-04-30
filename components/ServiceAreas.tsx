"use client";

import { siteConfig } from "@/config/siteConfig";
import { MapPin } from "lucide-react";
import { useState } from "react";
import ZipcodeModal from "./modals/ZipcodeModal";

export default function ServiceAreas() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <section className="py-6 md:py-9 bg-gradient-to-b from-emerald-50/40 to-white">

      {/* WRAPPER CARD */}
      <div className="max-w-6xl mx-auto px-4">

        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 
                        rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.04)] px-6 sm:px-10 py-12">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-emerald-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Service Areas
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-gray-900">
              Areas We Serve
            </h2>

            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              Reliable plumbing services across your neighborhood
            </p>
          </div>

          {/* GRID */}
          <div className="mt-10 sm:mt-12 grid 
                          grid-cols-2 
                          sm:grid-cols-3 
                          md:grid-cols-4 
                          gap-3 sm:gap-4">

            {siteConfig.serviceAreas.map((area, i) => (
              <div
                key={i}
                className="group flex items-center justify-center gap-2
                           px-4 sm:px-5 py-3 rounded-xl
                           bg-white
                           border border-gray-200
                           shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                           hover:shadow-md hover:-translate-y-0.5
                           hover:border-emerald-400
                           transition duration-300"
              >
                <MapPin size={16} className="text-emerald-600 shrink-0" />

                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12">
            <p className="text-gray-500 text-xs sm:text-sm mb-3">
              Don’t see your area? We may still serve you!
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="inline-block bg-emerald-600 text-white 
                         px-6 sm:px-8 py-3 rounded-lg 
                         text-sm sm:text-base font-semibold 
                         shadow-md hover:bg-emerald-700 hover:shadow-lg 
                         transition"
            >
              Check Availability →
            </button>
          </div>

        </div>
      </div>
    </section>
    <ZipcodeModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}