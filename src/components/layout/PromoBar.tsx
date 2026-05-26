export default function PromoBar() {
  return (
    <div className="bg-brand-olive text-brand-paper text-center text-[13px] py-[9px] px-3">
      Book an Appointment{" "}
      <a href="tel:+918867863637" className="font-bold text-white hover:underline">
        Call Now: +91 88678 63637
      </a>{" "}
      <span className="text-brand-mist mx-1">·</span> Start your journey toward a pain-free life
    </div>
  );
}
