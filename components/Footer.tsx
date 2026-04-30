import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

    {/* BRAND */}
    <div>
  <Image
    src={siteConfig.logo}
    alt={siteConfig.businessName}
    width={180}
    height={60}
    className="h-10 w-auto object-contain mb-3"
  />

  <p className="text-sm text-gray-400">
    Fast. Reliable. Fixed Right.
  </p>
</div>

    {/* LINKS */}
    <div>
      <h4 className="text-white font-medium mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li>Home</li>
        <li>Services</li>
        <li>Book Appointment</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* SERVICES */}
    <div>
      <h4 className="text-white font-medium mb-3">Services</h4>
      <ul className="space-y-2 text-sm">
        <li>Leak Repair</li>
        <li>Drain Cleaning</li>
        <li>Pipe Repair</li>
        <li>Emergency Plumbing</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="text-white font-medium mb-3">Contact</h4>
      <p className="text-sm">(555) 123-4567</p>
      <p className="text-sm">info@quickfix.com</p>
      <p className="text-sm">Los Angeles, CA</p>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-gray-800 mt-10 pt-4 text-center text-xs text-gray-500">
    © 2026 QuickFix Plumbing. All rights reserved.
  </div>
</footer>
  );
}