import {
  Trophy,
  Star,
  Heart,
  Castle,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../../utils/animations";

const stats = [
  {
    title: "Trophies",
    value: (p) => p.trophies,
    icon: Trophy,
    color: "text-yellow-400",
  },
  {
    title: "War Stars",
    value: (p) => p.warStars,
    icon: Star,
    color: "text-orange-400",
  },
  {
    title: "Town Hall",
    value: (p) => `TH ${p.townHallLevel}`,
    icon: Castle,
    color: "text-green-400",
  },
  {
    title: "Experience",
    value: (p) => p.expLevel,
    icon: Heart,
    color: "text-pink-400",
  },
];

export default function PlayerStats({ player }) {
  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    animate="visible" 
    className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <motion.div
            variants={fadeUp}
            key={stat.title}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-br
              from-slate-900
              to-slate-950
              p-7
              shadow-xl
            "
          >
            <div
                className="
                absolute
                -top-10
                -right-10
                h-28
                w-28
                rounded-full
                bg-yellow-400/10
                blur-[70px]
              "
              />
            <div className="relative">

                <Icon
                    size={32}
                    className={stat.color}
                />

                <h2 className="mt-5 text-5xl font-black">

                    {stat.value(player)}

                </h2>

                <p className="mt-2 text-slate-400">

                    {stat.title}

                </p>

            </div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}