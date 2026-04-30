"use client";

import { useState } from "react";

export default function StepZipcode({ data, setData, next, back }: any) {
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    let value = e.target.value;

    value = value.replace(/[^\d-]/g, "");

    if ((value.match(/-/g) || []).length > 1) return;
    if (value.length > 10) return;

    setData({ ...data, zipcode: value });

    if (error) setError("");
  };

  const validate = () => {
    const zipRegex = /^\d{5}(-\d{4})?$/;

    if (!zipRegex.test(data.zipcode)) {
      setError("Enter valid US ZIP code (e.g. 12345 or 12345-6789)");
      return;
    }

    next();
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl 
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
                    border border-gray-100 space-y-5">

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        Check Service Availability
      </h2>

      {/* INPUT */}
      <input
        type="text"
        inputMode="numeric"
        placeholder="Enter ZIP code (e.g. 90210)"
        value={data.zipcode}
        onChange={handleChange}
        className={`w-full px-4 py-3 rounded-lg 
          bg-white text-gray-900 placeholder-gray-400
          border ${error ? "border-red-400" : "border-gray-300"}
          focus:outline-none focus:ring-2 focus:ring-emerald-500 
          focus:border-emerald-500 transition`}
      />

      {/* ERROR */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* ACTIONS */}
      <div className="flex gap-3 pt-2">

        {/* BACK BUTTON */}
        <button
          onClick={back}
          className="flex-1 py-3 rounded-lg 
                     border border-gray-300 text-gray-700 
                     bg-white
                     hover:bg-gray-50 hover:border-gray-400
                     transition"
        >
          Back
        </button>

        {/* CHECK BUTTON */}
        <button
          onClick={validate}
          className="flex-1 py-3 rounded-lg 
                     bg-emerald-600 text-white font-medium
                     shadow-sm hover:bg-emerald-700 hover:shadow-md 
                     transition"
        >
          Check →
        </button>

      </div>
    </div>
  );
}