export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} My Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Made By</span>
            <span className="text-accent">Ekeh Chiamaka</span>
            <span className="text-sm text-accent">Esther</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
