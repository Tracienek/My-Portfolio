function Skills() {
  const skills: string[] = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Web Design (Mobile Friendly Layout)",
    "DOM Manipulation",
    "Fetch API / Axios",
    "Web API, JSON handling",
    "React.js",
    "Tailwind CSS",
    "Responsive Design",
    "Git & GitHub",
    "Postman (test API)",
    "Cloud Computing (AWS EC2, S3 storage; IaaS, PaaS, SaaS)",
    "Cybersecurity Awareness",
    "Software Engineering",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-white dark:bg-gray-700 dark:text-white p-4 rounded shadow text-center min-w-[120px]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
