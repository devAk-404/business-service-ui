"use client";

import WhyChooseUs from "@/components/WhyChooseus";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Wrench } from "lucide-react";

export default function LeakRepairPage() {
  const router = useRouter();

  const leakProblems = [
  {
    img: "/leakage-service/leak-under-sink.jpeg",
    title: "Under Sink Leak",
    desc: "Water collecting inside cabinets due to loose or damaged pipe joints",
  },
  {
    img: "/leakage-service/wall-damp.jpeg",
    title: "Wall Dampness",
    desc: "Peeling paint or wet patches caused by hidden pipe leakage",
  },
  {
    img: "/leakage-service/ceiling-leak.jpeg",
    title: "Ceiling Leakage",
    desc: "Water dripping from above due to pipe damage in upper floors",
  },
  {
    img: "/leakage-service/bathroom-leak.jpeg",
    title: "Bathroom Pipe Leak",
    desc: "Leakage behind tiles leading to long-term structural damage",
  },
  {
    img: "/leakage-service/floor-seepage.jpeg",
    title: "Floor Seepage",
    desc: "Water rising through tiles due to underground leakage",
  },
  {
    img: "/leakage-service/corroded-pipe.jpeg",
    title: "Corroded Pipes",
    desc: "Old rusted pipes cracking and leaking over time",
  },
];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Leak Repair Services
          </h1>

          <p className="text-gray-600 mt-4">
            Stop water leaks before they cause serious damage. Our expert plumbers
            quickly detect and fix leaks to protect your home and reduce costs.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => router.push("/book")}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700"
            >
              Book Service →
            </button>

            <button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50">
              Enquire
            </button>
          </div>
        </div>

        <div className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow">
          <Image
            src="/leakage-service/leak-hero2.jpeg"
            alt="Leak repair service"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">

  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
    Real Leak Issues We Fix Every Day
  </h2>

  <p className="text-gray-500 text-center mt-2 mb-8">
    See common problems our customers face before calling us
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {leakProblems.map((item, i) => (
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
    zIndex: leakProblems.length - i,
  }}
  className="
    group relative rounded-2xl overflow-hidden
    bg-white
    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
    hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
    transition-all duration-500
  "
>
      <div className="overflow-hidden">
        <img
          src={item.img}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-base">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* subtle glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-emerald-50/40 to-transparent pointer-events-none" />
    </motion.div>
  ))}
</div>
</section>

      {/* DIAGNOSIS */}
      <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">

        {/* SIGNS */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="
    bg-white rounded-2xl p-4 md:p-8
    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
>
  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
    How to Know If You Have a Leak
  </h2>

  <p className="text-gray-500 mb-6">
    Water leaks are often hidden and worsen over time. Look out for these early warning signs before serious damage occurs.
  </p>

  <div className="grid sm:grid-cols-2 gap-4">
    {[
      "Damp spots or discoloration on walls or ceilings",
      "Constant dripping sound even when taps are off",
      "Sudden increase in water bill",
      "Mold growth or musty smell",
      "Reduced water pressure",
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -4 }}
        className="
          group flex items-start gap-2
          p-2 rounded-xl
          bg-gray-50
          hover:bg-emerald-50
          transition-all duration-300
        "
      >
        <CheckCircle
          size={18}
          className="text-emerald-600 mt-1 group-hover:scale-110 transition"
        />

        <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition">
          {item}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* CAUSES */}
        {/* CAUSES */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
  >
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
      What Might Be Causing It
    </h2>

    <p className="text-gray-500 mb-6">
      Plumbing leaks often stem from deeper system issues. Identifying the root cause
      early helps prevent recurring damage and expensive repairs.
    </p>

    <div className="grid sm:grid-cols-2 gap-3">
      {[
        "Corroded or aging pipes",
        "Loose pipe joints or faulty installation",
        "High water pressure damaging fittings",
        "Blockages creating pressure buildup",
        "Worn-out seals or fixtures",
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -4 }}
          className="
            flex items-start gap-2
            p-2 rounded-xl
            bg-gray-50
            hover:bg-emerald-50
            transition-all duration-300
          "
        >
          <Wrench size={18} className="text-emerald-600 mt-1" />
          <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>

        {/* WHY FIX */}
        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Why You Should Fix It Immediately
          </h2>

          <p className="text-gray-600">
            Ignoring a leak can lead to costly repairs. What starts as a small issue
            can quickly escalate into structural damage, mold growth, and increased
            water bills. Early intervention saves both time and money.
          </p>
        </div>

        {/* SOLUTION */}
        {/* SOLUTION */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
  >
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
      How We Fix the Problem
    </h2>

    <p className="text-gray-500 mb-6">
      Our experts follow a structured process to ensure long-term solutions instead
      of temporary fixes.
    </p>

    <div className="space-y-4">
      {[
        "Inspect and detect the exact leak source",
        "Use professional tools for hidden leak detection",
        "Repair or replace damaged pipes and fittings",
        "Test system to ensure complete resolution",
      ].map((step, i) => (
        <motion.div
          key={i}
          whileHover={{ x: 6 }}
          className="
            flex items-center gap-2
            p-2 rounded-xl
            bg-gray-50
            hover:bg-emerald-50
            transition-all duration-300
          "
        >
          <div className="
            w-8 h-8 flex items-center justify-center
            rounded-full bg-emerald-600 text-white text-sm font-semibold
          ">
            {i + 1}
          </div>

          <p className="text-gray-700 text-sm">{step}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>

        <section className="bg-gray-50 py-14 mt-10">

  <div className="max-w-5xl mx-auto px-4">

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-2xl md:text-3xl font-semibold text-center text-gray-900"
  >
    Before & After Our Leak Repair
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-8 mt-12">

    {/* BEFORE */}
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.92, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <p className="text-sm font-medium text-red-500 mb-3">Before</p>

      <div className="
        relative rounded-2xl overflow-hidden
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)]
        transition-all duration-500
        group-hover:-translate-y-2
      ">
        <img
          src="/leakage-service/before.jpeg"
          className="w-full h-[260px] object-cover
          group-hover:scale-105 transition duration-700"
        />
      </div>
    </motion.div>

    {/* AFTER */}
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.92, rotate: 2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <p className="text-sm font-medium text-emerald-600 mb-3">After</p>

      <div className="
        relative rounded-2xl overflow-hidden
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)]
        transition-all duration-500
        group-hover:-translate-y-2
      ">
        <img
          src="/leakage-service/after.jpeg"
          className="w-full h-[260px] object-cover
          group-hover:scale-105 transition duration-700"
        />
      </div>
    </motion.div>

  </div>
</div>
</section>

        {/* TRUST */}
        <WhyChooseUs/>

        {/* CTA */}
        <div className="text-center pt-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Not sure if this is your issue?
          </h3>

          <p className="text-gray-500 mt-2">
            Describe your problem or book an inspection — we’ll help you instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <button
              onClick={() => router.push("/book")}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700"
            >
              Book Inspection →
            </button>

            <button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50">
              Talk to Expert
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}