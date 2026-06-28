import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function ClanCard({ player }) {
  if (!player.clan) {
    return (
      <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-slate-900
        to-slate-950
        p-8
        shadow-xl
        ">
          <div
              className="
              absolute
              right-0
              top-0
              h-40
              w-40
              rounded-full
              bg-blue-500/10
              blur-[80px]
            "
            />
        <h2 className="text-2xl font-bold">
          Clan
        </h2>

        <p className="mt-4 text-slate-400">
          This player is not currently in a clan.
        </p>
      </motion.section>
    );
  }

  return (
    <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }} 
    className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <div className="flex items-center gap-5">
        <img
          src={player.clan.badgeUrls.medium}
          alt={player.clan.name}
          className="h-20 w-20"
        />

        <div>
          <h2 className="text-3xl font-bold">
            {player.clan.name}
          </h2>

          <p className="mt-2 text-slate-400">
            {player.role}
          </p>
        </div>
      </div>
    </motion.section>
  );
}