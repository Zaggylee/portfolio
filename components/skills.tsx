const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "HTML/CSS",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "mySQL",
      "RESTful APIs",
    ],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub Actions", "Linux"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Management",
      "Mentoring",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-card/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Skills & Technologies
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
