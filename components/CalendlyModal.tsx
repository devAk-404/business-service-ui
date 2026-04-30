"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyModal({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      
      {/* MODAL BOX */}
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl relative overflow-hidden">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black z-10"
        >
          ✕
        </button>

        {/* CALENDLY EMBED */}
        <div className="h-[600px]">
          <InlineWidget
            url="https://calendly.com/kumaradasrh6/30min"
            styles={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}