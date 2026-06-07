import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Rob Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: 5 June 2026
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. About Rob
          </h2>
          <p className="leading-relaxed">
            Rob is a Discord bot currently operated for a private/community Discord
            server.
          </p>
          <p className="mt-2 leading-relaxed">
            Rob may provide features such as registration, notifications, tracking,
            leaderboards, moderation support, logging, inactivity checks, reports, and
            server automation.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. Agreement
          </h2>
          <p className="leading-relaxed">
            By using Rob, you agree to use it responsibly and follow Discord’s rules
            and the rules of the server where Rob is used.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. Server configuration
          </h2>
          <p className="leading-relaxed">
            Server staff control how Rob is configured and used in their server. Some
            features may be enabled, disabled, or changed by authorised server staff.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. Acceptable use
          </h2>
          <p className="mb-2 leading-relaxed">
            You must not use Rob to:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>spam commands, messages, mentions, or automated actions</li>
            <li>harass, abuse, threaten, or target other users</li>
            <li>bypass Discord rules, server rules, bans, permissions, or safety systems</li>
            <li>collect or misuse personal information</li>
            <li>use Rob for scams, phishing, malware, or deceptive behaviour</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Availability
          </h2>
          <p className="leading-relaxed">
            Rob is provided as-is. Rob may go offline, break, be changed, or have
            features removed at any time.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. Access restrictions
          </h2>
          <p className="leading-relaxed">
            Access to Rob may be limited or removed if Rob is misused, abused, or used
            in a way that causes issues for the server or bot.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Privacy
          </h2>
          <p className="leading-relaxed">
            Rob may process Discord data needed to provide its features. See the{" "}
            <Link to="/privacy" className="underline">
              Privacy Policy
            </Link>{" "}
            for more information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            8. Future updates
          </h2>
          <p className="leading-relaxed">
            Rob may be updated in the future, including if it becomes available for use
            in other servers.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          You should also review the{" "}
          <Link to="/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          to understand how Rob handles data.
        </p>
      </div>
    </div>
  );
};

export default Terms;
