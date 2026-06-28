export default function ClanHeader({ clan }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center md:gap-8">
        <img
          src={clan.badgeUrls.large}
          alt={clan.name}
          className="h-36 w-36"
        />

        <div className="mt-6 md:mt-0">
          <h1 className="text-5xl font-black">
            {clan.name}
          </h1>

          <p className="mt-2 text-slate-400">
            {clan.tag}
          </p>

          <div className="mt-4 inline-block rounded-full bg-yellow-400/10 px-4 py-2 text-yellow-300">
            Clan Level {clan.clanLevel}
          </div>
        </div>
      </div>
    </section>
  );
}