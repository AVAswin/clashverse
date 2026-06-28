export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-yellow-400 transition hover:-translate-y-1">
      <div className="text-5xl">{icon}</div>

      <h2 className="text-xl font-bold mt-4">
        {title}
      </h2>

      <p className="text-slate-400 mt-3">
        {description}
      </p>
    </div>
  );
}