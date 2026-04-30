"use client";

import { useState } from "react";
import ServiceSelector from "./ServiceSelector";
import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";
import BookingSummary from "./BookingSummary";
import BookingForm from "./BookingForm";

export default function BookingLayout() {
  const [data, setData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    address: "",
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">

      {/* LEFT */}
      <div className="space-y-6">
        <ServiceSelector data={data} setData={setData} />
        <DateSelector data={data} setData={setData} />
        <TimeSelector data={data} setData={setData} />
      </div>

      {/* RIGHT */}
      <div className="space-y-6">
        <BookingSummary data={data} />
        <BookingForm data={data} setData={setData} />
      </div>

    </div>
  );
}