import { Link } from "react-router-dom";
import { Server, Bell, Shield, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 animate-fade-in sm:px-6 lg:px-8 lg:py-16">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Rob
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
          A Discord bot for community server tools.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Rob helps with server utilities, notifications, tracking, leaderboards, and
          selected automation features configured by server staff.
        </p>
      </section>

      <div className="mb-12 rounded-lg border border-border bg-card p-4 text-sm text-card-foreground shadow-sm sm:p-6">
        <p>
          Rob is currently used in a private/community Discord server. A self-hosted or
          take-home version may be considered later.
        </p>
      </div>

      <section className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Server className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-base font-semibold text-card-foreground">
            Server tools
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Commands and utilities configured for the Discord server where Rob is used.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Bell className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-base font-semibold text-card-foreground">
            Notifications and tracking
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Rob can process selected events and send notifications when enabled by server
            staff.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-base font-semibold text-card-foreground">
            Privacy-aware setup
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Users are shown Rob’s Terms of Service and Privacy Policy before using bot
            features.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-secondary/50 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Lock className="h-4 w-4" />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              For Discord users
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Before using Rob, users may be asked to review and accept the Terms of
              Service and Privacy Policy. These documents explain how Rob may process
              Discord data needed to provide its features.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/terms"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
