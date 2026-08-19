# Module 5: Automation and Integration — Level 13
## Language: EN · Difficulty: Stem
## Estimated time: 2 hours

## 🎯 Level objective
- Understand that automations can fail and that this is normal.
- Learn the most common types of errors in a flow.
- Learn to read an error message without panicking.
- Add steps that warn when something fails.
- Build a flow that continues or stops depending on the error.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Error | A fault: something didn't go as we expected. |
| Error message | The notice the tool shows to explain the fault. |
| Retry | Run the step that failed again. |
| Exception | The special case that doesn't meet the usual and makes the flow fail. |
| Log | The history where the steps and errors are recorded. |
| Failure notice | A notification sent when something breaks. |

## 📚 Main lesson
Today we're going to talk about something nobody mentions at the start and everyone meets on their first day: errors. Automations fail. They get things wrong, they break, they stop. And that's not a problem with us: it's part of the life of every machine. What matters isn't that it doesn't fail, but knowing what to do when it does.

Let's think of the kitchen. Even if we follow the recipe to the letter, sometimes the custard curdles, the oven turns off or an ingredient is missing. A good cook doesn't throw away the dishes: they know why it happened and fix it. It's the same with automations. The error is information, not a punishment.

The first skill is reading the error message. Integration tools keep a history or log of every run: who triggered the flow, which steps were done and where it stopped. When something fails, the error message usually states the cause: "empty field", "app not connected", "incorrect data". It's like the doctor's diagnosis: to cure, you first have to know what hurts.

The most common errors are few and quickly learned. One: empty fields, when a piece of data arrives unfilled. Two: disconnected accounts, when the authorisation expired or was revoked. Three: data with a different format, when we expected a number and a text arrives. Four: usage limits, when the free plan runs out.

For every error there's a solution. If the field is empty, we use a condition (level 10) so we don't continue when the data is missing. If the account disconnected, we reconnect it. If the format is different, we review the sheet or the source app. If the limit ran out, we wait until next month or use the flow less.

But the real mastery lies in something else: the flow knowing how to warn when it fails. Instead of failing silently, our automation can send us a message: "the send email step has failed". That way, even if it breaks, we know and fix it. A failure that warns is a half failure.

The tools let us add a special step, sometimes called "error handling", which only runs when something fails. In that step we can send the notice, save the data that failed or stop the flow calmly. It's like having a smoke detector: it doesn't put out the fire, but it warns in time.

We can also decide whether a failure stops everything or is skipped. Sometimes stopping is best: if the payment isn't processed, it shouldn't continue. Other times continuing is best: if the message sending fails, the rest goes on and we review later. Each flow chooses its attitude according to how important each step is.

It's worth reviewing the log from time to time, like someone checking the month's bills. The log tells us what happened in our automation: how many times it ran, when it failed and why. Reading the log is the way to care for the automation, to keep it healthy. It's the hygiene of the trade.

An error that repeats a lot is a sign that the flow is badly designed or that the data source has changed. Let's not cover it with patches: let's look at the cause and fix it at the root. It's like the leak: you fix the roof, you don't put a bucket out every time.

When you test an automation and it fails, breathe: it's the best moment to learn. Every failure you find and understand makes you more the owner of your system. The fear of errors disappears when we know them. And knowing them is exactly what we're doing today.

When you finish this level you'll know how to read an error message, what to do with typical faults and how to set up notices that tell you when something breaks. Your automation is no longer fragile: it's watched over and cared for.

## 💡 Practical examples
1. **The disconnected account.** The club's flow stopped working because Google let the authorisation expire. The failure notice reached the coordinator, who reconnected it in a minute.
2. **The empty row.** A member arrived without an email. The flow's condition (level 10) stopped it before sending, and the log kept the case for a manual review.
3. **The AI limit.** The AI's free plan ran out one month. The flow warned and kept working with the manual summary until the next month.

## 🛠️ Guided activity
Step 1: Open your integration tool and choose a scenario you've already created (for example, the incidents or summaries one).
Step 2: Go into the scenario's log or history (usually the "History" or "Executions" tab). Look at the latest runs.
Step 3: Find a run that failed or make one fail on purpose: disconnect the Telegram account or leave an empty field in the sheet.
Step 4: Read the error message. Write it on your paper and note what you think it means. Check with this level's guide which typical error it is.
Step 5: Fix the error: reconnect the account or fill in the field.
Step 6: Add error handling: look in the scenario's settings for the "Error handling" option.
Step 7: Set up the notice: when it fails, send a Telegram message with the text "Scenario [name] failed: [error message]".
Step 8: Make it fail again and check that the notice arrives.
Step 9: Activate the scenario and get used to reviewing the log once a week.

## ✍️ Self-assessment exercises
1. Is it normal for an automation to fail? a) No, if it's well made it never fails. b) Yes, failing is part of the life of every machine. c) Only the cheap ones.
2. What do we do first when there's an error? a) Delete the scenario. b) Read the error message and look at the log. c) Buy another computer.
3. Which is a typical error? a) An empty field. b) A font change. c) Breakfast time.
4. What does error handling do? a) It prevents everything from failing. b) It runs when something fails, to warn or stop calmly. c) It deletes past errors.
5. What is reviewing the log for? a) To care for the automation and know what happened. b) To fill time. c) So it looks nice.

Answers: 1-b, 2-b, 3-a, 4-b, 5-a.

## ⚖️ Ethical dimension
- A silent failure is dangerous: if an automation processing people's data fails without warning, information is lost. The notice is a responsibility.
- If the flow fails when handling personal data, warn immediately and don't hide it: transparency protects people.
- Don't use error handling to "cover up" a badly designed flow: fix the cause, not just the alert.
- Failure notices should reach the right person, not everyone's inbox.
- In the face of an error that affects money or health, stop the automation and review by hand before continuing.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| Make (error handling) | Warning when a step fails | make.com |
| Zapier (filters and retry) | Setting up retries and continuations | zapier.com |
| UptimeRobot | Watching that your web automations respond | uptimerobot.com (free) |
| Logseq or notes | Keeping an error and fix diary | logseq.com (free) |

## 🧠 Summary and bridge
Errors are part of the trade: they're read, understood and fixed. Error handling warns when something fails and the log tells the flow's story. Your automation is now watched over. In the next level we close the Stem band: we'll build a complete automation that uses conditions, variables, AI and error handling together.
