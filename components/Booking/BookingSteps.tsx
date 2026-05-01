import { Wrench, MapPin, Calendar, User, Check } from "lucide-react";

const steps = [
  { label: "Service", icon: Wrench },
  { label: "Area", icon: MapPin },
  { label: "Schedule", icon: Calendar },
  { label: "Details", icon: User },
  { label: "Done", icon: Check },
];

export default function BookingSteps({ currentStep }: any) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8 sm:mb-10 px-2 sm:px-4">

      <div className="flex items-center justify-between">

        {steps.map((step, i) => {
          const Icon = step.icon;
          const active = currentStep >= i + 1;

          return (
            <div key={i} className="flex items-center flex-1">

              {/* STEP */}
              <div className="flex flex-col items-center text-center flex-shrink-0">

                <div
                  className={`flex items-center justify-center rounded-full
                  ${active ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-500"}
                  
                  w-8 h-8 sm:w-10 sm:h-10`}
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>

                <span
                  className={`mt-1 text-[10px] sm:text-xs whitespace-nowrap
                  ${active ? "text-emerald-600 font-medium" : "text-gray-400"}
                `}
                >
                  {step.label}
                </span>
              </div>

              {/* CONNECTING LINE */}
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-1 sm:mx-3
                  ${currentStep > i + 1 ? "bg-emerald-600" : "bg-gray-200"}
                `}
                />
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
}