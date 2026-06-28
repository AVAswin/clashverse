export default function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex justify-between items-center border-b border-slate-800">
      <h1 className="text-2xl font-bold text-yellow-400">
        ClashVerse
      </h1>

      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-yellow-400 transition"
      >
        GitHub
      </a>
    </nav>
  );
}