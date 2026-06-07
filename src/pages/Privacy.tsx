import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Rob Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: 5 June 2026
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. Data Rob may process
          </h2>
          <p className="mb-2 leading-relaxed">
            Rob may process and store:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Discord user IDs</li>
            <li>Discord server IDs</li>
            <li>Discord channel IDs</li>
            <li>Discord role IDs</li>
            <li>message IDs</li>
            <li>command usage</li>
            <li>server settings</li>
            <li>moderation or warning records</li>
            <li>inactivity tracking information</li>
            <li>leaderboard information</li>
            <li>registration details used by Rob features</li>
            <li>error logs and diagnostic information</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Depending on enabled server features, Rob may also process message content
            or event data needed for logging, moderation, automation, reports,
            notifications, or tracking.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. How Rob uses data
          </h2>
          <p className="mb-2 leading-relaxed">
            Rob uses data to:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>respond to commands</li>
            <li>save server settings</li>
            <li>provide moderation, logging, automation, and tracking features</li>
            <li>manage leaderboards and notifications</li>
            <li>troubleshoot errors</li>
            <li>prevent abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. Data sharing
          </h2>
          <p className="leading-relaxed">
            Rob does not sell user data.
          </p>
          <p className="mt-2 leading-relaxed">
            Rob data is only used to operate the bot, maintain the server, troubleshoot
            issues, or comply with reasonable legal or safety requirements.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. Data deletion and access requests
          </h2>
          <p className="leading-relaxed">
            A server owner or authorised staff member can request deletion of stored
            server data.
          </p>
          <p className="mt-2 leading-relaxed">
            Users can request information about data linked to their Discord user ID,
            where reasonably possible.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Security
          </h2>
          <p className="leading-relaxed">
            Reasonable steps are taken to protect Rob’s data, but no system is perfect.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. Contact
          </h2>
          <p className="leading-relaxed">
            For questions or data requests, contact the server owner or Rob maintainer.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          You should also review the{" "}
          <Link to="/tos" className="underline">
            Terms of Service
          </Link>{" "}
          to understand the rules for using Rob.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
