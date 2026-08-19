# Module 5: Automation and Integration — Level 09
## Language: EN · Difficulty: Root
## Estimated time: 3 hours

## 🎯 Level objective
- Review everything we learned in the Root band: connecting, notifying and adapting templates.
- Set up a complete automation that joins several pieces into one.
- Order the steps of an automation like a recipe.
- Review and debug a scenario with several steps.
- Celebrate your first own integrated project.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Integrated project | An automation that joins several apps and steps. |
| Debug | Find and fix the faults in the automation. |
| Step | Each piece of the scenario: trigger, filter, action. |
| Chain | The order in which the steps are chained. |
| Connector | The piece that joins the tool to each app. |
| Final review | The complete check before considering the work done. |

## 📚 Main lesson
We've reached the end of the Root band. In these five levels we learned to create an account in an integration tool, to connect two apps, to set up automatic notices and to use templates. Today we're going to put it all together in a single complete project, like someone cooking a full three-course menu for the first time.

A complete automation usually has more than two steps. Not just "if this happens, then do this", but a chain: first a trigger, then maybe a filter, then a first action, then a second. Each step is a link, and all together they form the automation chain.

Let's go back to the cooking metaphor. A menu isn't a single dish: it's starter, main course and dessert, served in order. The complete automation is the same: each step leans on the previous one and prepares the next. If the starter doesn't go well, the whole menu is delayed. That's why order matters so much.

Let's imagine a real project for an association: when a new member arrives. Step 1, the trigger: a new row in the members sheet. Step 2, a filter: only if the row is complete (has name and email). Step 3, the action: send the welcome email. Step 4, another action: send the notice to the Telegram group. That's a real integrated project.

The golden rule of projects: first you build, then you test step by step, and only at the end do you activate. Testing step by step is like tasting the salt of each dish while cooking: if we wait until the end to taste, we won't know which dish went wrong. The tool lets us test each step separately.

When a step fails, debugging is simple: we read the error message, look at what it says and fix it. The most common errors are three: an empty field, an unconnected account, and a piece of data written with another name. With practice, you spot them at once. It's like the plumber who listens to the pipe and knows where the problem is.

Another valuable habit: naming the steps well. The tool lets you put names on each part ("Receive new member", "Check data", "Send welcome"). A good name tells us what each piece does without opening it. It's like labelling the jars in the pantry: we find what we're looking for instantly.

It's also worth thinking about the unexpected. What happens if a row arrives without an email? And if the messaging app is down? A good automation foresees those situations: if the data is missing, the flow stops and warns. We'll learn more about error handling in the Stem band, but we can already prepare it.

The moment of the final review arrives. Before activating, we go through the full list: are all the accounts connected? Do the fields have the right data? Did we test each step? Are the names clear? That checklist is the safety net of the trade. The final review is what separates good work from careless work.

When everything is reviewed, we activate and test for real, with real data. And there's the satisfaction: seeing the whole chain working on its own, from the first step to the last. It's the moment we understand why this module is called "Automation and Integration".

When you finish this level, we close the Root band with a complete project of your own. The next levels will go deeper: we'll learn the logic of conditions, variables and error handling. We climb a step, but no longer from scratch: from the experience we've gained.

## 💡 Practical examples
1. **Signing up club members.** A new row with name and email triggers the welcome email and, at the same time, a notice to the committee group.
2. **The workshop incident.** When an urgent incident is logged, the flow creates a document, warns the person in charge and puts it in the calendar.
3. **The market purchase.** A new row in the shopping sheet triggers the notice to the community purchase group with the item and the assigned delivery person.

## 🛠️ Guided activity
Step 1: Open your tool and create a new scenario. Give it a name: "Member signup" (or whatever topic you choose).
Step 2: Add the trigger: in Google Sheets, the "Watch rows" event, with your members sheet (create one with the columns Name, Email, Phone).
Step 3: Add a filter or condition step: only continue if the "Email" field is not empty. Find it in the steps as "Filter" or "Router".
Step 4: Add the first action: a welcome email (search "Gmail", choose "Send email"). In "To", put the data from the row; write a short subject and text.
Step 5: Add the second action: a Telegram message (search "Telegram", choose "Send message") with the member's name.
Step 6: Give each step a name: "Receive member", "Check email", "Send welcome", "Warn the group".
Step 7: Test step by step with an example piece of data (you can create a test row with fake name, email and phone).
Step 8: Do the final review: connected accounts, correct fields, tested steps.
Step 9: Activate the scenario, create a real row (a test member) and watch the whole chain complete. Then delete the test data.
Step 10: Save the scenario and write on your paper what you learned: which step was hardest and what error you found.

## ✍️ Self-assessment exercises
1. What is an integrated project? a) An automation that joins several apps and steps. b) A single button. c) A computer folder.
2. In what order is a project worked on? a) Activate, build and test. b) Build, test step by step and activate. c) Test, delete and forget.
3. If a step fails, what do I do? a) Activate anyway. b) Read the error message and fix the step. c) Restart the phone.
4. Why do we give names to steps? a) Because the tool demands it. b) To know what each piece does without opening it. c) So it looks nice.
5. What is the final review? a) The complete check before activating. b) A look through the email. c) A quick read.

Answers: 1-a, 2-b, 3-b, 4-b, 5-a.

## ⚖️ Ethical dimension
- An integrated project that touches people's data (members, clients, health) demands care: don't copy sensitive data without need.
- If your automation sends real emails or messages, the content must be clear and honest. Nobody deserves a confusing or misleading message.
- Tell the people affected that the automation exists: transparency builds trust.
- Don't leave test data in real sheets: delete the fake rows so you don't dirty the real data.
- An error caught in the review is a success, not a failure: that's why you review before activating.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| Make | Building projects with several steps | make.com |
| Zapier | Projects with multiple steps and apps | zapier.com |
| Google Sheets | The sheet where the data lives | sheets.google.com (free) |
| Gmail | Sending emails from the flow | mail.google.com (free) |
| Telegram | Receiving notices and messages from the flow | telegram.org (free) |

## 🧠 Summary and bridge
An integrated project joins trigger, filter and several actions in an ordered chain. You build it, test it step by step and review it before activating. We close the Root band with your first complete project working. In the next level we start the Stem band: the logic of automation, if-then conditions and the paths the flow chooses according to the data.
