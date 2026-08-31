# resources

This is a repository for holding static resources such as the rules messages. This is **not** for bots or other deployed processes.

## Rules

You will need to set two environment variables. If `.env` doesn't exist yet, create it in the root folder. This is a set of key-value pairs in the format `KEY=VALUE`, one per line. `TOKEN_RULES_POSTER` should be the token of a bot that can create and delete threads, delete messages, and manage webhooks in the rules channel.

Before updating, call `git pull` to make sure you have the most up-to-date version locally.

To run an update, set the relevant webhook variable and run `bun rules:<server>`. This will automatically update the Markdown file in `raw/rules/`. The variable name is generally `WEBHOOK_RULES_<SERVER>` (e.g. `TRANSPLACE`) and should be the webhook used to post the rules.

After updating, you should push. You can just do `git add --all && git commit -m "<descriptive message>" && git push`.
