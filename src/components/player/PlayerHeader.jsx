import {
  ArrowLeft,
  Share2,
  Castle,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function PlayerHeader({ player }) {
  return (
    <motion.section
    variants={fadeUp}
    initial="hidden"
    animate="visible" 
    className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-gradient-to-br
    from-slate-900
    to-slate-950
    shadow-2xl
    ">
      <div
          className="
            absolute
            -top-20
            -right-20
            h-60
            w-60
            rounded-full
            bg-yellow-400/10
            blur-[100px]
          "
          />

      {/* Background Glow */}
      <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative p-8">

        {/* Top Row */}

        <div className="flex items-center justify-between">

          <button className="flex items-center gap-2 text-slate-400 hover:text-white">

            <ArrowLeft size={18} />

            Back

          </button>

          <button className="flex items-center gap-2 text-slate-400 hover:text-white">

            <Share2 size={18} />

            Share

          </button>

        </div>

        {/* Player Info */}

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">

          <img
            src={player.league?.iconUrls?.medium}
            alt={player.league?.name}
            className="h-32 w-32"
          />

          <div className="flex-1">

            <h1 className="text-5xl font-black">
              {player.name}
            </h1>

            <p className="mt-2 text-slate-400">
              {player.tag}
            </p>

            <p className="mt-4 inline-flex rounded-full bg-yellow-400/10 px-4 py-2 text-yellow-300">
              {player.league?.name}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 px-6 py-5 text-center">

            <Castle
              className="mx-auto text-yellow-400"
              size={30}
            />

            <p className="mt-3 text-sm text-slate-400">
              Town Hall
            </p>

            <h2 className="text-3xl font-bold">
              {player.townHallLevel}
            </h2>

          </div>

        </div>

      </div>

    </motion.section>
  );
}