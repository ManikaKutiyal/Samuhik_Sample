export default function Marquee() {
  const text = "Get 10% OFF Your First Order - Use Code: EXTRA10 • Need help? Call Us: +91 9590922000 • ";
  return (
    <div className="bg-brand-green text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-4 font-medium text-sm">{text}</span>
        ))}
      </div>
    </div>
  );
}