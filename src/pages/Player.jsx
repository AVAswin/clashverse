import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/common/Loader";

import PlayerHeader from "../components/player/PlayerHeader";
import PlayerStats from "../components/player/PlayerStats";
import ClanCard from "../components/player/ClanCard";
import HeroSection from "../components/player/HeroSection";

import PageContainer from "../components/ui/PageContainer";

import { getPlayer } from "../api/cocApi";
import { motion } from "framer-motion";

export default function Player() {
  const { tag } = useParams();

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const data = await getPlayer(tag);
        setPlayer(data);
      } finally {
        setLoading(false);
      }
    }

    fetchPlayer();
  }, [tag]);

  if (loading) return <Loader />;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 text-white">
      <PageContainer>
        <motion.div
          initial={{
              opacity:0,
              y:20
          }}
          animate={{
              opacity:1,
              y:0
          }}
          transition={{
              duration:0.5
          }}
        >

            <PlayerHeader player={player} />

            <PlayerStats player={player} />

            <ClanCard player={player} />

            <HeroSection player={player} />

        </motion.div>
      </PageContainer>
    </div>
  );
}