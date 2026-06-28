import { useNavigate } from "react-router-dom";

export default function MemberCard({ member }) {
  const navigate = useNavigate();

  function openPlayer() {
    navigate(`/player/${member.tag.replace("#", "")}`);
  }

  return (
    <button
      onClick={openPlayer}
      className="flex w-full items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-yellow-400
      hover:cursor-pointer"
    >
      <div>
        <h3 className="text-lg font-semibold">
          {member.name}
        </h3>

        <p className="text-sm text-slate-400">
          {member.role}
        </p>
      </div>

      <div className="text-right">
        <p className="font-bold">
          {member.trophies}
        </p>

        <p className="text-xs text-slate-400">
          trophies
        </p>
      </div>
    </button>
  );
}