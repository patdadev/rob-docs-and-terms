import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      <header className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="text-lg font-semibold text-foreground">
            Rob
          </span>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/tos"
              className={isActive("/tos") ? "font-medium text-foreground" : "text-muted-foreground"}
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className={isActive("/privacy") ? "font-medium text-foreground" : "text-muted-foreground"}
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            ©2026 Pat | VIB
          </p>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/tos">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
