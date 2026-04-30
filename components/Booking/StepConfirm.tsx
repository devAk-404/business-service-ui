import { CheckCircle, Wrench, Calendar, MapPin, User, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function StepConfirm({ data }: any) {
    const router = useRouter();

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl space-y-6">

            {/* SUCCESS HEADER */}
            <div className="text-center">
                <div className="flex justify-center mb-3">
                    <CheckCircle className="text-emerald-600 w-10 h-10" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                    Booking Confirmed
                </h2>

                <p className="text-gray-500 mt-1">
                    Your appointment has been successfully scheduled.
                </p>
            </div>

            {/* DIVIDER */}
            <div className="border-t" />

            {/* DETAILS GRID */}
            <div className="grid md:grid-cols-2 gap-6">

                {/* SERVICE INFO */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                        <Wrench size={16} /> Service Details
                    </h3>

                    <p className="text-sm text-gray-600">
                        <b>Service:</b> {data.service}
                    </p>

                    {data.subService && (
                        <p className="text-sm text-gray-600">
                            <b>Type:</b> {data.subService}
                        </p>
                    )}
                </div>

                {/* SCHEDULE */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                        <Calendar size={16} /> Schedule
                    </h3>

                    <p className="text-sm text-gray-600">
                        <b>Date:</b> {data.date || "Not selected"}
                    </p>

                    <p className="text-sm text-gray-600">
                        <b>Time:</b> {data.time || "Not selected"}
                    </p>
                </div>

                {/* CUSTOMER */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                        <User size={16} /> Customer Info
                    </h3>

                    <p className="text-sm text-gray-600">
                        <b>Name:</b> {data.name}
                    </p>

                    <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Phone size={14} /> {data.phone}
                    </p>
                </div>

                {/* LOCATION */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                        <MapPin size={16} /> Location
                    </h3>

                    <p className="text-sm text-gray-600">
                        {data.address}
                    </p>

                    <p className="text-xs text-gray-400">
                        Zipcode: {data.zipcode}
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
                <button
                    onClick={() => router.push("/")}
                    className="inline-flex items-center gap-2 
                 bg-emerald-600 hover:bg-emerald-700 
                 text-white px-6 py-3 rounded-lg 
                 font-semibold shadow-sm hover:shadow-md
                 transition active:scale-[0.98]"
                >
                    <Home size={18} />
                    Back to Home
                </button>
            </div>
        </div>
    );
}