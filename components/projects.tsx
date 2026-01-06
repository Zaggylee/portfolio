const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/bespoke.png",
    tags: ["React", "Javascript", "Node.js", "MongoDB"],
    link: "https://final-ecommerce-project-xi.vercel.app/",
  },
  {
    title: "Roulette Gaming App",
    description:
      "Interactive roulette gaming application featuring real-time spin logic, dynamic betting options, and responsive UI for an engaging casino-style experience.",
    image: "/roulette.png",
    tags: ["React", "Tailwind CSS", "Game Logic"],
    link: "https://roulette-app-delta.vercel.app/",
  },

  {
    title: "Streamify",
    description:
      "Netflix-style web application built with Next.js and TypeScript, implementing dynamic routing, API-driven movie listings, and responsive layouts.",

    image: "/streamify.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://streamify-chi-black.vercel.app/",
  },
  // {
  //   title: "Mobile Banking App",
  //   description:
  //     "Cross-platform mobile banking application with secure authentication and transaction management.",
  //   image: "/mobile-banking-app.png",
  //   tags: ["React Native", "Redux", "Firebase"],
  //   link: "#",
  // },
  // {
  //   title: "Social Media Feed",
  //   description:
  //     "Real-time social media feed with image uploads, comments, and algorithmic content discovery.",
  //   image: "/social-media-feed.jpg",
  //   tags: ["Next.js", "PostgreSQL", "Socket.io"],
  //   link: "#",
  // },
  // {
  //   title: "AI Chat Assistant",
  //   description:
  //     "Intelligent chatbot powered by machine learning with natural language processing capabilities.",
  //   image: "/ai-chat-assistant.jpg",
  //   tags: ["Python", "NLP", "React", "API"],
  //   link: "#",
  // },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group rounded-lg border border-border bg-card hover:border-accent transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
