export default function PageContainer({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Gold Glow */}

      <div
        className="
        absolute
        left-0
        top-0
        h-[350px]
        w-[350px]
        rounded-full
        bg-yellow-500/10
        blur-[120px]
      "
      />

      {/* Purple Glow */}

      <div
        className="
        absolute
        bottom-0
        right-0
        h-[450px]
        w-[450px]
        rounded-full
        bg-indigo-500/10
        blur-[140px]
      "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">

        {children}

      </div>

    </div>
  );
}