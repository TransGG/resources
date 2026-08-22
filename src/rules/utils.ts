import {
    ChannelType,
    Client,
    ComponentType,
    Events,
    GatewayIntentBits,
    MessageFlags,
    WebhookClient,
    type MediaGalleryComponentData,
} from "discord.js";
import fs from "node:fs/promises";

export async function getClientAndWebhookAndSweep(variableName: string) {
    const token = Bun.env.TOKEN_RULES_POSTER;
    if (!token) throw new Error("Set environment variable TOKEN_RULES_POSTER.");

    const url = Bun.env[`WEBHOOK_${variableName}`];
    if (!url) throw new Error(`Set environment variable WEBHOOK_${variableName}.`);

    const webhook = new WebhookClient({ url }, { allowedMentions: { parse: [] } });

    const client = new Client({ intents: GatewayIntentBits.Guilds });
    const promise = new Promise<Client<true>>((res) => client.once(Events.ClientReady, res));
    await client.login(token);
    const bot = await promise;

    const { channel } = (await bot.fetchWebhook(webhook.id)) ?? {};
    if (!channel) throw new Error("Webhook could not be fetched or it is not in a channel.");
    if (channel.type !== ChannelType.GuildText) throw new Error("Webhook is not in a guild text channel.");

    while (channel.isTextBased()) {
        const messages = await channel.bulkDelete(100);
        if (messages.size === 0) break;
    }

    while ("threads" in channel) {
        const threads = await channel.threads.fetch();
        if (threads.threads.size === 0) break;
        await Promise.all(threads.threads.map((thread) => thread.delete()));
    }

    return { client, channel, webhook };
}

interface RulesConfig {
    webhookVariableName: string;
    plaintextPath: string;
    serverName: string;
    serverURL: string;
    accentColor: number;
    headerImageURL?: string;
    headerImageDescription?: string;
    rules: {
        title: string;
        description: string;
        threadName?: string;
        screenreaderTitle?: string;
        screenreaderDescription?: string;
        subsections?: {
            title: string;
            description: string;
            screenreaderTitle?: string;
            screenreaderDescription?: string;
        }[];
    }[];
    bottomSection: {
        title: string;
        description: string;
        mediaURL?: string;
        mediaDescription?: string;
        screenreaderTitle?: string;
        screenreaderDescription?: string;
    }[];
    screenreaderSeparatedSection?: string;
}

