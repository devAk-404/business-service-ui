"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useRouter } from "next/navigation";
import { Calendar, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

const services = [
  {
    title: "General Plumbing",
    items: [
      { name: "Leak Repair", slug: "leak-repair" },
      { name: "Pipe Repair", slug: "pipe-repair" },
      { name: "Drain Cleaning", slug: "drain-cleaning" },
      { name: "Toilet Repair", slug: "toilet-repair" },
      { name: "Garbage Disposal", slug: "garbage-disposal" },
    ],
  },
  {
    title: "Kitchen & Bathroom",
    items: [
      { name: "Faucet Repair", slug: "faucet-repair" },
      { name: "Sink Installation", slug: "sink-installation" },
      { name: "Shower Repair", slug: "shower-repair" },
      { name: "Bathroom Plumbing", slug: "bathroom-plumbing" },
    ],
  },
  {
    title: "Advanced Services",
    items: [
      { name: "Water Heater", slug: "water-heater" },
      { name: "Sewer Repair", slug: "sewer-repair" },
      { name: "Leak Detection", slug: "leak-detection" },
      { name: "Commercial Plumbing", slug: "commercial-plumbing" },
    ],
  },
];

const areas = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "Dallas, TX",
  "San Diego, CA",
  "Austin, TX",
  "San Jose, CA",
  "San Francisco, CA",
  "Jacksonville, FL",
];

export default function Navbar() {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "areas" | null>(null);

  const timeoutRef = useRef<any>(null);

  const openMenu = (menu: "services" | "areas") => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  return (
    <nav className="
  sticky top-0 z-50
  bg-white
  border-b border-gray-200
  shadow-[0_4px_20px_rgba(0,0,0,0.06)]
">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.businessName}
            width={220}
            height={80}
            className="h-12 sm:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">

          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
            Home
          </Link>

          {/* SERVICES */}
          <div
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              Services <ChevronDown size={16} />
            </button>
          </div>

          {/* AREAS */}
          <div
            onMouseEnter={() => openMenu("areas")}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              Service Areas <ChevronDown size={16} />
            </button>
          </div>

          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
            Contact
          </Link>

          {/* CTA */}
          <button
            onClick={() => router.push("/book")}
            className="flex items-center gap-2 
              bg-emerald-600/10 text-emerald-700 
              border border-emerald-200
              px-5 py-2.5 rounded-lg text-sm font-semibold
              hover:bg-emerald-600 hover:text-white hover:border-emerald-600
              transition-all duration-200"
          >
            <Calendar size={16} />
            Book Appointment
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 🔥 SINGLE DROPDOWN (NO FLICKER) */}
      {activeMenu && (
        <div
          onMouseEnter={() => openMenu(activeMenu)}
          onMouseLeave={closeMenu}
          className="
            hidden md:block
            fixed left-1/2 -translate-x-1/2
            top-[70px]
            w-[92%] max-w-6xl
            bg-white/95 backdrop-blur-xl
            rounded-2xl
            shadow-[0_30px_90px_rgba(0,0,0,0.12)]
            p-10
            z-50
          "
        >
          {/* SERVICES CONTENT */}
          {activeMenu === "services" && (
            <div className="grid grid-cols-3 gap-10">
              {services.map((group, i) => (
                <div key={i}>
                  <h4 className="text-gray-900 font-semibold mb-4 text-sm">
                    {group.title}
                  </h4>

                  <ul className="space-y-3">
                    {group.items.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          router.push(`/services/${item.slug}`);
                          setActiveMenu(null); // close dropdown after click
                        }}
                        className="text-sm text-gray-600 hover:text-emerald-600 hover:translate-x-1 transition cursor-pointer"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* AREAS CONTENT */}
          {activeMenu === "areas" && (
            <div>
              <p className="text-xs text-gray-400 uppercase mb-4">
                Serving across major US cities
              </p>

              <div className="grid grid-cols-4 gap-4">
                {areas.map((area, i) => (
                  <div
                    key={i}
                    className="text-sm text-gray-600 hover:text-emerald-600 hover:translate-x-1 transition cursor-pointer"
                  >
                    {area}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => router.push("/book")}
                  className="w-full bg-emerald-600 text-white py-2.5 rounded-lg text-sm hover:bg-emerald-700 transition"
                >
                  Check Availability →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-6 space-y-4 bg-white border-t border-gray-100">

          <Link href="/" className="block text-gray-800 font-medium">
            Home
          </Link>

          {/* SERVICES */}
          <div>
            <button
              onClick={() =>
                setActiveMenu(activeMenu === "services" ? null : "services")
              }
              className="w-full text-left font-medium text-gray-800"
            >
              Services
            </button>

            {activeMenu === "services" && (
              <div className="mt-3 space-y-4 bg-gray-50 p-4 rounded-xl">
                {services.map((group, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold text-gray-900">
                      {group.title}
                    </p>
                    <ul className="pl-2 text-sm text-gray-600">
                      {group.items.map((item, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            router.push(`/services/${item.slug}`);
                            setActiveMenu(null); // close dropdown after click
                          }}
                          className="text-sm text-gray-600 hover:text-emerald-600 hover:translate-x-1 transition cursor-pointer"
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* AREAS */}
          <div>
            <button
              onClick={() =>
                setActiveMenu(activeMenu === "areas" ? null : "areas")
              }
              className="w-full text-left font-medium text-gray-800"
            >
              Service Areas
            </button>

            {activeMenu === "areas" && (
              <div className="mt-3 grid grid-cols-2 gap-2 bg-gray-50 p-4 rounded-xl">
                {areas.map((area, i) => (
                  <div key={i} className="text-sm text-gray-600">
                    {area}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="#" className="block text-gray-800 font-medium">
            Contact
          </Link>

          <button
            onClick={() => router.push("/book")}
            className="w-full mt-3 bg-emerald-600 text-white py-3 rounded-lg font-medium"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}