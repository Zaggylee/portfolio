export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-pink-100 to-red-100
>"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/5" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Hi, I'm a <span className="text-accent">Software Developer</span>
          </h1>

          <p className="text-balance text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            I craft beautiful, performant web applications with modern
            technologies. I'm passionate about clean code, great user
            experiences, and solving complex problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-card transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
