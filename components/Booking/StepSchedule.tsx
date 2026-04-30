"use client";

import { Calendar } from "lucide-react";

export default function StepSchedule({ data, setData, next, back }: any) {
  const slots = [
  { label: "8:00 AM - 10:00 AM", value: "08:00-10:00" },
  { label: "10:00 AM - 12:00 PM", value: "10:00-12:00" },
  { label: "12:00 PM - 2:00 PM", value: "12:00-14:00" },
  { label: "2:00 PM - 4:00 PM", value: "14:00-16:00" },
  { label: "4:00 PM - 6:00 PM", value: "16:00-18:00" },
];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl 
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
                    border border-gray-100 space-y-5">

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        Select Date & Time
      </h2>

      {/* DATE INPUT */}
     <div className="relative">
  <input
    type="text"
    placeholder="Select date (MM/DD/YYYY)"
    value={data.date}
    onFocus={(e) => (e.target.type = "date")}
    onBlur={(e) => {
      if (!e.target.value) e.target.type = "text";
    }}
    onChange={(e) => setData({ ...data, date: e.target.value })}
    className="w-full px-4 py-3 rounded-lg 
               bg-white text-gray-900 placeholder-gray-500
               border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-emerald-500 
               focus:border-emerald-500 transition pr-10"
  />

  
</div>

      {/* TIME SLOTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
  {slots.map((slot) => {
    const active = data.time === slot.value;

    return (
      <button
        key={slot.value}
        onClick={() => setData({ ...data, time: slot.value })}
        className={`py-3 px-3 rounded-lg text-sm font-medium border transition text-center
          ${active
            ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
            : "bg-white text-gray-800 border-gray-300 hover:border-emerald-500 hover:bg-emerald-50"
          }`}
      >
        {slot.label}
      </button>
    );
  })}
</div>

      {/* ACTIONS */}
      <div className="flex gap-3 pt-2">

        {/* BACK */}
        <button
          onClick={back}
          className="flex-1 py-3 rounded-lg 
                     border border-gray-300 text-gray-700 bg-white
                     hover:bg-gray-50 hover:border-gray-400
                     transition"
        >
          Back
        </button>

        {/* CONTINUE */}
        <button
          onClick={next}
          disabled={!data.date || !data.time}
          className="flex-1 py-3 rounded-lg 
                     bg-emerald-600 text-white font-medium
                     shadow-sm hover:bg-emerald-700 hover:shadow-md 
                     transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue →
        </button>

      </div>
    </div>
  );
}