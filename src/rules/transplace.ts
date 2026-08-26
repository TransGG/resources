import { templateRules } from "@/rules/utils";

const TEMPLATE_RULE_2_SUBSECTION_B_DESCRIPTION = (example: string) =>
    `This is a trans community, so we acknowledge the relevance of conversation about things like bottom surgery. As a general guideline, talking about surgeries or procedures in a medical and mature manner is okay, but don't bring sexual topics into the discussion. ${example}`;

const TEMPLATE_RULE_3_SUBSECTION_C_DESCRIPTION = (politicsChannelText: string) =>
    `This is a safe space for people to get away from real-life situations. There are other communities for political discussion; this is not the place for political discussion or debate. You can read more about this policy in ${politicsChannelText}.`;

const TEMPLATE_RULE_3_SUBSECTION_E_DESCRIPTION = (ventingChannelText: string) =>
    `Venting and doomposting can be challenging and uncomfortable for others to witness, and the members and staff here are not equipped to provide mental health support or advice. There are other communities that allow venting; this is not the place. You can read more about this policy in ${ventingChannelText}.`;

const TEMPLATE_RULE_7_DESCRIPTION = (triggerWarningInstructions: string) =>
    `Respect others' triggers. ${triggerWarningInstructions} A list of common triggers is included in the details for this rule. Flashy media, excessively loud noises, and similar content must come with adequate warning, including in voice channels. Your triggers are also your responsibility to manage.`;

const TEMPLATE_RULE_7_SUBSECTION_A_DESCRIPTION = (example: string) =>
    `A proper trigger warning declares that it's a trigger warning (TW), includes a brief mention of what the category is within a spoiler, and the content itself within a spoiler (e.g. ${example}). Spoilers without a mention of what's spoiled are inadequate.`;

const TEMPLATE_RULE_11_DESCRIPTION = (selfieChannelText: string) =>
    `Avoid conversing in media-sharing channels. Respect the audience of clubhouse channels. Selfies are only permitted in ${selfieChannelText} (access is granted upon meeting server activity requirements).`;

const TEMPLATE_RULE_11_SUBSECTION_C_DESCRIPTION = (selfieChannelText: string) =>
    `Selfies are restricted to ${selfieChannelText} (access is granted upon meeting server activity requirements). This is both for the safety of those posting selfies and to discourage publicly posting transition progress, which has the potential to amplify others' dysphoria.`;

const TEMPLATE_RULE_12_SUBSECTION_B_DESCRIPTION = (threadList: string) =>
    `${threadList}\nIf there's a language you want to see here, let us know. The threads with no listed moderators were opened by popular request without any staff fluent in the language. As such, any reported issues in these threads will result in the closure of the thread.`;

const TEMPLATE_CONTACTING_STAFF = (contactStaffChannelText: string, howToReport: string) =>
    `You can open tickets and submit anonymous reports via ${contactStaffChannelText} to talk to staff privately.\n\nPlease be the bigger person. If you see someone trying to start a fight, don't fight back. Instead, contact us in a ticket or report it. *Don't feed trolls or your own trauma responses.*\n\nTo report a user or message, ${howToReport}. This reports the user or message to us and pings active moderators, which helps us best handle the situation as quickly as possible. This does not report the message to Discord.`;

const TEMPLATE_IMPORTANT_NOTICE = (helpResourcesChannelText: string) =>
    `We are not mental health professionals. We'd like to render assistance in every way possible, but we don't have the capacity or qualifications to render mental health assistance, nor are we able to give professional advice. Because of this, we don't have any venting channels and ask that you seek appropriate help if you are experiencing a crisis. Avoid depending on this server as an emotional crutch and avoid topics that are very emotionally heavy or loaded. A list of mental health resources is provided in ${helpResourcesChannelText}. Thank you for your understanding.`;

