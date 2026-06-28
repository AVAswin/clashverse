import {
  Users,
  Trophy,
  Shield,
  Flag,
} from "lucide-react";

const stats = [
  {
    title: "Members",
    value: (c) => c.members,
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Clan Points",
    value: (c) => c.clanPoints,
    icon: Trophy,
    color: "text-yellow-400",
  },
  {
    title: "Required Trophies",
    value: (c) => c.requiredTrophies,
    icon: Shield,
    color: "text-green-400",
  },
  {
    title: "War League",
    value: (c) => c.warLeague?.name ?? "Unranked",
    icon: Flag,
    color: "text-purple-400",
  },
];

export default function ClanStats({ clan }) {
  return (
    <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
          >
            <Icon className={stat.color} size={30} />

            <p className="mt-5 text-sm text-slate-400">
              {stat.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {stat.value(clan)}
            </h2>
          </div>
        );
      })}
    </section>
  );
}