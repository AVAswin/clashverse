import king from "../../assets/heros/king.png";
import queen from "../../assets/heros/queen.png";
import champion from "../../assets/heros/champion.png";
import warden from "../../assets/heros/warden.png";
import minionPrince from "../../assets/heros/minionPrince.png";

export default function HeroCard({ hero }) {
    const heroImages = {
        "Barbarian King": king,
        "Archer Queen": queen,
        "Grand Warden": warden,
        "Royal Champion": champion,
        "Minion Prince": minionPrince,
    };
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      {/* <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-800 text-4xl mx-auto">
        ⚔️
      </div> */}

      <img src={heroImages[hero.name]} alt={hero.name} />

      <h3 className="mt-5 text-center text-xl font-semibold">
        {hero.name}
      </h3>

      <p className="mt-3 text-center text-yellow-400 text-2xl font-bold">
        Level {hero.level}
      </p>

      <p className="mt-2 text-center text-slate-400">
        Max: {hero.maxLevel}
      </p>
    </div>
  );
}