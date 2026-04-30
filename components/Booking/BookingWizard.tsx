"use client";

import { useState } from "react";
import BookingSteps from "./BookingSteps";
import StepService from "./StepService";
import StepZipcode from "./StepZipcode";
import StepSchedule from "./StepSchedule";
import StepDetails from "./StepDetails";
import StepConfirm from "./StepConfirm";

export default function BookingWizard() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    service: "",
    subService: "",
    zipcode: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    address: "",
    agree: false,
  });

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">

      {/* ICON STEPPER */}
      <BookingSteps currentStep={step} />

      {/* STEPS */}
      {step === 1 && <StepService data={data} setData={setData} next={() => setStep(2)} />}
      {step === 2 && <StepZipcode data={data} setData={setData} next={() => setStep(3)} back={() => setStep(1)} />}
      {step === 3 && <StepSchedule data={data} setData={setData} next={() => setStep(4)} back={() => setStep(2)} />}
      {step === 4 && <StepDetails data={data} setData={setData} next={() => setStep(5)} back={() => setStep(3)} />}
      {step === 5 && <StepConfirm data={data} />}
    </div>
  );
}