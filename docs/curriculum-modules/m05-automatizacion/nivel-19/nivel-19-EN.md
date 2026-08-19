# Module 5: Automation and Integration — Level 19
## Language: EN · Difficulty: Branch
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what a chat bot is and what it's for.
- Learn about messaging bots like Telegram and WhatsApp.
- Create a simple bot that answers basic questions.
- Connect the bot with an integration tool.
- Learn the rules of courtesy and safety when using bots.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Bot | A program that replies to messages on its own, like a chat robot. |
| Chat | The written conversation: the bot and us. |
| Command | A special word or phrase the bot understands. |
| Automatic reply | The message the bot sends without anyone writing it. |
| Telegram bot | A bot that lives inside the Telegram messaging app. |
| Human | A real person, who is different from the bot. |

## 📚 Main lesson
We finish the Branch band with a very useful piece: chat bots. A bot is a program that replies to messages for us, like a conversation robot. We write to it and it answers; we ask it for something and it does it. It's like having an automatic receptionist who never gets tired or annoyed.

Where do bots live? In the messaging apps. The simplest place to start is Telegram, a very popular free messaging app. Inside Telegram, a bot is a special contact: it has its own name, its own icon and replies to what we write. It's not a person: it's a program with a name.

What can a bot do? The basics is replying with a prepared message. We write "hello" and it replies "Hello! How can I help you?". We write "schedule" and it replies with the association's schedule. Those are replies we write once and the bot repeats when it should. It's like the phone answering machine, but in writing and with much more memory.

Bots understand us through commands. A command is a special word the bot recognises: "/schedule", "/prices", "/help". When we write the command, the bot does its thing. It's a very clear way to talk to a machine: instead of explaining, we press the magic word.

The bot can also deliver information that comes from elsewhere. Here it joins with everything we've learned: the bot can ask our spreadsheet, our database or our automation, and bring back the answer. "How many members are there?" and the bot looks at the sheet and replies with the real number. The bot is the mouth; the automation, the memory.

To create a bot, you use an app called BotFather (the "father of bots") inside Telegram. You write to it to create a new bot, give it a name and get a secret key, like the key to the door. That key is kept carefully: with it you control the bot. Then the integration tool uses that key for the bot to reply.

Once the bot is created, you connect it to the integration tool. We can set it up so that, when someone writes a command, the flow does something: look up a piece of data, send a notice, record a request. Or the other way round: the flow sends messages to the bot for it to deliver to the group. The bot becomes an entry and exit point for the automation.

We must be careful about what bots can't do. A bot doesn't understand nuances: if we write a long, confusing sentence, it won't know what to do. That's why bots work best with clear questions and defined commands. When something goes off plan, the bot should have a polite reply: "I didn't understand, try /help".

A golden rule: the bot should never pass itself off as a person. The bot must say from the start "I'm a robot". Honesty avoids confusion and deception. If someone thinks they're talking to a person and discover it's a bot, they lose trust. Clear is honest.

Bots are very useful for associations: they answer repeated questions, give information at any hour and collect requests without getting tired. But what they can't do is replace human contact when it's needed: a person who truly needs help deserves a real person. The bot opens the door; the human attends.

When you finish this level, we close the Branch band having automated the voice, the home and the messages. In the Canopy band we'll climb one more step: AI agents, which don't just reply, but also carry out complete tasks.

## 💡 Practical examples
1. **The association's bot.** The bot automatically answers the frequently asked questions: schedules, fees, addresses. The volunteers no longer repeat the same thing a thousand times.
2. **The booking bot.** We write "/book" and the bot checks the availability sheet and confirms or rejects the booking.
3. **The alerts bot.** When the automation detects an urgent incident, it sends the message to the bot, which delivers it to the committee group.

## 🛠️ Guided activity
Step 1: Download and install Telegram on your phone (telegram.org). Create your account with your number if you don't have one.
Step 2: Search for the user "@BotFather" inside Telegram and open the chat with him.
Step 3: Type /newbot and press send. BotFather will ask you the bot's name: give it a clear one, for example "Club Service".
Step 4: BotFather will ask you for a username ending in "bot" (for example, "club_service_bot"). Type it.
Step 5: BotFather will give you a long key (token). Copy it and keep it in a safe place on your paper: it's your bot's key, don't share it.
Step 6: Search for your bot on Telegram by its username and open it. Press "Start" or type /start. It will greet you.
Step 7: In your integration tool, look for the "Telegram Bot" or "Telegram Bot API" connector and paste your key to connect.
Step 8: Create a simple automation: when the bot receives the message "hello", have it reply "Hello! I'm the club's bot. Type /schedule to see the schedules".
Step 9: Add the /schedule command with your real schedule. Try writing both messages to it and check the replies.
Step 10: Remember: at the end of the welcome message, put "I'm a robot, not a person".

## ✍️ Self-assessment exercises
1. What is a chat bot? a) A program that replies to messages on its own. b) A person who works at night. c) A type of phone.
2. Where is a Telegram bot created? a) In the shop. b) By writing to BotFather. c) It can't be created.
3. What is a command? a) A special word the bot recognises, like /schedule. b) A shout. c) A file.
4. Should a bot say it's a robot? a) No, better to hide it. b) Yes, always, to be honest. c) Only if asked.
5. Can a bot replace human contact? a) Yes, always. b) No: it opens the door, but people attend to people. c) Only on holidays.

Answers: 1-a, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Ethical dimension
- A bot must never pass itself off as a person: always announce it's a robot.
- Don't ask the bot for users' personal data or store it without permission.
- Supervise the bots: check from time to time what messages they receive and whether the replies are still correct.
- If a user needs real help (a serious problem, an emergency), the bot must refer them to a person.
- The bot's key is like your house key: keep it, don't share it and change it if you suspect anything.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| Telegram | The app where the bots live | telegram.org (free) |
| BotFather | Creating and managing your bot | @BotFather on Telegram |
| Make (Telegram) | Connecting the bot to your flows | make.com |
| Chatwoot | Free customer service with bots | chatwoot.com (open source) |

## 🧠 Summary and bridge
A bot replies to messages on its own, with commands and prepared replies, and can bring data from our automations. It's created with BotFather, connected with a key and never passes itself off as a person. We close the Branch band. In the next level we start the Canopy: AI agents, which don't just reply, but also carry out whole tasks.