export async function templateRules({
    webhookVariableName,
    plaintextPath,
    serverName,
    serverURL,
    accentColor,
    headerImageURL,
    headerImageDescription,
    rules,
    bottomSection,
    screenreaderSeparatedSection,
}: RulesConfig) {
    const anyRuleHasSubsection = rules.some((rule) => rule.subsections?.length);

    await fs.writeFile(
        plaintextPath,
        Buffer.from(
            `
# ${serverName} Server Rules

This is a copy of the server rules for ${serverName}, a Discord server at ${serverURL}. This copy is maintained for accessibility reasons. Please contact us in-server if you find that this information is outdated or if you wish to request any accessibility accommodations.${
                !anyRuleHasSubsection && bottomSection.length === 0 && !screenreaderSeparatedSection
                    ? ""
                    : `\n\nThis document will consist of ${
                          ["one", "two", "three", "four"][
                              (bottomSection.length > 0 ? 1 : 0) +
                                  (anyRuleHasSubsection ? 1 : 0) +
                                  (screenreaderSeparatedSection ? 1 : 0)
                          ]
                      } sections. The first section is a list of rules and their summaries. ${
                          anyRuleHasSubsection ? "The second section is a list of details for each rule. " : ""
                      }${
                          bottomSection.length > 0
                              ? `The ${anyRuleHasSubsection ? "third" : "second"} section is additional information for server moderation. `
                              : ""
                      }${
                          screenreaderSeparatedSection
                              ? `The ${
                                    anyRuleHasSubsection
                                        ? bottomSection.length > 0
                                            ? "fourth"
                                            : "third"
                                        : bottomSection.length > 0
                                          ? "third"
                                          : "second"
                                } section provides examples that were omitted from the middle of the document so that you can skip them if you want to avoid them with a screenreader.`
                              : ""
                      }`
            }

This document is made to be accessible to a screenreader, so people not using screenreaders may find the original content easier to read.${
                screenreaderSeparatedSection
                    ? " Note that the final section is not hidden or blocked out in any way, as the intention is so people using screenreaders can end playback before that point more easily. This is your warning if you are reading this document."
                    : ""
            }

## Section 1: List of rules

${rules.map((rule, index) => `### Rule ${index + 1}: ${rule.screenreaderTitle ?? rule.title}\n\n${rule.screenreaderDescription ?? rule.description}`).join("\n\n")}${
                anyRuleHasSubsection
                    ? `\n\n## Section 2: Extended details for each rule\n\n${rules
                          .map((rule, index) =>
                              rule.subsections?.length
                                  ? `### Rule ${index + 1}: ${rule.screenreaderTitle ?? rule.title}\n\n${rule.subsections.map((subsection, index) => `**Item ${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index]}: ${subsection.screenreaderTitle ?? subsection.title}** ${subsection.screenreaderDescription ?? subsection.description}`).join("\n\n")}`
                                  : "",
                          )
                          .filter(Boolean)
                          .join("\n\n")}`
                    : ""
            }${
                bottomSection.length > 0
                    ? `\n\n## Section ${anyRuleHasSubsection ? 3 : 2}: Additional information related to server moderation\n\n${bottomSection.map((section) => `### ${section.screenreaderTitle ?? section.title}\n\n${section.screenreaderDescription ?? section.description}`).join("\n\n")}`
                    : ""
            }${
                screenreaderSeparatedSection
                    ? `\n\n## Section ${2 + (anyRuleHasSubsection ? 1 : 0) + (bottomSection.length > 0 ? 1 : 0)}: Separated Content\n\n${screenreaderSeparatedSection}`
                    : ""
            }
            `.trim(),
            "utf-8",
        ),
    );

    const { channel, webhook } = await getClientAndWebhookAndSweep(webhookVariableName);

    const threads = new Map<number, string>();

    let index = 0;

    for (const { title, threadName, subsections } of rules) {
        if (!subsections?.length) continue;

        const thread = await channel.threads.create({
            name: `Rule ${index + 1} Details (${threadName ?? title})`,
            type: ChannelType.PublicThread,
        });

        await thread.fetchStarterMessage().then((message) => message?.delete());

        await webhook.send({
            threadId: thread.id,
            withComponents: true,
            flags: MessageFlags.IsComponentsV2,
            components: [
                {
                    type: ComponentType.Container,
                    accentColor,
                    components: [
                        {
                            type: ComponentType.TextDisplay,
                            content: `## Rule ${index + 1}: ${title}\n${subsections.map(({ title, description }, subsectionIndex) => `\`${"abcdefghijklmnopqrstuvwxyz"[subsectionIndex]}.\` **${title}**\n${description}`).join("\n\n")}`,
                        },
                    ],
                },
            ],
        });

        await thread.setLocked(true);

        threads.set(index, thread.url);

        index++;
    }

    console.log(
        `## Rules\n${rules.map(({ title, description }, index) => `${index + 1}. **${title}** ${description}${threads.has(index) ? ` **[Read More >>>](${threads.get(index)})**` : ""}`).join("\n")}`
            .length,
    );

    await webhook.send({
        content: `A plaintext version of these rules, adapted for a better screenreader/text-to-speech experience, is available [here](<https://github.com/TransGG/resources/blob/main/${plaintextPath}>).`,
    });

    if (headerImageURL) {
        await webhook.send({
            withComponents: true,
            flags: MessageFlags.IsComponentsV2,
            components: [
                {
                    type: ComponentType.Container,
                    accentColor,
                    components: [
                        {
                            type: ComponentType.MediaGallery,
                            items: [{ media: { url: headerImageURL }, description: headerImageDescription }],
                        },
                    ],
                },
            ],
        });
    }

    await webhook.send({
        withComponents: true,
        flags: MessageFlags.IsComponentsV2,
        components: [
            {
                type: ComponentType.Container,
                accentColor,
                components: [
                    {
                        type: ComponentType.TextDisplay,
                        content: `## Rules\n${rules.map(({ title, description }, index) => `${index + 1}. **${title}** ${description}${threads.has(index) ? ` **[Read More >>>](${threads.get(index)})**` : ""}`).join("\n")}`,
                    },
                ],
            },
        ],
    });

    if (bottomSection.length) {
        await webhook.send({
            withComponents: true,
            flags: MessageFlags.IsComponentsV2,
            components: [
                {
                    type: ComponentType.Container,
                    accentColor,
                    components: bottomSection.flatMap(({ title, description, mediaURL, mediaDescription }) => [
                        { type: ComponentType.TextDisplay, content: `## ${title}\n${description}` },
                        ...(mediaURL
                            ? [
                                  {
                                      type: ComponentType.MediaGallery,
                                      items: [{ media: { url: mediaURL }, description: mediaDescription }],
                                  } satisfies MediaGalleryComponentData,
                              ]
                            : []),
                    ]),
                },
            ],
        });
    }

    process.exit(0);
}
