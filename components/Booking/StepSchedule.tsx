"use client";

export default function StepSchedule({ data, setData, next, back }: any) {
  const slots = ["08:00", "10:00", "12:00", "02:00", "04:00"];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl 
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
                    border border-gray-100 space-y-5">

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        Select Date & Time
      </h2>

      {/* DATE INPUT */}
      <input
        type="date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
        className="w-full px-4 py-3 rounded-lg 
                   bg-white text-gray-900
                   border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-emerald-500 
                   focus:border-emerald-500 transition"
      />

      {/* TIME SLOTS */}
      <div className="grid grid-cols-3 gap-3">
        {slots.map((t) => {
          const active = data.time === t;

          return (
            <button
              key={t}
              onClick={() => setData({ ...data, time: t })}
              className={`py-2.5 rounded-lg text-sm font-medium border transition
                ${active
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:border-emerald-400 hover:bg-emerald-50"
                }`}
            >
              {t}
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