export default function SearchBar() {
  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <input
        type="text"
        placeholder="#PLAYER_OR_CLAN_TAG"
        className="w-full max-w-xl rounded-xl px-5 py-4 bg-slate-900 border border-slate-700 outline-none focus:border-yellow-400"
      />

      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">
          Search Player
        </button>

        <button className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition">
          Search Clan
        </button>
      </div>
    </div>
  );
}