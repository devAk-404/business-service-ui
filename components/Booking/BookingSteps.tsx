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
    <div className="flex justify-center mb-10">
      
      {/* CONTAINER (IMPORTANT) */}
      <div className="flex items-center max-w-3xl w-full px-4">
        
        {steps.map((step, i) => {
          const Icon = step.icon;
          const active = currentStep >= i + 1;

          return (
            <div key={i} className="flex items-center flex-1">

              {/* STEP */}
              <div className="flex flex-col items-center min-w-[70px]">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full
                  ${active ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-500"}
                `}
                >
                  <Icon size={18} />
                </div>

                <span
                  className={`text-xs mt-2 text-center
                  ${active ? "text-emerald-600 font-medium" : "text-gray-400"}
                `}
                >
                  {step.label}
                </span>
              </div>

              {/* LINE */}
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-3
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