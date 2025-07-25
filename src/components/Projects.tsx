interface Project {
  title: string;
  description: string;
  link: string;
}

function Projects() {
  const projectList: Project[] = [
    { 
      title: "Portfolio Website", 
      description: "Personal portfolio built with React and Tailwind CSS.",
      link: "https://my-portfolio-9odn.onrender.com/"
    },
    { 
      title: "To Do List", 
      description: "A simple To-Do List web built",
      link: "https://my-todo-web.onrender.com"
    },
    { 
      title: "Local Guru Website", 
      description: "An assignment with 4 members built the travel web.",
      link: "https://github.com/RMIT-Vietnam-Teaching/group-project-cosc3060-cosc3061-2024b-hello-world"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projectList.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline font-semibold"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
