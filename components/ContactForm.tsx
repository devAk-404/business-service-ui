"use client";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        service: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const numeric = value.replace(/\D/g, "").slice(0, 10);
            setForm({ ...form, phone: numeric });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setError("");
        setMessage("");

        if (!form.name || !form.phone || !form.service) {
            setError("All fields are required");
            return;
        }

        if (form.phone.length !== 10) {
            setError("Enter valid 10-digit US phone number");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setMessage("Request sent successfully!");
            setForm({ name: "", phone: "", service: "" });
        }, 1000);
    };

    return (
        <>
            <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <span className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">
                            Emergency Service
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
                            Need Immediate Help?
                        </h2>

                        <p className="mt-4 text-emerald-200 text-sm md:text-base">
                            Our expert plumbers are available 24/7. Call us now or request a service and we’ll get back instantly.
                        </p>

                        <div className="mt-6">
                            <p className="text-sm text-emerald-300">Call us directly</p>
                            <h3 className="text-2xl md:text-3xl font-bold mt-1">
                                (555) 123-4567
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6 text-sm text-emerald-200">
                            <span>✔ 24/7 Available</span>
                            <span>✔ Fast Response</span>
                            <span>✔ Licensed Experts</span>
                        </div>
                    </div>

                    {/* RIGHT SIDE - FORM CARD */}
                    <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 md:p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Request a Service
                        </h3>

                        {error && (
                            <p className="text-sm text-red-500 mb-3 text-center">{error}</p>
                        )}

                        {message && (
                            <p className="text-sm text-emerald-600 mb-3 text-center">
                                {message}
                            </p>
                        )}

                        <form className="space-y-4" onSubmit={handleSubmit}>

                            {/* NAME */}
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                            />

                            {/* PHONE */}
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition">

                                <div className="flex items-center gap-1 px-3 bg-gray-100 text-sm whitespace-nowrap">
                                    <span>🇺🇸</span>
                                    <span>+1</span>
                                </div>

                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full p-3 focus:outline-none"
                                />
                            </div>

                            {/* SERVICE */}
                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-200 bg-white text-gray-700 appearance-none focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                            >
                                <option value="" className="text-gray-200">
                                    Select Service Needed
                                </option>
                                <option value="Leak Repair">Leak Repair</option>
                                <option value="Drain Cleaning">Drain Cleaning</option>
                                <option value="Pipe Repair">Pipe Repair</option>
                                <option value="Emergency Plumbing">Emergency Plumbing</option>
                            </select>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg disabled:opacity-70"
                            >
                                {loading ? "Sending..." : "Send Request →"}
                            </button>
                        </form>

                        <p className="text-xs text-gray-400 mt-4 text-center">
                            We respect your privacy. No spam, ever.
                        </p>
                    </div>

                </div>
            </section>

        </>
    );
}