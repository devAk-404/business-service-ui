
export default function BookingForm({ data, setData }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">

      <h3 className="font-semibold text-gray-900 mb-3">
        4. Your Details
      </h3>

      <div className="space-y-3">

        <input
          placeholder="Full Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full p-3 border border-gray-200 rounded-lg"
        />

        <input
          placeholder="Phone Number"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className="w-full p-3 border border-gray-200 rounded-lg"
        />

        <input
          placeholder="Address"
          onChange={(e) => setData({ ...data, address: e.target.value })}
          className="w-full p-3 border border-gray-200 rounded-lg"
        />

        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold">
          Confirm Booking →
        </button>

      </div>
    </div>
  );
}