// components/booking/TimeSelector.tsx

const slots = ["08:00", "10:00", "12:00", "02:00", "04:00"];

export default function TimeSelector({ data, setData }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3">
        3. Select Time
      </h3>

      <div className="grid grid-cols-3 gap-2">
        {slots.map((t) => (
          <button
            key={t}
            onClick={() => setData({ ...data, time: t })}
            className={`p-2 rounded-lg border ${
              data.time === t
                ? "bg-emerald-600 text-white"
                : "bg-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}