await templateRules({
    webhookVariableName: "RULES_TRANSPLACE",
    plaintextPath: "raw/rules/transplace.md",
    serverName: "TransPlace!",
    serverURL: "https://discord.gg/transplace",
    accentColor: 0xdf585b,
    headerImageURL: "https://i.imgur.com/KGyMpU5.png",
    headerImageDescription: "A decorative header that says Server Rules",
    rules: [
        {
            title: "Hate has no home here.",
            threadName: "Hate has no home here",
            description:
                "No hate speech (e.g. slurs, gatekeeping). Don't share hateful media or images, even to criticize them.",
            subsections: [
                {
                    title: "No slurs.",
                    description:
                        'Reclaiming slurs is not allowed, as this is a public setting and their usage will still upset other people. Terms that have been widely accepted as reclaimed, such as "queer", are allowed.',
                },
                {
                    title: "No transmedicalism or gatekeeping.",
                    description:
                        "Transmedicalism is the belief that trans people must undergo certain medical procedures (e.g. HRT, surgery) to be valid. We don't allow gatekeeping identities here; people are who they say they are.",
                },
                {
                    title: "No bigotry.",
                    description:
                        "Treating people based on their characteristics (e.g. race, gender, religion) rather than their character will not be tolerated here.",
                },
                {
                    title: "No elitism.",
                    description:
                        "Everyone has different life circumstances and different levels of privilege. Looking down on people for circumstances beyond their control is not welcome.",
                },
                {
                    title: "No bigotry showcases.",
                    description:
                        "Sharing media or screenshots containing hate in order to criticize it is not allowed. This is a space for people to get away from hate and stress, so avoid exposing members to hate even if it's to criticize it.",
                },
                {
                    title: "Hate and bigotry are not funny.",
                    description:
                        'Claiming bigotry was "just a joke" will not be accepted as a justification for hateful rhetoric.',
                },
            ],
        },
        {
            title: "Keep things appropriate and safe for yourself and others.",
            threadName: "Keep things age-appropriate",
            description:
                "This is a 13+ community. No NSFW, roleplaying, flirting, or partner-seeking. Be mindful of your internet safety.",
            subsections: [
                {
                    title: "No NSFW.",
                    description:
                        "This is a 13+ community, so everything must be appropriate for minors. Things like sexual content and gory or disturbing content are not allowed.",
                },
                {
                    title: "Sexual versus medical discussion:",
                    description: TEMPLATE_RULE_2_SUBSECTION_B_DESCRIPTION(
                        "NSFW, non-graphic: ||For example, talking about the recovery from bottom surgery is okay, but discussing sexual intercourse post-op, the effect of HRT on sexual function, and similar topics is not appropriate for this audience.||",
                    ),
                    screenreaderDescription: TEMPLATE_RULE_2_SUBSECTION_B_DESCRIPTION(
                        "An example is included at the end of this document as it mentions NSFW topics that are not allowed without graphic detail.",
                    ),
                },
                {
                    title: "Mature channels:",
                    description:
                        "NSFW is not allowed in mature channels either. These channels are intended for adults to have conversations about more mature topics and we're more lenient on things such as legal substance use, but it is still subject to our server rules otherwise.",
                },
                {
                    title: "No roleplaying or flirting.",
                    description:
                        'A simple "I love you" is fine, but flirting, between partners or otherwise, should be kept to private conversations. Things like calling people "good boy" or "good girl", calling people "cute" or "adorable" to fluster them, and similar interactions may be disallowed.',
                },
                {
                    title: "This is not a dating server.",
                    description:
                        "Attemting to use this server to find partners will result in an immediate ban. People may end up dating friends they meet in this server and end up talking in DMs, but soliciting relationships or searching within the server will not be tolerated.",
                },
                {
                    title: "If you are unsure, ask or avoid.",
                    description:
                        "Open a ticket with us to ask about something if you're unsure whether it crosses the line, or err on the side of not sending things that might be borderline. Suggestive content under a spoiler will still be removed.",
                },
                {
                    title: "Be mindful of internet safety.",
                    description:
                        "This is more of a guideline than a hard rule, but keep in mind that this is a large public community. Be careful sharing information about yourself and be aware of people attempting to manipulate you into giving them personal information. Do not hesitate to inform us if something feels off.",
                },
            ],
        },
        {
            title: "Avoid sensitive and prohibited topics.",
            threadName: "Restricted topics",
            description:
                "Avoid venting, politics, discussing substance use, controversial topics, phrases that target those with mental health challenges, links to X/Twitter, Meta, and TikTok, AI-generated content, and topics prohibited by Discord's Terms of Service.",
            subsections: [
                {
                    title: "Legal substances:",
                    description:
                        "Brief mentions of legal substances like alcohol will be considered acceptable in context, but refrain from engaging in conversations focused on substance use or bringing it up without context.",
                },
                {
                    title: "Comply with Terms of Service and international law",
                    description:
                        "For the safety of the server, we must enforce Discord's Terms of Service. The following are disallowed:\n1. Distributing pirated content (by sharing links, streaming in voice channels, etc.),\n2. Discussing the use of pirated material,\n3. Talking about how to pirate content (including emulating games when it violates the publisher's Terms of Service), and\n4. Any other conversations that Terms of Service or international law may prohibit.",
                },
                {
                    title: "Avoid political conversation.",
                    description: TEMPLATE_RULE_3_SUBSECTION_C_DESCRIPTION("<#1126163144134361238>"),
                    screenreaderDescription: TEMPLATE_RULE_3_SUBSECTION_C_DESCRIPTION("the politics channel"),
                },
                {
                    title: "Avoid religious discussion.",
                    description:
                        "We are committed to being inclusive of everyone regardless of traits such as religion, but be considerate of others' beliefs and viewpoints as well as potential religious trauma.",
                },
                {
                    title: "Avoid venting.",
                    description: TEMPLATE_RULE_3_SUBSECTION_E_DESCRIPTION("<#1126163020620513340>"),
                    screenreaderDescription: TEMPLATE_RULE_3_SUBSECTION_E_DESCRIPTION("the venting channel"),
                },
                {
                    title: "Avoid conversations about controversial or fiery topics.",
                    description:
                        "This includes, but is not limited to, the ethics and usage of generative artificial intelligence, cryptocurrency and Web3, and controversial figures. These topics can spark debates that put everyone in a bad mood and dampen the server environment.",
                },
                {
                    title: "Avoid system discourse (syscourse) and discussion of system origins.",
                    description:
                        "There are differing viewpoints about system origins, specifically endogenic or non-traumagenic systems. To keep this as safe of a space as possible for all systems, we do not allow discussion of system origins or their validity or other discourse around plurality.",
                },
                {
                    title: "Avoid phrases that target or make light of individuals with mental health challenges.",
                    description:
                        'Making jokes about being in people\'s walls and posting or referencing the "I was crazy once" copy-paste are disallowed for this reason.',
                },
                {
                    title: "Banned platforms:",
                    description:
                        "We have decided to disallow links to X/Twitter, Meta (Instagram, Facebook, etc.), and TikTok. Sharing media and screenshots directly is allowed and we will not police what you do in your own time, but we disallow links to these platforms.",
                },
            ],
        },
        {
            title: "Do not discuss DIY medical treatment.",
            threadName: "No DIY or specific medical advice",
            description:
                "For legal reasons, we can't allow discussion of DIY medical treatment (e.g. HRT, binders). Refrain from seeking or providing specific medical advice.",
            subsections: [
                {
                    title: "Discussing your experience is allowed.",
                    description:
                        "Discussing and asking about experience with HRT or medical treatment, and the effects that you or others have observed, is allowed.",
                },
                {
                    title: "Discussing DIY treatment is not allowed.",
                    description:
                        "Asking about or giving advice for pursuing HRT or medical treatment through sources outside of legal healthcare is not allowed. This is for the legal safety of the server, not an opinion-based stance.",
                },
                {
                    title: "Avoid discussing or encouraging DIY binders.",
                    description:
                        "Binding improperly has the potential to cause significant harm to the wearer, so avoid discussing DIY methods of binding.",
                },
                {
                    title: "Specific medical advice is not allowed.",
                    description:
                        "Asking or giving advice about dosages and specific medical routines is not allowed. Talking about your experiences is allowed, but asking about or telling others what dosage to take isn't. We are not equipped to ensure the safety of such advice. You are not equipped to give specific advice to people over the internet whose medical history and health you do not know.",
                },
            ],
        },
        {
            title: "Treat everyone with respect.",
            threadName: "Treat everyone with respect",
            description:
                "No discrimination or harassment. Assume good faith and don't assume malice based on your biases. Respect all good-faith identities.",
            subsections: [
                {
                    title: "No discrimination or harassment.",
                    description:
                        "Regardless of your past experiences with people, don't discriminate against people based on their characteristics, harass people over past grievances, witch-hunt people, or bring outside drama into this server. You can report people if you believe they made the community unsafe.",
                },
                {
                    title: "Assume good faith and don't assume malice.",
                    description:
                        "Keep your own biases in mind and try not to assume people are engaging in bad faith or being hostile.",
                },
                {
                    title: "Understand neurodivergence and trauma.",
                    description:
                        "Everyone has different ways of relating to each other and engaging with topics due to neurodiverge and/or trauma.",
                },
                {
                    title: "All good-faith identities are valid.",
                    description:
                        "It is not up to you to police who deserves what labels and what labels are valid. Let people describe their own selfhood, as they know their own experiences. Niche labels, xenogenders, neopronouns, and plurality types are to be respected.",
                },
                {
                    title: "No respectability politics.",
                    description:
                        "Some believe that sabotaging or excluding more unconventional identities will make bigots more accepting of the community as a whole. Hateful rhetoric will always exist and throwing each other under the bus only furthers division and hate.",
                },
            ],
        },
        {
            title: "Respect plural users. We operate on system accountability.",
            threadName: "Respect plurality and system accountability",
            description:
                "Users talking with `[APP]` beside their name are using [PluralKit](https://pluralkit.me) and are real users, not bots. PluralKit is only to be used as a mental health aid for plurality. Systems will be held responsible as a whole for moderation and must set a system tag to use PluralKit.",
            subsections: [
                {
                    title: "PluralKit users are real users.",
                    description:
                        "Members speaking using the [PluralKit](https://pluralkit.me) bot have their messages replaced with a webhook message. You will see this as a user message appearing, followed by a webhook message with the same content, followed by the original message being deleted. This is to represent which alter sent the message, but it is a real user and a real person interacting. If you click on the profile of a message author with the `[APP]` tag, you will know whether it's a bot by checking the profile. Bots will have roles, a profile, and a box to message them. Webhooks (real users) will not.",
                },
                {
                    title: "PluralKit is a mental health aid.",
                    description:
                        "We only allow usage of this bot by plural members to represent their alters. We don't gatekeep plurality, but using the bot for other purposes (such as roleplay) is not allowed.",
                },
                {
                    title: "System responsibility:",
                    description:
                        "We understand that alters are different people. Nonetheless, all alters inhabit the same body and mind and interact through the same account, so for moderation purposes, systems' infractions will be tracked as a whole and decisions will be made per-account.",
                },
                {
                    title: "System tags:",
                    description:
                        "You must set a system tag to use PluralKit here (the bot itself will enforce this). In <#962018841737719888>, you can use `pk;s systemtag <tag>` to set a global tag or `pk;s servertag <tag>` to set a tag for just this server. Your system tag is up to your preference; common choices include an emoji or a name with which the system identifies.",
                    screenreaderDescription:
                        "You must set a system tag to use PluralKit here (the bot itself will enforce this). In the bot commands channel, you can use the system tag command to set a global tag or the server tag command to set a tag for just this server. Your system tag is up to your preference; common choices include an emoji or a name with which the system identifies. The syntax for these commands are PK semicolon S, space, system tag or server tag as one word, and then your tag. Here's a copy-pastable command: `pk;s systemtag your-tag-here` or `pk;s servertag your-tag-here`.",
                },
            ],
        },
        {
            title: "Be mindful of triggers.",
            threadName: "Triggers",
            description: TEMPLATE_RULE_7_DESCRIPTION(
                "You can add trigger warnings like so: `TW ||trigger||: ||content||` = TW ||trigger||: ||content||.",
            ),
            screenreaderDescription: TEMPLATE_RULE_7_DESCRIPTION(
                "You can add trigger warnings by writing TW, followed by a short description of what the trigger is in a spoiler, followed by the content in a separate spoiler. To send a spoiler, put two vertical pipes on each side of the text.",
            ),
            subsections: [
                {
                    title: "Use proper trigger warnings.",
                    description: TEMPLATE_RULE_7_SUBSECTION_A_DESCRIPTION("TW ||bugs||: ||something about bugs||"),
                    screenreaderDescription: TEMPLATE_RULE_7_SUBSECTION_A_DESCRIPTION(
                        "TW, the word bugs in a spoiler, then some content about bugs in a separate spoiler.",
                    ),
                },
                {
                    title: "Always provide trigger warnings for the following topics.",
                    description:
                        "The following list contains several potentially triggering topics, so make sure you are in a good headspace before opening this list. These are common triggers, so minimize mentioning these topics and provide a warning if you feel it is appropriate to mention it at all. ||Bugs, depiction of injury (blood, burns, or bruises), death (animal or human), hospitalizations and institutionalizations (mental or general), wellness checks, in-depth conversation about weight and dieting, cults, and guns and weapons.||",
                    screenreaderDescription: "This list is provided at the end of the document.",
                },
                {
                    title: "Never mention the following topics.",
                    description:
                        "The same warning as above applies. These are commonly extremely triggering, so avoid mentioning these topics ever. ||Any form of abuse or assault (general, sexual, domestic or intimate partner, etc.), drug abuse, eating disorders, self-harm, suicide and suicidal thoughts, human trafficking, incest, and pedophilia.||",
                    screenreaderDescription: "This list is provided at the end of the document.",
                },
                {
                    title: "Your triggers are also your own responsibility.",
                    description:
                        "In such a diverse community, it's impossible to avoid every possible trigger. If something is triggering you, but isn't inherently bad, consider politely asking for a topic change (either by yourself or using `/tag please change topic`), contacting a moderator via a ticket or DMs, or stepping away for a bit.",
                },
                {
                    title: "Report violations of the above.",
                    description:
                        "To keep everyone safe and comfortable, report any messages that include triggering topics without adequate warning or include banned triggers (see the main rules channel for instructions for reporting messages).",
                },
                {
                    title: "This is not an exhaustive list.",
                    description:
                        "Use your best judgment in your conversations and be considerate of others' safety and comfort.",
                },
            ],
        },
        {
            title: "Avoid mini-modding or arguing publicly.",
            threadName: "Avoid mini-modding and arguing",
            description:
                "Report rule violations and avoid taking matters into your own hands. If you disagree with a staff action, contact us privately rather than arguing publicly.",
            subsections: [
                {
                    title: "Report rule violations.",
                    description:
                        "Avoid taking matters into your own hands and being confrontational, and report things to us instead (see the main rules channel for instructions for reporting messages). Public disputes draw out rule violations and moderators can handle things more quickly and effectively. Additionally, people have different interpretations of the rules, so we prefer that members don't try enforcing rules themselves.",
                },
                {
                    title: "Do not argue publicly.",
                    description:
                        "Staff operate with the community's safety and best interests in mind, but they are human and mistakes are inevitable. If you disagree with an action, we welcome your feedback. Open a ticket, DM a senior moderator or admin, or submit an anonymous report. We want to have open and transparent conversations to reach a common understanding which is difficult to accomplish in public channels.",
                },
            ],
        },
        {
            title: "Practice effective conflict resolution and de-escalation.",
            threadName: "Conflict resolution and de-escalation",
            description:
                "Avoid escalating disagreements to arguments. Avoid letting conversations become personal or heated. Don't assume bad faith and report hateful rhetoric instead of arguing.",
            subsections: [
                {
                    title: "Avoid letting arguments become personal or heated.",
                    description:
                        "Disagreements will happen, but don't attack the other person. If things are getting too heated, consider backing off and agreeing to leave the conversation at that point or taking it to DMs if you and the other person both want to continue.",
                },
                {
                    title: "Avoid debates and discourse.",
                    description:
                        "Minor ideological differences are not a reason to tear each other or the community apart. If someone is being bigoted or hateful, report them to staff instead of engaging with them.",
                },
                {
                    title: "Conflict does not equal abuse and disagreements are not always in bad faith.",
                    description:
                        "Even if someone is getting on your nerves, it doesn't always mean they are purposefully hurting you. Try to understand differences of opinion and experience, and report them if you think they're trying to harm you.",
                },
                {
                    title: "Keep others' trauma in mind.",
                    description:
                        "Many people have been traumatized in various ways and can be triggered by things that you may find innocuous. Keep in mind that if someone is seemingly unreasonably upset by something you said, don't attack them or double-down, and if you're being triggered by something that is not malicious, try to step back and use calming, coping, or grounding techniques.",
                },
            ],
        },
        {
            title: "No spam or self-promotion.",
            threadName: "No spam or self-promotion",
            description:
                "Do not promote server invites or advertise, including in DMs. Contact us to request a partnership or an exemption.",
            subsections: [
                {
                    title: "No unapproved advertisements.",
                    description:
                        "You can open a ticket to request approval for an advertisement, but we don't want this server to be used for people to advertise themselves or their servers.",
                },
                {
                    title: "Partnership requirements:",
                    description:
                        "We review partnerships case-by-case, but generally you must demonstrate that your server offers something that benefits our community's members and we typically ask that servers can show an established community and at least one tenth (10%) of our members. This isn't a hard rule and meeting the numerical guideline doesn't guarantee that we'll accept your request.",
                },
            ],
        },
        {
            title: "Stay on-topic and only post selfies in the selfies channel.",
            threadName: "Stay on-topic and restricted selfies",
            description: TEMPLATE_RULE_11_DESCRIPTION("<#1037517248862101504> (__#selfies__)"),
            screenreaderDescription: TEMPLATE_RULE_11_DESCRIPTION("the selfies channel"),
            subsections: [
                {
                    title: "Media channels:",
                    description:
                        "Avoid extended discussion in the media-sharing channels <#960920616175800382>, <#962453066446176346>, and <#960920536697929758> so as to not bury the media people are sharing.",
                    screenreaderDescription:
                        "Avoid extended discussion in the memes, gallery, and workshop channels. These are media-sharing channels; avoid burying the media people are sharing.",
                },
                {
                    title: "Clubhouse channels:",
                    description:
                        "Everyone is welcome to participate in the clubhouse channels <#999165241894109194>, <#999165867625566218>, and <#999167335938150410>, but keep the target audiences in mind. These channels are areas for people with similar experiences and identities to relate and discuss, so avoid taking over others' channel or bringing in topics that alienate the intended audience.",
                    screenreaderDescription:
                        "Everyone is welcome to participate in the transmasc treehouse, the transfem forest, and the enby enclave, which are collectively called the clubhouse channels. Keep the target audiences in mind as these channels are areas for people with similar experiences and identities to relate and discuss. Avoid taking over others' channel or bringing in topics that alienate the intended audience.",
                },
                {
                    title: "Selfies:",
                    description: TEMPLATE_RULE_11_SUBSECTION_C_DESCRIPTION(
                        "the selfies channel <#1037517248862101504>",
                    ),
                    screenreaderDescription: "the selfies channel",
                },
            ],
        },
        {
            title: "English only, and keep things accessible.",
            screenreaderDescription: "Language and accessibility",
            description:
                "Short phrases, jokes, and references in other languages are fine, but keep conversations in English. A list of language threads is provided in the details for this rule as an exception. Using symbols that look like letters to spell is not allowed, including in display names.",
            subsections: [
                {
                    title: "Keep conversations in English.",
                    description:
                        "This is an English community, so to avoid excluding people from conversation, do not hold conversations in other languages. We understand that not everyone speaks English, but we are an English community and there are other communities for other languages.",
                },
                {
                    title: "The following threads are exceptions:",
                    description: TEMPLATE_RULE_12_SUBSECTION_B_DESCRIPTION(
                        "- Balkans: <#1532845500984987749> (relevant languages allowed)\n- 中文 (Chinese): <#1532845500984987749> (moderator: <@251082987360223233>)\n- Nederlands (Dutch): <#1532845500984987749> (moderators: <@226675003662401536>, <@659488296820408355>, <@430929498410844160>)\n- Français (French): <#1396616606720856284> (moderators: <@380564645255053315>, <@907713974563385364>)\n- Deutsch (German): <#1116049729931984956> (moderators: <@185044357701828608>, <@659488296820408355>, <@430929498410844160>)\n- Italiana (Italian): <#1532845500984987749> (moderator: <@395403552341753869>)\n- 日本語 (Japanese): <#1255283747746742395>\n- Español (Spanish): <#1532845500984987749> (moderators: <@244726371568451584>, <@395403552341753869>)",
                    ),
                    screenreaderTitle: "Several threads are available as exceptions to this rule.",
                    screenreaderDescription: TEMPLATE_RULE_12_SUBSECTION_B_DESCRIPTION(
                        "A list of regional and language threads can be found in the general channel. Links are provided in the details for this rule on Discord or you can search the thread list in the general channel. Here is a list of threads and fluent moderators if applicable:\n- Balkans (languages spoken in that region are permitted here)\n- Chinese (all dialects), moderated by hyperneutrino\n- Dutch, moderated by catgirlemma, leaf.moe, and we.are.uto\n- French, moderated by pat.5621.me and depresedbard\n- German, moderated by gracepanther, leaf.moe, and we.are.uto\n- Italian, moderated by queerneko\n- Japanese\n- Spanish, moderated by pocketmusic and queerneko\n",
                    ),
                },
                {
                    title: "No spelling with lookalike symbols.",
                    description:
                        "Using symbols that look like letters in place of those letters to spell things for decorative purposes is not allowed, both in display names and in messages. These can be difficult for people to read, are unable to be read by people whose systems do not have those symbols, and are inaccessible to people using screenreaders or text-to-speech. Decorative symbols such as brackets, stars, and emoji are allowed in display names. The rough guideline is that text-to-speech should read out your name in a way that makes sense and allows someone to distinguish your messages without needing to look at your name.",
                },
            ],
        },
    ],
    bottomSection: [
        {
            title: "Additional Policies",
            description:
                "By participating in this server, you agree to the following:\n- [Discord's Terms of Service](https://discord.com/terms)\n- [Discord's Community Guidelines](https://discord.com/guidelines)\nOur rules also apply to public elements of your profile. You may hide your bio in user settings under Data & Privacy, but all other elements of your profile will be visible and therefore must follow our rules.",
            screenreaderDescription:
                "By participating in this server, you agree to follow Discord's Terms of Service, available at https://discord.com/terms, and Discord's Community Guidelines, available at https://discord.com/guidelines. Our rules also apply to public elements of your profile. You may hide your bio in user settings under Data and Privacy, but all other elements of your profile will be visible and therefore must follow our rules.",
        },
        {
            title: "Contacting Staff",
            description: TEMPLATE_CONTACTING_STAFF(
                "<#995343855069175858>",
                "right click (desktop) or long press (mobile) the user or message and select Apps > Badeline > Report User or Message",
            ),
            screenreaderDescription: TEMPLATE_CONTACTING_STAFF(
                "the contact-staff channel",
                "open the context menu on the user or message by right clicking on desktop or long pressing on mobile, then selecting Apps, then Badeline, then Report User or Report Message.",
            ),
            mediaURL: "https://i.imgur.com/jxEcGvl.gif",
            mediaDescription: "A GIF showing the reporting process explained above.",
        },
        {
            title: "Automod and Moderator Discretion",
            description:
                "Some of our rules are enforced by automod, which may block your message. Do not try to bypass this. If you think something should not be blocked, contact us privately to discuss it.\n\nThese rules are not meant to be comprehensive. Moderators will do their best to maintain a comfortable and safe community and may take actions not explicitly outlined in the rules. If you disagree with any actions, open a ticket and we will review it. Follow the spirit of the rules.",
        },
        {
            title: "Important Notice",
            description: TEMPLATE_IMPORTANT_NOTICE("<#1128077003015331840>"),
            screenreaderDescription: TEMPLATE_IMPORTANT_NOTICE("the help-resources channel"),
        },
    ],
    screenreaderSeparatedSection: `The following content has been separated from its reference point above so that you can skip it more easily if using a screenreader.

Skip the following content if you would like to avoid the example of sexually inappropriate discussion versus medical discussion for rule 2, which is not graphic.

Discussing the recovery from bottom surgery is okay. Discussing sexual intercourse post-op, the effect of HRT on sexual function, et cetera is not appropriate for this audience.

Skip the following content if you would like to avoid the examples of triggering content for rule 7.

The following topics are to be put under a trigger warning every time. Bugs, depiction of injury including blood, burns, and bruises, death of animals or humans, hospitalization or institutionalization both mental and general, wellness checks, in-depth conversation about weight and dieting, cults, and guns and weapons.

The following topics are forbidden. Any form of abuse or assault including general, sexual, domestic or intimiate partner violence, drug abuse, eating disorders, self-harm, suicide or suicidal thoughts, human trafficking, incest, and pedophilia.

This is the end of this document.`,
});
