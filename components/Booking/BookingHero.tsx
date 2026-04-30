import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function BookingHero() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">

                {/* LEFT */}
                <div>

                    {/* LOGO */}
                    <div className="mb-4 flex justify-center md:justify-start">
                        <div className="mb-6 flex justify-center md:justify-start">
                            <Image
                                src={siteConfig.logo}
                                alt={siteConfig.businessName}
                                width={340}
                                height={120}
                                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* HEADING */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center md:text-left">
                        Book an <span className="text-emerald-600">Appointment</span>
                    </h1>

                    <p className="text-gray-500 mt-3 text-sm sm:text-base text-center md:text-left">
                        Schedule a visit from our expert plumbers. Fast, reliable and hassle-free.
                    </p>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-4 md:gap-6 mt-5 text-xs sm:text-sm text-gray-600 justify-center md:justify-start">
                        <span>✔ Licensed & Insured</span>
                        <span>✔ On-time Service</span>
                        <span>✔ Guaranteed</span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden shadow-md">
                    <Image
                        src="/plumber.png"
                        alt="plumber"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}