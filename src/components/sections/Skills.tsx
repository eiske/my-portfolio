const SKILLS = [
  "React",
  "Next.js", 
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Amateur Runner 🏃‍♂️"
] as const;

export default function Skills() {
  return (
    <section
      className="sm:float-right sm:w-3/6 sm:text-right xl:float-left xl:w-[12rem] xl:text-left"
      role="region"
      aria-labelledby="skills"
    >
      <h3 id="skills" className="text-2xl font-extrabold my-4">
        Skills
      </h3>
      <ul className="list-none text-nowrap font-semibold">
        {SKILLS.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
} 