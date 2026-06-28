import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/common/Loader";

import PlayerHeader from "../components/player/PlayerHeader";
import PlayerStats from "../components/player/PlayerStats";
import ClanCard from "../components/player/ClanCard";
import HeroSection from "../components/player/HeroSection";

import { getPlayer } from "../api/cocApi";

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
      <PlayerHeader player={player} />

      <PlayerStats player={player} />

      <ClanCard player={player} />

      <HeroSection player={player} />
    </div>
  );
}