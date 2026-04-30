export default function StepSchedule({ data, setData, next, back }: any) {
  const slots = ["08:00", "10:00", "12:00", "02:00", "04:00"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">

      <h2 className="text-xl font-semibold">Select Date & Time</h2>

      <input
        type="date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none"
      />

      <div className="grid grid-cols-3 gap-2">
        {slots.map((t) => (
          <button
            key={t}
            onClick={() => setData({ ...data, time: t })}
            className={`p-2 rounded-lg border ${
              data.time === t ? "bg-emerald-600 text-white" : ""
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={back} className="flex-1 border py-3 rounded-lg">
          Back
        </button>

        <button
          onClick={next}
          disabled={!data.date || !data.time}
          className="flex-1 bg-emerald-600 text-white py-3 rounded-lg"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}