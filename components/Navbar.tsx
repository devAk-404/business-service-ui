"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center px-6 py-4 
                    bg-white 
                    border-b border-gray-200 
                    shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                    sticky top-0 z-50">

      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.businessName}
          width={260}
          height={90}
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          priority
        />
      </Link>

      {/* CTA BUTTON */}
      <button
        onClick={() => router.push("/book")}
        className="flex items-center gap-2 
           bg-emerald-600/10 text-emerald-700 
           border border-emerald-200
           px-5 py-2.5 rounded-lg text-sm font-semibold
           hover:bg-emerald-600 hover:text-white hover:border-emerald-600
           transition-all duration-200"
      >
        <Calendar size={16} className="text-gray-600" />
        Book Appointment
      </button>

    </nav>
  );
}