import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import SearchBar from "../components/common/SearchBar";
import FeatureCard from "../components/common/FeatureCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 mt-20 mb-20">
        <FeatureCard
          icon="👤"
          title="Player Profiles"
          description="View trophies, heroes, achievements and more."
        />

        <FeatureCard
          icon="🏰"
          title="Clan Information"
          description="Explore clans, members and rankings."
        />

        <FeatureCard
          icon="⚔️"
          title="War Details"
          description="Track current clan wars in real time."
        />

        <FeatureCard
          icon="📈"
          title="Statistics"
          description="Visualize player and clan performance."
        />
      </section>
    </>
  );
}