# resources

This is a repository for holding static resources such as the rules messages. This is **not** for bots or other deployed processes.

## Rules

### Setup Instructions

To clone this repository, you need a way to run Git. Follow the instructions [here](https://git-scm.com/install/) if you don't know how to do this. You'll also need Bun; follow the instructions [here](http://bun.sh/).

To clone, open a terminal (using Git Bash unless you know what you're doing) and go to the folder you want to place this repository in (you can navigate using `cd folder_name`). Then, call `git clone https://github.com/TransGG/resources.git`. You'll want an editor such as VSCode, but Notepad _will_ work.

Create a `.env` file in the `resources/` folder. You'll need a bot that can create/delete threads, delete messages, and manage webhooks in your rules channel. Once you have its token, write `TOKEN_RULES_POSTER=` followed by the token in `.env`.

You'll also need a webhook for each server you want to update. Once you have the webhooks, set `WEBHOOK_RULES_<SERVER>=<WEBHOOK>` (no `<>` in the file) in `.env`, one line per assignment. The server name is generally its common name with no punctuation and no spacing, fully uppercase, e.g. `TRANSPLACE`, `ENBYPLACE`, `TRANSONANCE`, etc.

### Update Instructions

Before updating, call `git pull` (using Git Bash) within the `resources/` folder. to make sure you have the most up-to-date version locally.

Make your changes in `src/rules/<server>.ts`.

Run `bun rules:<server>` (without the `<>`). The server name should be the same as for the webhook but lowercase. This will also update the Markdown file in `raw/rules/`, which you should not edit manually. This should also update the rules in the server using the webhook.

Finally, run `git add --all && git commit -m "<descriptive message>" && git push`.
