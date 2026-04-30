"use client";

export default function StepDetails({ data, setData, next, back }: any) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl 
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
                    border border-gray-100 space-y-5">

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        Your Details
      </h2>

      {/* NAME */}
      <input
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="w-full px-4 py-3 rounded-lg 
                   bg-white text-gray-900 placeholder-gray-400
                   border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-emerald-500 
                   focus:border-emerald-500 transition"
      />

      {/* PHONE */}
      <input
        placeholder="Phone Number"
        value={data.phone}
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, "").slice(0, 10);
          setData({ ...data, phone: val });
        }}
        inputMode="numeric"
        className="w-full px-4 py-3 rounded-lg 
                   bg-white text-gray-900 placeholder-gray-400
                   border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-emerald-500 
                   focus:border-emerald-500 transition"
      />

      {/* ADDRESS */}
      <input
        placeholder="Service Address"
        value={data.address}
        onChange={(e) => setData({ ...data, address: e.target.value })}
        className="w-full px-4 py-3 rounded-lg 
                   bg-white text-gray-900 placeholder-gray-400
                   border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-emerald-500 
                   focus:border-emerald-500 transition"
      />

      {/* TERMS */}
      <label className="flex items-start gap-3 text-sm text-gray-700 mt-2 cursor-pointer">
        <input
          type="checkbox"
          checked={data.agree}
          onChange={(e) => setData({ ...data, agree: e.target.checked })}
          className="mt-1 w-4 h-4 accent-emerald-600 cursor-pointer"
        />
        <span>
          I agree to{" "}
          <span className="text-emerald-600 font-medium">
            terms & conditions
          </span>
        </span>
      </label>

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

        {/* CONFIRM */}
        <button
          onClick={next}
          disabled={!data.name || !data.phone || !data.address || !data.agree}
          className="flex-1 py-3 rounded-lg 
                     bg-emerald-600 text-white font-medium
                     shadow-sm hover:bg-emerald-700 hover:shadow-md 
                     transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm →
        </button>

      </div>
    </div>
  );
}