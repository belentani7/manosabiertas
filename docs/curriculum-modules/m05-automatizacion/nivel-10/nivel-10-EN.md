# Module 5: Automation and Integration — Level 10
## Language: EN · Difficulty: Stem
## Estimated time: 2 hours

## 🎯 Level objective
- Understand in depth the if-then logic that drives all automation.
- Recognise conditions as "paths" the flow chooses.
- Create a filter or condition in your integration tool.
- Understand what "if not" means (the alternative branch).
- Apply the logic to a real task with several possibilities.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Condition | The question the flow asks itself: "is this met?". |
| If-then | The logical structure: "if the condition is met, then do this". |
| If not | The alternative: "if it isn't met, do this other thing". |
| Branch | Each path the flow takes according to the condition. |
| True/False | The answer to the condition: it's met or it isn't. |
| Operator | The word that compares: "greater than", "equal to", "contains". |

## 📚 Main lesson
Today we climb to the first level of the Stem band, where automation becomes smarter. Until now the flows always did the same thing: if a piece of data arrived, they acted. But real life isn't that simple: sometimes you have to decide. If-then logic is exactly the way to teach the machine to decide.

Let's imagine the kitchen when we cook for the family. If the kids are coming to eat, we make more; if not, less. If it's cold, soup; if not, salad. Our head makes those decisions without thinking. In automation, those decisions are written as conditions: "if this happens, do one thing; if not, do the other".

The structure is very simple and can be written like this: "IF the condition is met, THEN do A; IF NOT, do B". It's like a fork in the road: depending on what we see, we turn right or left. The flow arrives at the fork, asks the question, and takes one path or the other.

In integration tools, that fork is called a filter, condition or router. The flow asks something about the data it carries: "is the email empty?", "is the amount greater than 100?", "does the message contain the word urgent?". The answer is always true or false: yes or no. There are no middle terms.

Each answer opens a branch. If it's true, the flow goes down one path and does certain actions. If it's false, it goes down the other. It's like watering the garden: if it rains, we don't water; if it doesn't rain, we water. The condition "did it rain?" decides between two paths.

To write conditions we use operators, which are the words that compare. "Greater than" compares numbers: if the amount is greater than one hundred. "Equal to" compares texts or numbers: if the status is equal to "paid". "Contains" looks for words inside a text: if the message contains "urgent". Each operator is a comparison tool.

Learning to read a condition is like learning to read a traffic sign. The sign says "no entry if you weigh more than 3 tonnes". That's a condition with an operator. Our automation does the same with data: it puts up signs that the data must respect to pass.

A real example: the neighbourhood incidents sheet. If the incident says "urgent", the flow warns the person in charge immediately. If not, it stores it for the weekly meeting. A single condition splits the flow into two paths with two different destinations. That's the intelligence we add to the machine.

Conditions can be chained. After a first question, a second one can come: "is it urgent? If yes, is it from this neighbourhood or another?". Chaining conditions lets you fine-tune a lot, like the doctor who asks questions until reaching the diagnosis. Each question discards paths.

We must watch out for a typical error: writing conditions that are too complicated. A condition that joins many questions at once is hard to review and fix. Better several simple chained conditions than one complicated one. It's like splitting a long task into short steps: it's better understood and fixed.

Another good habit: the flow should never be left without an answer. If no condition is met, what does it do? It's worth having an "if not" branch that catches what doesn't fit. It's like the "miscellaneous" drawer at home: everything that has no proper place goes there, and nothing gets lost.

When you finish this level you'll know how to read and write conditions, and you'll understand that automation doesn't only repeat: it decides. That's the leap of the Stem band. In the next level we'll learn variables: the data that changes and that the machine can store, compare and use.

## 💡 Practical examples
1. **The neighbourhood incidents.** If the incident carries the "urgent" label, the flow warns the person in charge right away; if not, it leaves it for the weekly report.
2. **The club budget.** If a purchase's expense exceeds 50 euros, the flow warns the treasurer to approve it; if not, it just records it.
3. **The room booking.** If the room is free, the flow confirms the booking; if not, it sends a message with the available alternative times.

## 🛠️ Guided activity
Step 1: Open your integration tool and create a new scenario named "Neighbourhood incidents" (or whatever topic you prefer).
Step 2: Add the trigger: in Google Sheets, the "Watch rows" event, with a sheet that has the columns: Description, Priority (urgent/normal), Person.
Step 3: Add a condition step: look for "Filter" or "Router". The condition will be: the "Priority" column is equal to "urgent".
Step 4: In the true branch (if it's urgent): add the action of sending a Telegram message with the text "URGENT: [description]".
Step 5: In the false branch (if it's not urgent): add an action that sends an email to your address with the text "New normal incident: [description]".
Step 6: Give names to the branches: "Urgent path" and "Normal path".
Step 7: Test with two rows: one with priority "urgent" and another with "normal". Check that each one takes its path.
Step 8: Add a third condition if you want: for example, that empty incidents do nothing (if the description is empty, stop).
Step 9: Review, activate and delete the test rows.

## ✍️ Self-assessment exercises
1. What structure does if-then logic have? a) "If it's met, then do A; if not, do B". b) "Always do the same thing". c) "Ask another person".
2. What is the answer to a condition? a) True or false. b) It depends on the day. c) Number or letter.
3. What is a branch? a) A tree. b) Each path the flow takes according to the condition. c) A coloured button.
4. What does the operator "contains" do? a) Compares sizes. b) Looks for a word inside a text. c) Deletes data.
5. What should you do with what doesn't fit any condition? a) Leave it out and lose it. b) Catch it in the "if not" branch. c) Delete the condition.

Answers: 1-a, 2-a, 3-b, 4-b, 5-b.

## ⚖️ Ethical dimension
- A badly written condition can discriminate without meaning to: check that your rules don't exclude people by mistake.
- Automatic decisions about people (approvals, sign-ups) must be able to be reviewed by a human.
- Don't use conditions to hide information from someone who has the right to see it.
- If the flow decides for you, make sure the rules are yours and that you understand them.
- A well-designed "if not" prevents people from being left without an answer: make sure no one is left out.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| Make (Router module) | Creating branches and conditions | make.com |
| Zapier (Filters) | Conditions inside zaps | zapier.com |
| Google Sheets (IF) | Practising if-then in a sheet | sheets.google.com |
| Node-RED | Visual open-source logic | nodered.org (free) |

## 🧠 Summary and bridge
If-then logic teaches the machine to decide: if a condition is met, it goes one way; if not, another. We use operators to compare data and branches to separate the paths. We no longer only repeat: we decide. In the next level we'll learn variables, the data that changes and that the flow stores, compares and reuses.
