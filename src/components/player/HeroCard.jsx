import king from "../../assets/heros/king.png";
import queen from "../../assets/heros/queen.png";
import champion from "../../assets/heros/champion.png";
import warden from "../../assets/heros/warden.png";
import minionPrince from "../../assets/heros/minionPrince.png";

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function HeroCard({ hero }) {
    const heroImages = {
        "Barbarian King": king,
        "Archer Queen": queen,
        "Grand Warden": warden,
        "Royal Champion": champion,
        "Minion Prince": minionPrince,
    };

    const percentage =
    (hero.level / hero.maxLevel) * 100;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -8,
        scale: 1.03,
      }} 
  className="
  relative
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-gradient-to-br
  from-slate-900
  to-slate-950
  p-6
  shadow-xl
">
      

      <img src={heroImages[hero.name]} alt={hero.name} />

      <h3 className="mt-5 text-center text-xl font-semibold">
        {hero.name}
      </h3>

      <p className="mt-3 text-center text-yellow-400 text-2xl font-bold">
        Level {hero.level}
      </p>

      <div className="mt-5">

          <div className="h-2 rounded-full bg-slate-800">

              <div
                  className="h-2 rounded-full bg-yellow-400"
                  style={{
                      width: `${percentage}%`,
                  }}
              />

          </div>

      </div>

      <p className="mt-3 text-center text-slate-400">

          {hero.level} / {hero.maxLevel}

      </p>

      <p className="mt-2 text-center text-slate-400">
        Max: {hero.maxLevel}
      </p>
    </motion.div>
  );
}