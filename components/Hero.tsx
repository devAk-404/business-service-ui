// components/Hero.tsx

"use client";

import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import CalendlyModal from "./CalendlyModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import EnquiryModal from "./modals/EnquiryModal";

export default function Hero() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [enquiryOpen, setEnquiryOpen] = useState(false);

    const handleCall = () => {
  const phone = siteConfig.phone;

  // detect mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `tel:${phone}`;
  } else {
    alert(`Call us at ${phone}`);
  }
};

    return (
         <>
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="order-2 md:order-1 text-center md:text-left">

                    <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
                        24/7 Emergency Service
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Reliable Plumbing <br />
                        <span className="text-emerald-600">Solutions You Can Trust</span>
                    </h1>

                    <p className="text-gray-600 mt-4 text-sm sm:text-base">
                        From leaks to major repairs, we provide fast and professional plumbing services.
                    </p>

                    {/* GOOGLE RATING - MODERN ICON */}
<div className="flex items-center justify-center md:justify-start gap-3 mt-5">

  {/* GOOGLE ICON */}
  <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border">
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#4285F4" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.64 2.2 30.2 0 24 0 14.82 0 6.86 5.18 2.9 12.74l8.02 6.22C12.8 13.3 17.9 9.5 24 9.5z"/>
      <path fill="#34A853" d="M46.1 24.5c0-1.7-.15-3.33-.43-4.9H24v9.27h12.45c-.54 2.9-2.16 5.36-4.6 7.04l7.18 5.58C43.9 37.3 46.1 31.4 46.1 24.5z"/>
      <path fill="#FBBC05" d="M10.92 28.96A14.5 14.5 0 0 1 9.5 24c0-1.73.3-3.4.82-4.96L2.3 12.74A23.9 23.9 0 0 0 0 24c0 3.87.93 7.53 2.3 10.7l8.62-5.74z"/>
      <path fill="#EA4335" d="M24 48c6.2 0 11.4-2.05 15.2-5.58l-7.18-5.58c-2 1.35-4.56 2.16-8.02 2.16-6.1 0-11.2-3.8-13.08-9.46l-8.62 5.74C6.86 42.82 14.82 48 24 48z"/>
    </svg>

    <span className="text-sm font-medium text-gray-700">
      Google Reviews
    </span>
  </div>

  {/* STARS */}
  <div className="flex text-yellow-400 text-sm">
    ★★★★★
  </div>

  {/* TEXT */}
  <p className="text-sm text-gray-600">
    <span className="font-semibold text-gray-900">4.8/5</span> rating from 500+ customers
  </p>
</div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center md:justify-start">
                        <button
  onClick={handleCall}
  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-emerald-700 transition text-center"
>
   Call Now
</button>

                        <button 
  className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
  onClick={() => router.push("/book")}
>
  Book Appointment
</button>

<button
  onClick={() => setEnquiryOpen(true)}
  className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg 
             font-medium hover:bg-emerald-50 transition"
>
  Enquiry
</button>
                    </div>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-4 mt-6 text-xs sm:text-sm text-gray-600 justify-center md:justify-start">
                        <span>✔ Licensed</span>
                        <span>✔ Fast Response</span>
                        <span>✔ Guaranteed</span>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="order-1 md:order-2 relative">

                    <div className="relative w-full h-[250px] sm:h-[320px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/plumber.png"
                            alt="plumber"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* FLOATING CARD */}
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white p-3 sm:p-4 rounded-xl shadow-md w-[140px] sm:w-[180px]">
                        <p className="text-xs sm:text-sm text-gray-500">Trusted by</p>
                        <h3 className="text-lg sm:text-xl font-bold text-emerald-600">500+</h3>
                        <p className="text-[10px] sm:text-xs text-gray-500">Happy Customers</p>
                    </div>
                </div>

            </div>
        </section>

        <CalendlyModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

      <EnquiryModal
  open={enquiryOpen}
  onClose={() => setEnquiryOpen(false)}
/>

      </>
    );
}