function Skills() {
  const strongSkills: string[] = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Bootrap CSS",
    "TypeScript"
  ];

  const familiarSkills: string[] = [
    "Fetch API / Axios",
    "Web API, JSON handling",
    "Git & GitHub",
    "Postman (test API)",
    "Software Engineering",
    "Responsive Web Design (Mobile Friendly Layout)",
    "Cloud Computing (AWS EC2, S3 storage; IaaS, PaaS, SaaS)",
  ];

  const weakSkills: string[] = [
    "Cybersecurity Awareness",
    "DOM Manipulation",
  ];

  const softSkills: string[] = [
    "Teamwork",
    "Communication",
    "Problem-solving",
    "Time management",
    "Adaptability",
  ]

  // Component render từng nhóm skill
  const renderSkillGroup = (title: string, skills: string[]) => (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4 text-purple-600">{title}</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-white dark:bg-gray-700 dark:text-white p-3 rounded shadow text-center min-w-[160px]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

      <div className="max-w-4xl mx-auto">
        {renderSkillGroup("💪 Strong Skills", strongSkills)}
        {renderSkillGroup("📘 Familiar Skills", familiarSkills)}
        {renderSkillGroup("😅 Basic/Weak Skills", weakSkills)}
        {renderSkillGroup("✨ Soft Skills", softSkills)}
      </div>
    </section>
  );
}

export default Skills;
