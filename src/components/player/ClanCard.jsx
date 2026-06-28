export default function ClanCard({ player }) {
  if (!player.clan) {
    return (
      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-bold">
          Clan
        </h2>

        <p className="mt-4 text-slate-400">
          This player is not currently in a clan.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
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
    </section>
  );
}