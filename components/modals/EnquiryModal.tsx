"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

export default function EnquiryModal({ open, onClose }: any) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Enter valid phone number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-md bg-white rounded-2xl 
                      shadow-[0_20px_60px_rgba(0,0,0,0.25)] 
                      p-6 sm:p-8">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={20} />
        </button>

        {!success ? (
          <>
            {/* HEADER */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Send an Enquiry
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                We’ll get back to you shortly
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              {/* NAME */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white 
                    border ${errors.name ? "border-red-400" : "border-gray-200"}
                    text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                    outline-none transition`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setForm({ ...form, phone: val });
                    setErrors({ ...errors, phone: "" });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white 
                    border ${errors.phone ? "border-red-400" : "border-gray-200"}
                    text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                    outline-none transition`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white 
                    border ${errors.email ? "border-red-400" : "border-gray-200"}
                    text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                    outline-none transition`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  rows={3}
                  placeholder="Your message (optional)"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white 
                             border border-gray-200
                             text-gray-900 placeholder-gray-400
                             focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                             outline-none transition"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white py-3 rounded-xl 
                           font-semibold shadow-md hover:bg-emerald-700 
                           active:scale-[0.98]
                           transition disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Enquiry →"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <CheckCircle className="text-emerald-600 mx-auto mb-3" size={42} />
            <h3 className="text-lg font-semibold text-gray-900">
              Enquiry Sent!
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              We’ll contact you shortly.
            </p>

            <button
              onClick={onClose}
              className="mt-5 px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}