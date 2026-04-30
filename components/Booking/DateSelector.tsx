// components/booking/DateSelector.tsx

export default function DateSelector({ data, setData }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3">
        2. Select Date
      </h3>

      <input
        type="date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
        className="w-full p-3 border border-gray-200 rounded-lg"
      />
    </div>
  );
}