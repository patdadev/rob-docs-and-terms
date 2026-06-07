import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            Rob
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link
              to="/"
              className={`transition-colors hover:text-primary ${
                isActive("/") ? "font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/terms"
              className={`transition-colors hover:text-primary ${
                isActive("/terms") ? "font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className={`transition-colors hover:text-primary ${
                isActive("/privacy") ? "font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              Privacy
            </Link>
            <Link
              to="/privacy"
              className="hidden rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:inline-flex"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            Rob is a Discord bot currently operated for a private/community Discord
            server.
          </p>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
