// components/booking/ServiceSelector.tsx

import { siteConfig } from "@/config/siteConfig";

export default function ServiceSelector({ data, setData }: any) {
  return (
    <div className="bg-white p-5 rounded-xl 
                    shadow-[0_8px_25px_rgba(0,0,0,0.06)] 
                    border border-gray-100">

      <h3 className="font-semibold text-gray-900 mb-3">
        1. Choose Your Service
      </h3>

      <select
        value={data.service}
        onChange={(e) => setData({ ...data, service: e.target.value })}
        className="w-full px-4 py-3 rounded-lg 
                   bg-white text-gray-900
                   border border-gray-300
                   focus:outline-none 
                   focus:ring-2 focus:ring-emerald-500 
                   focus:border-emerald-500
                   transition appearance-none"
      >
        <option value="" className="text-gray-400">
          Select a service
        </option>

        {siteConfig.services.map((s: any, i: number) => (
          <option key={i} value={s.title}>
            {s.title}
          </option>
        ))}
      </select>
    </div>
  );
}