# Module 5: Automation and Integration — Level 07
## Language: EN · Difficulty: Root
## Estimated time: 2 hours

## 🎯 Level objective
- Understand what an automatic notification is and what it's for.
- Create notices that arrive on their own on your phone or email when something happens.
- Choose which events deserve a notice and which don't.
- Set up a notice for an important piece of data (a payment, a date, a reply).
- Avoid the overload of notices that tire you and don't help.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Notification | The notice that appears on the phone screen or in the email. |
| Automatic notice | A message that is sent on its own when something happens. |
| Event | The happening that starts the notice: a payment, a message, a date. |
| Notice overload | Too many notices arriving at once that overwhelm you. |
| Channel | The path the notice arrives through: phone, email, messages. |
| Important | What truly deserves our attention. |

## 📚 Main lesson
In the previous level we connected two apps and saw how they work together. Today we focus on one of the most useful things you can automate: notifications. An automatic notice is a message that arrives on its own when something important happens, without us having to watch the screen.

Let's think of the pressure cooker in the kitchen. We don't spend all our time checking whether it's ready: the pot warns us with a whistle when it reaches pressure. That whistle is a notification. The automation of the notice lets us do other things while the pot works.

The digital world is the same. There are hundreds of moments we care about knowing: when an important email arrives, when someone fills in a form, when a payment is made, when a date arrives. If we had to keep watching all the time, we'd do nothing else. The automatic notice watches for us.

The trick is choosing well what notifies us. Not all events deserve a whistle. The important, the urgent or what costs money deserves a notice. What is noise does not. A good notification is like the call of a friend who only calls when it matters, not the one who calls for anything.

When we set up a notification in our integration tool, we follow the same pattern as always. The trigger is the event we want to watch: "new email from this person", "new row in this sheet", "payment made". The action is sending the notice: a message to the phone, an email, a notification.

Which channel to choose? It depends on the moment. For something urgent, a message to the phone (Telegram or WhatsApp). For something that can wait, an email. For a calendar reminder, the calendar app itself. Choosing the channel is like choosing between phoning or sending a letter: depending on importance, the path.

Many apps already warn on their own without needing the integration tool. The bank warns about every movement, the email about every new message. What integration adds is warning about things no app watches: crossing data, joining two apps, warning about specific conditions.

An example: we want to be notified only if the fridge temperature rises above a certain level, or only if an email arrives from the bank with the word "receipt". That is a condition. We will learn conditions in depth in the Stem band; today we see how it fits: the notification can depend on a chosen condition.

Notice overload is a real danger. If we activate fifteen notifications, the phone rings all day and we end up ignoring them all, even the important ones. It is like the shepherd who cries "wolf!" so many times that nobody listens. The golden rule: few notices and good ones.

Every time we activate a notice, let's ask ourselves: "do I really need to know this the moment it happens?" If the answer is doubtful, better not to activate it. We can start without a notice and add it later if we truly miss it. It is easier to add than to remove the noise.

It's also worth setting quiet hours: there are times of day when we don't want notices. The phone already has silent modes (level 4) and the tools allow notices to be sent only at certain hours. A notification that arrives in the middle of the night is not a help, it's a nuisance.

When you finish this level you will know how to set up notices that tell you only what's important and, above all, you will know how to say "this doesn't deserve a notice". That judgement is worth more than all the technology together.

## 💡 Practical examples
1. **The rent payment.** When the club sheet records a member's payment, the treasurer receives a message on the phone: "Payment received from [name]".
2. **The form reply.** When someone asks for information on the association's website, a notice reaches the coordinator's email in less than a minute.
3. **The maintenance notice.** The tool watches the incidents sheet and warns the person in charge when someone writes "urgent" in the status column.

## 🛠️ Guided activity
Step 1: Open your integration tool (Make or Zapier) and log into your account.
Step 2: Create a new scenario and choose the trigger. For example: in Google Sheets, the "Watch rows" event with your club's payments sheet.
Step 3: Add the action: look for the messaging app (Telegram) and choose "Send message".
Step 4: Connect your Telegram account if it's not connected (it will ask you for a short code).
Step 5: In the message, write: "Payment received from [name field] for [amount field]". The tool offers you the sheet fields to insert.
Step 6: Press "Test". The tool will send a test message to your Telegram. Open it and look at it.
Step 7: If you only want it to warn when the amount is greater than zero, look for the "Filter" or "Condition" option and set that rule (or wait for level 10).
Step 8: Activate the scenario. Add a test row to the sheet and check that the message arrives. Then delete the test row.
Step 9: Write on your paper a list of three events you want to watch and decide, for each one, whether it deserves a notice or not.

## ✍️ Self-assessment exercises
1. What is an automatic notification? a) A message sent on its own when something happens. b) A message we write by hand. c) A type of font.
2. Which events deserve a notice? a) All of them, the more the better. b) Only what's important, urgent or costs money. c) None.
3. Which channel is best for something urgent? a) A letter on paper. b) A message to the phone. c) Writing it in the diary.
4. What is notice overload? a) Too many notices arriving and all being ignored. b) A notice arriving late. c) A notice in English.
5. What golden rule do we apply to notifications? a) The more notices, the better. b) Few notices and good ones. c) No notice ever.

Answers: 1-a, 2-b, 3-b, 4-a, 5-b.

## ⚖️ Ethical dimension
- Don't send automatic notices to other people without their consent: every notice that arrives on someone else's phone interrupts.
- Notices about money or health must be discreet: don't write sensitive data in the message itself.
- Respect other people's rest hours: programme notices for reasonable times.
- Remove notices that no longer serve: an old notice is noise and confusion.
- You are the owner of your attention: you decide what notifies you, not the apps.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| Telegram | Receiving notices on your phone | telegram.org (free) |
| Pushbullet | Notices from the computer to the phone | pushbullet.com (free) |
| ntfy | Your own notices, without depending on other apps | ntfy.sh (free and open) |
| Google Alerts | Notice when something new appears online | google.com/alerts (free) |

## 🧠 Summary and bridge
Automatic notifications tell us only about the important stuff, without us watching. We choose the event, the channel and the moment, and we avoid notice overload. We have already connected apps and set up notices. In the next level we will learn to use automation templates: ready-made recipes we can copy and adapt in minutes.
