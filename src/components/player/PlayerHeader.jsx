export default function PlayerHeader({ player }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-6">

        <img
          src={player.league?.iconUrls?.medium}
          alt={player.league?.name}
          className="h-28 w-28"
        />

        <div>

          <h1 className="text-5xl font-black">
            {player.name}
          </h1>

          <p className="mt-3 text-slate-400">
            {player.tag}
          </p>

          <p className="mt-3 text-yellow-400">
            {player.league?.name}
          </p>

        </div>

      </div>

    </section>
  );
}