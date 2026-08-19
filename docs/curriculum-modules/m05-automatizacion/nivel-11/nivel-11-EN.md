# Module 5: Automation and Integration — Level 11
## Language: EN · Difficulty: Stem
## Estimated time: 2 hours

## 🎯 Level objective
- Understand what a variable is using metaphors from the physical world.
- Recognise the data that changes inside a flow.
- Store and reuse a piece of data throughout the automation.
- Use text and number variables in an automation.
- Put together a flow that combines conditions and variables.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Variable | A "box" with a name where a changing piece of data is stored. |
| Value | The data inside the box at that moment. |
| Variable name | The box's label, so we know what it contains. |
| Text | A value made of letters, numbers and symbols, like a name. |
| Number | A value that can be added, subtracted or compared. |
| Store | Leave a value in the variable to use it later. |

## 📚 Main lesson
In the previous level we learned if-then logic. Today we add another fundamental piece: variables. The word sounds technical, but variables are something we use our whole lives. A variable is a box with a name that stores a piece of data, and that data can change. It's that simple.

Let's think of the pantry at home. The sugar box has a label that says "sugar". What's inside changes: today it's full, tomorrow half, the day after empty. But the label stays the same. It's the same with variables: the name doesn't change, the value does. The variable "sugar" can hold 2 kilos today and 1 tomorrow.

In an automation, data travels through the flow like ingredients through the kitchen. When a new row from the sheet arrives, it brings data: the member's name, the amount, the date. That data can be stored in variables with clear names: "name", "amount", "date". From then on, the flow can use them in any step.

Why are variables so useful? Because they allow reuse. Without variables, each step would have to look the data up again. With variables, we store the data once and use it in the email, the message and the condition. It's like writing the phone number once in the address book and always calling from there.

In integration tools, variables appear almost on their own. When we choose a field from the sheet to put in a message, we're using a variable, even if the tool doesn't use that word. The variable's name is the column's name: "Name", "Amount". The box is the column; the value is what's in that row.

Variables can be of different types, just as the pantry has boxes of different things. Two types matter to us a lot: text and number. Text is letters and words: a name, a message, an address. Number is quantities: amounts, counts, temperatures. Numbers can be added; text cannot.

That difference is important. We can do "the total is the price plus shipping" if both are numbers. We can't add two names. Knowing each variable's type avoids strange errors. It's like not putting salt in the coffee: each thing goes with its type.

Variables also let us build long messages. Instead of writing the whole message by hand, we assemble it from pieces: "Hello [name], your order of [item] for [amount] euros is ready". Each square bracket is a variable filled with the value of each row. The same message works for a hundred different orders.

The combination of variables and conditions is very powerful. The condition can ask about a variable's value: "if the amount is greater than 50". And the condition's result can lead to actions that use that same variable: "the email says: you've exceeded 50 euros". The variable is the information; the condition, the question; the actions, the answer.

A pro tip: give clear names to your variables. "Amount" is clear; "x" or "data3" isn't. When we review the automation in a month's time, we'll be grateful to read "amount" and not have to decode "data3". Good names are the order of the digital kitchen.

Another tip: don't store data in variables you won't use. Every variable we add is one more piece to maintain. We store what's necessary and little more. Less is more in variables too.

When you finish this level you'll understand that variables are the boxes that carry data through the flow, that they have a name and a value, and that they can be text or number. With conditions and variables, the automation can already read, decide and build messages. In the next level we'll make it even smarter: we'll teach it to think with artificial intelligence.

## 💡 Practical examples
1. **The order message.** The flow stores the name, item and amount of each row, and assembles the message: "Hello Marta, your order of 3 kilos of tomatoes for 9 euros is ready".
2. **The expense notice.** If the "amount" variable is greater than 50, the flow sends the approval notice to the treasurer with the value included.
3. **The birthday list.** The flow stores names and birthdays, and every month builds a message with those who have birthdays that month.

## 🛠️ Guided activity
Step 1: Open your integration tool and create a new scenario called "Club orders" (or your topic).
Step 2: Create a sheet in Google Sheets with the columns: Name, Item, Amount. Fill in two test rows.
Step 3: Add the trigger: the "Watch rows" event from Google Sheets with your sheet.
Step 4: Add a message action (Telegram). In the text, type "Hello " and press to insert the "Name" variable; type " your " and insert "Item"; type " for " and insert "Amount"; finish with " euros". Look at how the text is assembled.
Step 5: Add a condition step: if "Amount" is greater than 50, then send a notice to the treasurer (another action); if not, do nothing extra.
Step 6: In the treasurer notice, use the Name and Amount variables again so the message says "Approval: [name], [amount] euros".
Step 7: Test the flow with your two rows: one with an amount below 50 and one above. Notice that the first message always arrives and the treasurer's only when it should.
Step 8: Write on your paper a list of your flow's variables, with their name, type (text or number) and what they're for.
Step 9: Activate the scenario and delete the test rows.

## ✍️ Self-assessment exercises
1. What is a variable? a) A box with a name that stores a changing piece of data. b) A phone button. c) A type of spreadsheet.
2. What does every variable have? a) Only a value. b) Only a name. c) A name and a value.
3. Which type of variable can be added? a) Text. b) Number. c) Both.
4. What are good variable names for? a) So the automation looks nice. b) To know what each box contains when reviewing it. c) To save space.
5. Can the same variable be used in several steps? a) No, once used it's deleted. b) Yes, it's stored and reused. c) Only twice.

Answers: 1-a, 2-c, 3-b, 4-b, 5-b.

## ⚖️ Ethical dimension
- Variables can contain personal data: treat the value as you would treat the original paper, with respect and care.
- Don't put passwords, account numbers or medical data in variables that travel to messages or emails.
- Name variables honestly: a misleading name can lead to using data with bad judgement.
- If the variable comes from data provided by people, check that it's true before using it to decide.
- Review from time to time which variables you store: delete the ones you no longer use and the data you don't need.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| Make (variables and modules) | Storing and reusing data | make.com |
| Zapier (data tokens) | Inserting variables in actions | zapier.com |
| Google Sheets | Practising with columns as variables | sheets.google.com |
| LibreOffice Calc | Free spreadsheets | libreoffice.org (free) |

## 🧠 Summary and bridge
Variables are boxes with a name and a value that carry data through the flow. They can be text or number, they're stored once and reused in conditions, messages and emails. With conditions and variables, the automation reads and decides. In the next level we'll integrate artificial intelligence into the flows: the machine will read, summarise and generate texts.
