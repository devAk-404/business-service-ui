"use client";

import { useState } from "react";

export default function StepZipcode({ data, setData, next, back }: any) {
  const [error, setError] = useState("");

  // Allow only numbers + optional dash
  const handleChange = (e: any) => {
    let value = e.target.value;

    // allow only digits and dash
    value = value.replace(/[^\d-]/g, "");

    // prevent multiple dashes
    if ((value.match(/-/g) || []).length > 1) return;

    // limit length (12345-6789 max 10 chars)
    if (value.length > 10) return;

    setData({ ...data, zipcode: value });

    // clear error while typing
    if (error) setError("");
  };

  // Proper validation
  const validate = () => {
    const zipRegex = /^\d{5}(-\d{4})?$/;

    if (!zipRegex.test(data.zipcode)) {
      setError("Enter valid US ZIP code (e.g. 12345 or 12345-6789)");
      return;
    }

    next();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">

      <h2 className="text-xl font-semibold text-gray-900">
        Check Service Availability
      </h2>

      {/* INPUT */}
      <input
        type="text"
        inputMode="numeric"
        placeholder="Enter ZIP code (e.g. 90210)"
        value={data.zipcode}
        onChange={handleChange}
        className={`w-full p-3 rounded-lg border text-gray-900
          ${error ? "border-red-400" : "border-gray-200"}
          focus:outline-none focus:ring-2 focus:ring-emerald-500`}
      />

      {/* ERROR */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* ACTIONS */}
      <div className="flex gap-3">
        <button
          onClick={back}
          className="flex-1 border border-gray-200 py-3 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>

        <button
          onClick={validate}
          className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition"
        >
          Check →
        </button>
      </div>
    </div>
  );
}