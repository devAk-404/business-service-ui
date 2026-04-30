"use client";

import { useState } from "react";
import { X, MapPin, CheckCircle, AlertCircle } from "lucide-react";

export default function ZipcodeModal({ open, onClose }: any) {
  const [zipcode, setZipcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCheck = () => {
    const zipRegex = /^\d{5}(-\d{4})?$/;

    if (!zipRegex.test(zipcode)) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    // 🔥 MOCK API (replace later)
    setTimeout(() => {
      setLoading(false);

      // fake logic
      if (zipcode.startsWith("9")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1200);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-[90%] max-w-md rounded-2xl shadow-xl p-6 sm:p-8 animate-fadeIn">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* HEADER */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="bg-emerald-100 p-3 rounded-full">
              <MapPin className="text-emerald-600" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Check Availability
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Enter your ZIP code to see if we serve your area
          </p>
        </div>

        {/* INPUT */}
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="e.g. 90210"
            value={zipcode}
            onChange={(e) => {
              setZipcode(e.target.value.replace(/[^\d-]/g, ""));
              setStatus("idle");
            }}
            className="w-full p-3 rounded-lg border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* STATUS */}
          {status === "success" && (
  <div className="mt-4 space-y-4">

    {/* SUCCESS MESSAGE */}
    <div className="flex items-start gap-2 text-emerald-600 text-sm">
      <CheckCircle size={18} />
      <div>
        <p className="font-medium">
          Great news! We serve your area 🎉
        </p>
        <p className="text-gray-500 text-xs">
          Fast response. Licensed plumbers. Same-day service available.
        </p>
      </div>
    </div>

    {/* TRUST QUOTE */}
    <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 text-xs text-gray-600">
      “Most customers get service within 2–4 hours in your area.”
    </div>

    {/* CTA BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-2">

      <button
        onClick={() => {
          window.location.href = "/book"; // your booking page
        }}
        className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-semibold 
                   hover:bg-emerald-700 transition"
      >
        Book Appointment →
      </button>

      <a
        href="tel:5551234567"
        className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-lg text-center 
                   hover:bg-gray-50 transition"
      >
        Call Now
      </a>
    </div>
  </div>
)}

          {status === "error" && (
  <div className="flex items-start gap-2 text-red-500 text-sm mt-3">
    <AlertCircle size={18} />
    <div>
      <p className="font-medium">
        Sorry, we don’t serve this area yet
      </p>
      <p className="text-gray-500 text-xs">
        Try a nearby ZIP or contact us for assistance
      </p>
    </div>
  </div>
)}

          {/* BUTTON */}
          <button
            onClick={handleCheck}
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold 
                       hover:bg-emerald-700 transition disabled:opacity-70"
          >
            {loading ? "Checking..." : "Check Availability"}
          </button>
        </div>
      </div>
    </div>
  );
}