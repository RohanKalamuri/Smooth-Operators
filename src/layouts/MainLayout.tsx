const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers"],
  },
  {
    title: "Resources",
    links: ["Docs", "Support", "Community"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-lg font-semibold text-text-primary">
              Workpal
            </p>

            <p className="mt-2 text-sm text-text-secondary">
              The calm, modern workspace for focused teams.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-text-primary">
                {col.title}
              </p>

              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Workpal. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-text-muted">
            <a href="#" className="hover:text-text-secondary">
              Privacy
            </a>

            <a href="#" className="hover:text-text-secondary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}