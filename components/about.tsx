export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About Me
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </div>

          <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
            <p>
              I'm a passionate software developer with a strong foundation in
              building web applications. I love transforming ideas into elegant
              digital solutions using modern web technologies like React,
              TypeScript, and Node.js.
            </p>

            <p>
              My journey in development started with a curiosity about how
              things work, which evolved into a deep appreciation for clean
              code, performance optimization, and user-centric design. I'm
              constantly learning and experimenting with new technologies to
              stay at the forefront of web development.
            </p>

            <p>
              Beyond coding, I enjoy contributing to open-source projects,
              writing technical articles, and mentoring junior developers. I
              believe in the power of community and sharing knowledge to help
              others grow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {[
              { label: "Experience", value: "2+ Years" },
              { label: "Projects Completed", value: "25+" },
              { label: "Languages", value: "5+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-background p-6 text-center"
              >
                <div className="text-2xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
