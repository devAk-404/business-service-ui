"use client";

import { useState } from "react";
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

    // mock API
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-[90%] max-w-lg rounded-2xl shadow-xl p-6 sm:p-8">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {!success ? (
          <>
            {/* HEADER */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
              Send an Enquiry
            </h2>

            <p className="text-sm text-gray-500 text-center mt-1">
              We’ll get back to you shortly
            </p>

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
                  className={`w-full p-3 rounded-lg border 
                    ${errors.name ? "border-red-400" : "border-gray-200"}
                    focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* PHONE */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setForm({ ...form, phone: val });
                    setErrors({ ...errors, phone: "" });
                  }}
                  className={`w-full p-3 rounded-lg border 
                    ${errors.phone ? "border-red-400" : "border-gray-200"}
                    focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* EMAIL (optional) */}
              <div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                  className={`w-full p-3 rounded-lg border 
                    ${errors.email ? "border-red-400" : "border-gray-200"}
                    focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  placeholder="Your message (optional)"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-3 rounded-lg border border-gray-200 
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold 
                           hover:bg-emerald-700 transition disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Enquiry →"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <CheckCircle className="text-emerald-600 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-semibold">Enquiry Sent!</h3>
            <p className="text-gray-500 text-sm mt-1">
              We’ll contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}