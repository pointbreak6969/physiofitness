export default function PromoBar() {
  return (
    <div className="hidden sm:block bg-brand-blue text-white text-center text-[13px] py-2.25 px-3">
      Book an Appointment{" "}
      <a href="tel:+9779864430711" className="font-bold text-white hover:underline">
        Call Now: +977 9864430711
      </a>{" "}
      <span className="text-white/50 mx-1">·</span> Move Better, Feel Stronger, Live more confidently 
    </div>
  );
}
