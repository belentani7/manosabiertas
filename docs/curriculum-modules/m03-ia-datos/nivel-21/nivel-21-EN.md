# Module 3: AI Applied to Data — Level 21
## Language: EN · Difficulty: Canopy
## Estimated time: 3 hours

## 🎯 Level objective
- Organise the data of the final project before analysing it.
- Deepen the data cleaning from Level 11 with data from our own lives.
- Leave the sheet ready so that an AI tool can understand it.
- Write down what is corrected and why, so the result can be trusted.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Clean data | Data without duplicates, gaps or errors that mislead the analysis. |
| Structure | The shape of the table: rows for the cases, columns for the characteristics. |
| Format | The type of each value (number, text, date); it must be the same throughout the column. |
| Header | The first row, which names each column clearly. |
| Duplicate | The same row repeated twice, which counts double if it is not removed. |

## 📚 Main lesson
Welcome back to the Canopy band. In Level 20 we chose the question of our final project and planned it: scope, deliverable and schedule. Today we come down from the map to the ground and roll up our sleeves: it is time to put the data in order. It is like before cooking a big meal for the family: first you clean and organise the kitchen, and only then do you turn on the stove.

The data for our project can come from many sources. From household receipts and bills, from a survey of the neighbours, from the open data we learned to download in Level 14. Whatever their origin, they almost never arrive perfect. They carry repetitions, gaps and typing mistakes. Our job today is precisely that: to tidy the house before inviting the AI in.

Let us remember the golden rule from Level 11: dirty data deceives. If a sheet has repeated rows, a purchase can be counted twice. If cells are missing, the totals come out wrong. If one expense appears as a number and another as text, they cannot be added up. Every small error becomes a big error when the machine multiplies it. That is why professionals say: garbage in, garbage out.

First, the structure. A good table is like an organised wardrobe: everything in its place. Each row is one case: a purchase, a person, a month. Each column is one characteristic of that case: date, amount, description. If we mix different things in the same row, the sheet becomes unreadable for us and also for the AI. Structure before analysing.

Second, the header. The first row must say what is in each column: "date", "amount", "description", "category". Without a header, neither a human nor a machine knows what each number means. The header is the label on the jar: without it, we do not know what it contains. Take time to name the columns well; it is time well spent.

Third, the format. Numbers must be numbers, dates must be dates and text must be text. A "05/03" can be read as 5 March or 3 May depending on the country; the AI does not guess. In Google Sheets you can set the format of each column with "Format" and "Number". When the whole column speaks the same language, formulas and questions to the AI work.

Fourth, the five classic problems we already know from Level 11: duplicates, missing values, typing errors, mixed formats and impossible values. A duplicate is removed with "Data" and "Remove duplicates". A missing value is filled in or clearly marked. An impossible value, like an expense of a billion euros or an age of 400 years, is checked and corrected. Every problem has its remedy.

The good news is that today's tools help us clean. The spreadsheet itself has validation tools: it can warn when a value does not fit. And the AI also helps here: we can upload our table to a chat and ask "do you see any errors or strange data in this table?". The AI finds patterns that a tired eye misses. But remember the judgement from Level 19: the machine's answer is reviewed, not copied.

And why so much care with the data of our own project? Because what is analysed with AI is worth what the data it receives is worth. A clean table is like giving the AI a clear errand: it understands the question, understands the table and answers better. A dirty table is like asking for a dish without washing the ingredients: the result, however pretty it looks, cannot be eaten.

This order also works away from the screen. Organising your NIE papers, your SEPE files or your bank documents in clear folders, with names and dates, is the same discipline as cleaning a spreadsheet. An immigrant who keeps their papers in order settles procedures in minutes what takes others hours. Order in data and in papers is a practical and very valuable superpower.

In Level 22 the sweet moment will come: asking the AI about our data without programming a single line. But that conversation will only bear good fruit if today we leave the table set. Spend this level leaving your sheet clean, clear and honest. The Canopy is built on foundations that are not seen, and today we are laying them.

## 💡 Practical examples
### Example 1: Rosa's budget
Rosa wrote a month of shopping in a sheet. She finds two repeated rows (the same receipt written twice), a gap where she did not write the price of the bread, and a cell with "25.5,60" that cannot be added up. She fixes the three problems and her monthly total changes: now it is real.

### Example 2: Juan's members list
Juan keeps the list of members of his association. One member appears twice with the phone written differently ("612 34 56" and "6123456"), and another one has no name. He unifies the formats, removes the duplicate and marks the gap. The list is ready for the meeting.

### Example 3: Carmen's neighbourhood survey
Carmen downloaded a CSV of open data (Level 14) about housing in the neighbourhood. While reviewing it she finds ages of 180 years and neighbourhoods written in three different ways. She fixes the impossible values and unifies the names. Her final chart no longer lies.

## 🛠️ Guided activity
Step 1. Open the sheet of your final project from Level 20, or create a new one called "My data".
Step 2. Organise the structure: one column per characteristic and one row per case.
Step 3. Check the header: does the first row name each column clearly?
Step 4. Set the format of each column (number, date, text) in Google Sheets.
Step 5. Use "Remove duplicates" and write down how many there were.
Step 6. Look for gaps and impossible values; correct them or mark them clearly.
Step 7. Upload the table to an AI chat and ask: "do you see any errors in this table?". Review the answers.
Step 8. Save the clean version as "My clean data" and write down what problems you found and how you fixed them.

## ✍️ Self-assessment exercises
1. What is a good header? a) A row with colours. b) The first row that names each column clearly. c) A title in capital letters.
2. Why does format matter? a) Because it looks nice. b) Because numbers, dates and texts must be consistent in order to analyse well. c) It does not matter at all.
3. What is a duplicate and why must it be removed? a) A repeated row that counts double and deceives. b) A missing value. c) An impossible value.
4. An "impossible value" is... a) A very expensive value. b) A value that cannot be true, like an age of 400 years. c) A very large number.
5. What is done first in a data project? a) Visualise. b) Clean and organise the data before analysing. c) Ask the AI.

Answers: 1-b, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Ethical dimension
- Cleaning is not touching up: we fix real errors, we do not change data so that it says what we want.
- Honesty with gaps: if a value is missing, say so and mark it; do not invent one to fill the space.
- Care with other people's data: if the table has other people's data, it is not shared without permission.
- Document the cleaning: writing down what was changed and why lets others trust the result.
- A clean table is a gift for whoever uses it later: the transparency from Level 19 is practised here too.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | Remove duplicates, sort, validate and clean the table | https://sheets.google.com |
| LibreOffice Calc | Free spreadsheet, no account required | https://www.libreoffice.org |
| OpenRefine | Advanced data cleaning, free and open source | https://openrefine.org |
| Gemini | Ask it to review the table and spot errors | https://gemini.google.com |

## 🧠 Summary and bridge
- A clear header, an organised structure and a consistent format are the base of a clean table.
- The five classic problems: duplicates, missing values, typing errors, mixed formats and impossible values.
- The AI also helps clean, but its answers are reviewed (the judgement from Level 19).
- Clean data is the condition for the AI to understand our project.
In Level 22 we will learn to ask questions to our data with AI, without programming a single line.
