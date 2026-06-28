import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [tag, setTag] = useState("");
  const navigate = useNavigate();

  function sanitizeTag(input) {
    return input
      .trim()
      .toUpperCase()
      .replace(/^#/, "");
  }

  function searchPlayer() {
    const cleanTag = sanitizeTag(tag);

    if (!cleanTag) {
      alert("Please enter a player tag.");
      return;
    }

    navigate(`/player/${cleanTag}`);
  }

  function searchClan() {
    const cleanTag = sanitizeTag(tag);

    if (!cleanTag) {
      alert("Please enter a clan tag.");
      return;
    }

    navigate(`/clan/${cleanTag}`);
  }

  return (
    <section className="mt-12 flex justify-center px-6">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
        <input
          type="text"
          placeholder="#PLAYER_OR_CLAN_TAG"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-lg text-white outline-none focus:border-yellow-400"
        />

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={searchPlayer}
            className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            Search Player
          </button>

          <button
            onClick={searchClan}
            className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500"
          >
            Search Clan
          </button>
        </div>
      </div>
    </section>
  );
}