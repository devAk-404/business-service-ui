"use client";

import { useState } from "react";
import { Wrench, Droplet, Flame, Zap } from "lucide-react";

type ServiceType = "Repair" | "Maintenance";

const services = [
  { title: "Plumbing & Drains", icon: Wrench },
  { title: "Water Heater", icon: Flame },
  { title: "Water Treatment", icon: Droplet },
  { title: "Electrical", icon: Zap },
];

const serviceTypes = ["Repair", "Maintenance"] as const;

const subServices = {
  Repair: ["Leak Fix", "Pipe Repair", "Drain Blockage"],
  Maintenance: ["Inspection", "Cleaning", "Routine Check"],
};

export default function StepService({ data, setData, next }: any) {
  const [type, setType] = useState<ServiceType | "">("");

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl 
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
                    border border-gray-100 space-y-6">

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        What service are you looking for?
      </h2>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((s, i) => {
          const Icon = s.icon;
          const active = data.service === s.title;

          return (
            <button
              key={i}
              onClick={() => setData({ ...data, service: s.title })}
              className={`p-4 rounded-xl border text-center transition
                ${active
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-white text-gray-800 border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-sm"
                }`}
            >
              <Icon
                className={`mx-auto mb-2 ${
                  active ? "text-white" : "text-emerald-600"
                }`}
              />
              <p className="text-sm font-medium">{s.title}</p>
            </button>
          );
        })}
      </div>

      {/* SERVICE TYPE */}
      {data.service && (
        <>
          <h3 className="font-medium text-gray-800">
            Please choose an option
          </h3>

          <div className="flex gap-3">
            {serviceTypes.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition
                  ${type === t
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-emerald-500 hover:bg-emerald-50"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </>
      )}

      {/* SUB SERVICE */}
      {type && (
        <>
          <h3 className="font-medium text-gray-800">
            What needs to be {type.toLowerCase()}?
          </h3>

          <div className="flex flex-wrap gap-2">
            {subServices[type].map((sub) => {
              const active = data.subService === sub;

              return (
                <button
                  key={sub}
                  onClick={() => setData({ ...data, subService: sub })}
                  className={`px-3 py-2 rounded-lg border text-sm transition
                    ${active
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-emerald-500 hover:bg-emerald-50"
                    }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* CTA */}
      <button
        disabled={!data.service || !data.subService}
        onClick={next}
        className="w-full py-3 rounded-lg font-semibold text-white
                   bg-emerald-600 hover:bg-emerald-700
                   shadow-sm hover:shadow-md transition
                   disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Continue →
      </button>
    </div>
  );
}