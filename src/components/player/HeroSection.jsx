import HeroCard from "./HeroCard";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../../utils/animations";

export default function HeroSection({ player }) {
  if (!player.heroes || player.heroes.length === 0)
    return null;

  return (
    <section className="mt-10">
      <h2 className="mb-8 text-3xl font-bold">
        Heroes
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {player.heroes.map((hero) => (
          <HeroCard
            key={hero.name}
            hero={hero}
          />
        ))}
      </motion.div>
    </section>
  );
}