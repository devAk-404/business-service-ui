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
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-6">

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
              className={`p-4 rounded-xl border transition text-center
                ${active
                  ? "border-emerald-600 bg-emerald-50"
                  : "border-gray-200 hover:border-emerald-400"
                }`}
            >
              <Icon className="mx-auto mb-2 text-emerald-600" />
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
                className={`px-4 py-2 rounded-lg border text-sm
                  ${type === t
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "border-gray-200 hover:border-emerald-400"
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
            {subServices[type].map((sub) => (
              <button
                key={sub}
                onClick={() => setData({ ...data, subService: sub })}
                className={`px-3 py-2 rounded-lg border text-sm
                  ${data.subService === sub
                    ? "bg-emerald-600 text-white"
                    : "border-gray-200 hover:border-emerald-400"
                  }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </>
      )}

      {/* CTA */}
      <button
        disabled={!data.service || !data.subService}
        onClick={next}
        className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition disabled:opacity-50"
      >
        Continue →
      </button>
    </div>
  );
}