import BookingHero from "@/components/Booking/BookingHero";
import BookingSteps from "@/components/Booking/BookingSteps";
import BookingWizard from "@/components/Booking/BookingWizard";

export default function BookingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <BookingHero />
      <BookingWizard />
    </div>
  );
}