import { useParams } from "react-router-dom";

export default function Clan() {
  const { tag } = useParams();

  return (
    <div className="mt-20 text-center">
      <h1 className="text-4xl font-bold">Clan Page</h1>

      <p className="mt-6 text-xl text-yellow-400">
        Tag: {tag}
      </p>
    </div>
  );
}