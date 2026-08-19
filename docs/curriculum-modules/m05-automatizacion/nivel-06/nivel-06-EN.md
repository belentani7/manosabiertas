# Module 5: Automation and Integration — Level 06
## Language: EN · Difficulty: Root
## Estimated time: 3 hours

## 🎯 Level objective
- Build a first real automation between two apps.
- Connect your account in an app to the integration tool.
- Choose a real trigger and action.
- Test the automation with real data.
- Understand what "testing" means in automation and why it is done.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Connecting an account | Authorizing the tool to use an app of yours. |
| Authorization | The permission you give for two programmes to talk to each other. |
| To test | Doing a real trial to see if the automation works. |
| Scenario | The complete automation: trigger, steps and action. |
| Connector | The piece that joins the tool to an app. |
| Data | The information that travels: a name, a date, a message. |

## 📚 Main lesson
In the previous level we created our account and understood the two pieces of every automation: the trigger and the action. Today we are going to build our first real automation, from start to finish. We will join two apps and watch them work together. It is a nice moment, like seeing the first plant we sowed.

We will choose a simple and useful example: a spreadsheet where we jot something down (for example, the club's shopping list) and, every time we add a row, the tool sends a message to another app (for example, the association's messaging group). That is connecting two apps: the sheet and the messages.

The first step is choosing the two apps. One will be the trigger, the one that "wakes up" the automation; the other will be the action, the one that does something. In our example: the spreadsheet triggers and the message acts. There are no fixed rules: either one can be either part.

Before starting, the tool needs to "know" our apps. That is called connecting an account or authorizing. It is like giving the waiter the key to a specific room: only that room, not the whole house. It is done by pressing "Connect account" and logging into the app when it asks.

It's normal to feel a bit wary about giving permissions. Don't worry: in these tools you can remove the connection whenever you want, from the settings. And you can review what permissions you've given. Giving permission is not giving power forever; it is opening a door you can close.

Once the accounts are connected, we choose the trigger. The tool shows us a list of events for each app. We look for ours: "new row", "new message", "new email". We press and the tool asks us to confirm with which of our accounts and on which sheet or folder to work.

Then comes the action. We choose the second app and the event: "send message", "send email", "create file". The tool shows us the fields we can fill in and, most wonderfully, offers us the chance to insert data that comes from the trigger. So the message can say "New purchase: [row name]" without us writing anything.

That possibility of "taking data from one side and putting it in the other" is what makes integration magical. The tool lets us choose, with a click, the data that comes from the sheet and put it inside the message. It is like the waiter who brings the cook's note and copies it into the customer's bill.

Before activating, you test. Testing is doing a simulation: the tool runs the flow with sample data and shows us what came out. If something fails, we see it and fix it without bothering anyone. Testing is free and avoids real errors. Nobody sends a message to the group without testing it first.

When the test goes well, you activate the automation. From then on, whenever we add a new row to the sheet, the message will be sent automatically. Without pressing anything. It is exciting to see it for the first time: the machine works while we watch.

It's worth being clear that these tools' automations check changes with some frequency: it's not instant like lightning, but like the post, which arrives in minutes. If the test takes a little while to show up, that's normal. Patience is part of the craft.

If something goes wrong, no drama. The error is usually in the permissions, in empty fields or in data written differently. The tool tells us where the problem is and we fix it. Every error we fix teaches us a lesson we don't forget.

When you finish this level you will have your first automation working: two apps joined, working together. It is the foundation of everything to come. If today you connected a sheet with a message, tomorrow you will connect bigger things.

## 💡 Practical examples
1. **The club list.** Each new purchase noted in the club sheet sends a message to the association group with the amount and the item.
2. **The contact form.** When someone fills in the association's online form, their data saves itself in the sheet and the coordinator is notified.
3. **The payment notice.** When the treasurer marks a fee as paid in the sheet, the member automatically receives a thank-you email.

## 🛠️ Guided activity
Step 1: Open Make (or Zapier) in the browser and log into your account.
Step 2: Press the "Create scenario" button (Make) or "Create from scratch" (Zapier).
Step 3: Add the trigger: look for the "Google Sheets" app and choose the "Watch rows" or "New spreadsheet row" event.
Step 4: Press "Connect" and authorize your Google account: the Google window will appear, press "Allow" or "Continue".
Step 5: Choose the spreadsheet and the tab you will use (you can create a test sheet with one row: name, item, amount).
Step 6: Add the action: look for the messaging app you have (for example, "Telegram" or "WhatsApp Business") and choose "Send message".
Step 7: In the message field, write something like "New purchase:" and press to add the data from the sheet (the row name). The tool will insert it.
Step 8: Press "Test" or "Run". Look at the result: a message with your test data should appear.
Step 9: If it works, activate the scenario with the switch. Add a new row to the sheet and wait: the message will arrive on its own. If something fails, read the error notice and fix the fields.

## ✍️ Self-assessment exercises
1. What is connecting an account? a) Giving the tool permission to use an app of yours. b) Buying another account. c) Deleting the app.
2. What is the order of the flow? a) Action and then trigger. b) Trigger and then action. c) It doesn't matter.
3. Why do you test before activating? a) Because it's required by law. b) To see if it works without bothering anyone. c) To use up data.
4. Does an automation send the message instantly? a) Yes, always. b) No, it can take a few minutes, like the post. c) Only at night.
5. If an automation fails, what do I do? a) Throw the computer away. b) Read the error notice, fix the fields and test again. c) Ignore it.

Answers: 1-a, 2-b, 3-b, 4-b, 5-b.

## ⚖️ Ethical dimension
- Always review what permissions you give and to which accounts. Remove access when you stop using an automation.
- Don't connect accounts that hold other people's personal data (health, money) without a clear reason.
- If your automation sends messages to a group, warn the group first and check the content.
- Don't test automations that send real emails or messages to strangers: use test addresses or chats.
- The automations you create are yours: be responsible for what they do and the data they move.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| Google Sheets | The spreadsheet where you'll put your data | sheets.google.com (free) |
| Make | Creating and testing your scenarios | make.com |
| Zapier | Alternative with many templates | zapier.com |
| Telegram | Messaging app for receiving notices | telegram.org (free) |

## 🧠 Summary and bridge
We built our first real automation: a trigger in a sheet that triggers an action in another app. We connected accounts, chose events, tested and activated. That is the method we will always use. In the next level we will learn to create automatic notifications, notices that arrive on their own when something important happens.
