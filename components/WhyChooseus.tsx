"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, BadgeDollarSign, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Fast Response Time",
      desc: "We respond quickly to all service requests, ensuring minimal downtime for your home or business.",
      icon: Zap,
    },
    {
      title: "Licensed & Experienced",
      desc: "Certified professionals with years of real-world plumbing expertise.",
      icon: ShieldCheck,
    },
    {
      title: "Upfront Pricing",
      desc: "Transparent pricing with no hidden costs before any work begins.",
      icon: BadgeDollarSign,
    },
    {
      title: "24/7 Emergency Service",
      desc: "Available anytime you need us — day or night, always ready.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center px-4"
      >
        <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-3">
          Why Choose Us
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Trusted Plumbing Experts You Can Rely On
        </h2>

        <p className="text-gray-500 mt-3">
          We combine speed, expertise, and reliability to deliver exceptional service every time.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="mt-14 max-w-6xl mx-auto px-4 grid gap-6 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {points.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              style={{
                transform: `translateY(${i * -10}px)`,
                zIndex: points.length - i,
              }}
              className="
                group relative text-center
                bg-white rounded-2xl p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                transition-all duration-500
                hover:-translate-y-2
              "
            >

              {/* ICON */}
              <div className="
                w-12 h-12 mx-auto mb-4 flex items-center justify-center
                rounded-xl
                bg-emerald-50
                text-emerald-600
                group-hover:bg-emerald-600 group-hover:text-white
                transition-all duration-300
              ">
                <Icon size={22} />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-gray-900 text-base">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-500 mt-2 leading-relaxed group-hover:text-gray-700 transition">
                {item.desc}
              </p>

              {/* HOVER GLOW */}
              <div className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-t from-emerald-50/40 to-transparent
                opacity-0 group-hover:opacity-100
                transition duration-500
                pointer-events-none
              " />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}