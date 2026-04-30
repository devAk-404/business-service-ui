export default function BookingSummary({ data }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3">
        Booking Summary
      </h3>

      <div className="text-sm text-gray-600 space-y-2">
        <p><b>Service:</b> {data.service || "Not selected"}</p>
        <p><b>Date:</b> {data.date || "Not selected"}</p>
        <p><b>Time:</b> {data.time || "Not selected"}</p>
      </div>
    </div>
  );
}