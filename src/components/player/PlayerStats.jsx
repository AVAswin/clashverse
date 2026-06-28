import { Trophy, Star, Castle, Heart } from "lucide-react";

const stats = [
  {
    title: "Trophies",
    value: (player) => player.trophies,
    icon: Trophy,
  },
  {
    title: "War Stars",
    value: (player) => player.warStars,
    icon: Star,
  },
  {
    title: "Town Hall",
    value: (player) => `TH ${player.townHallLevel}`,
    icon: Castle,
  },
  {
    title: "Experience",
    value: (player) => player.expLevel,
    icon: Heart,
  },
];

export default function PlayerStats({ player }) {
  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
          >
            <Icon size={28} className="text-yellow-400" />

            <p className="mt-5 text-sm text-slate-400">
              {stat.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {stat.value(player)}
            </h2>
          </div>
        );
      })}
    </section>
  );
}