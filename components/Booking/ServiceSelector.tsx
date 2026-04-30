// components/booking/ServiceSelector.tsx

import { siteConfig } from "@/config/siteConfig";

export default function ServiceSelector({ data, setData }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3">
        1. Choose Your Service
      </h3>

      <select
        value={data.service}
        onChange={(e) => setData({ ...data, service: e.target.value })}
        className="w-full p-3 border border-gray-200 rounded-lg"
      >
        <option value="">Select a service</option>
        {siteConfig.services.map((s: any, i: number) => (
          <option key={i}>{s.title}</option>
        ))}
      </select>
    </div>
  );
}