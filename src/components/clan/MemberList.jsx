import MemberCard from "./MemberCard";

export default function MemberList({ clan }) {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-3xl font-bold">
        Members ({clan.members})
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {clan.memberList.map((member) => (
          <MemberCard
            key={member.tag}
            member={member}
          />
        ))}
      </div>
    </section>
  );
}