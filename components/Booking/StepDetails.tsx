export default function StepDetails({ data, setData, next, back }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">

      <h2 className="text-xl font-semibold">Your Details</h2>

      <input
        placeholder="Full Name"
        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Phone"
        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none"
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />

      <input
        placeholder="Address"
        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none"
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />

      {/* TERMS */}
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={data.agree}
          onChange={(e) => setData({ ...data, agree: e.target.checked })}
        />
        I agree to terms & conditions
      </label>

      <div className="flex gap-3">
        <button onClick={back} className="flex-1 border py-3 rounded-lg">
          Back
        </button>

        <button
          onClick={next}
          disabled={!data.agree}
          className="flex-1 bg-emerald-600 text-white py-3 rounded-lg"
        >
          Confirm →
        </button>
      </div>
    </div>
  );
}