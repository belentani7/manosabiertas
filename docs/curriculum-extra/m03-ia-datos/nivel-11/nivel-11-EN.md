# Module 3: AI Applied to Data — Level 11
## Language: EN · Difficulty: Stem
## Estimated time: 3 hours

## 🎯 Level objective
- Understand that dirty data (errors, duplicates, gaps) falsifies any analysis.
- Learn to spot the five typical problems: duplicates, missing values, typos, mixed formats and impossible values.
- Clean a real spreadsheet step by step in Google Sheets.
- Verify the cleaning with the spreadsheet's own checking tools.

## 📖 Essential vocabulary
| Term | Plain-language explanation |
|---|---|
| Dirty data | Data with errors, duplicates or gaps that deceive the analysis. |
| Duplicate | The same information repeated twice in the sheet. |
| Missing value | An empty cell where data should be. |
| Impossible value | A figure that cannot be true, like an age of 400 years. |
| Data cleaning | The process of reviewing and correcting data before analysing it. |

## 📚 Main lesson
In the previous level we learned that even the prettiest correlation can be a lie. Today we will look at the most boring and dangerous reason why that happens: dirty data. Statisticians have a saying: "garbage in, garbage out". If the data is wrong, every conclusion drawn from it will be wrong, however pretty the charts are.

What is dirty data? It is any data that does not reflect reality. Imagine your neighbourhood association wants to know how many trees are on the street to ask the council to plant more. It collects data from 50 neighbours: each one writes the number of trees they can see from their window. What could go wrong? Everything. Someone writes "1st" instead of "12"; another writes the same street twice; another forgets to answer; someone writes "lots" instead of a number. That is a dirty sheet.

The most common problems fall into five types. First, duplicates: the same row appears twice, and when you add the trees you count it twice. Second, missing values: empty cells that break the calculations. Third, typos: "12" typed as "12o" or with a decimal comma in the wrong place. Fourth, mixed formats: some dates in European format (12/06/2026) and others in US format (06/12/2026), which mean different months. Fifth, impossible values: an age of 400 years or a temperature of 500 degrees.

Why does this matter in an AI course? Because artificial intelligence feeds on data. An AI trains on the records of thousands of patients to predict diseases; if those records contain typos, the AI learns false patterns and makes serious mistakes. Data scientists spend between 60% and 80% of their time cleaning data, not building the AI. That fact surprises everyone and it is true.

Cleaning is not magic: it is patience. You work in steps. Step one, look at the sheet: open your eyes and walk through it. Step two, remove duplicates: in Google Sheets, "Data", "Data cleanup" and "Remove duplicates". Step three, look for gaps: the "Find and replace" tool (Ctrl+H) lets you locate empty cells if you search for a space. Step four, fix formats: a column must have a single format; if dates are mixed, you must unify them. Step five, remove impossible values: a filter instantly shows the largest and smallest number in each column, and if the maximum is absurd, that row needs checking.

How do you verify the cleaning worked? With three summary measures we already know: the total, the average and the maximum. Before cleaning, a sum with duplicates gives an inflated result. After cleaning, the total changes and moves closer to reality. We can also use the COUNTA function to see how many values each column has: if a column of 50 neighbours only has 47 numbers, we already know there are three gaps.

There is a golden habit that professionals always apply: make a copy of the sheet before cleaning. Never clean on the original. If you make a mistake or want to see what the data looked like before, the copy saves you. In Google Sheets this is very easy: right-click on the sheet name, "Duplicate", done.

Another important habit: write down what changes were made. Professionals keep a column or a separate document with the corrections: "rows 12 and 40 duplicated, removed; cell 33 empty, filled with 0; date in row 20, corrected from US to European format". This is called a "cleaning log" and it lets anyone verify our work. Honesty is also cleanliness.

In the next level we will use this clean data to build our first control panel, called a "dashboard" in English. Remember this: a pretty dashboard with dirty data is like a beautiful house on sand foundations. First you clean the data, then you draw the charts. Cleaning is not a boring step: it is the step that makes everything else work.

## 💡 Practical examples
### Example 1: The tree census
Your association collects 50 responses. When reviewing, you find the row of the lady on the third floor duplicated, cell 33 empty and a neighbour who wrote "1st" instead of "12". Apply the five steps and explain what changes in the total.

### Example 2: Mixed dates
A purchase table has dates in European and US format. The 12 June purchase appears as 12/06 and as 06/12, which in US format is 6 December. If you add up the June sales, that error changes the result.

### Example 3: The impossible value
In a club's age list there is a row with "234". The column maximum exposes the error. With a filter you locate the row and call the member to correct the figure to "34".

## 🛠️ Guided activity
Step 1. Create a sheet in Google Sheets called "Dirty trees" and copy the following data: 12, 7, 12, 5, "1st", 9, (empty), 12, 3, 8.
Step 2. Make a backup: right-click on the sheet name and "Duplicate". Name the copy "Clean trees".
Step 3. In the clean sheet, add with =SUM(A1:A10) and write down the result (it is inflated by the duplicate).
Step 4. Remove duplicates: "Data", "Data cleanup", "Remove duplicates". Check how many rows remain.
Step 5. Locate gaps: "Edit", "Find and replace", search for a space and tick "match cell content".
Step 6. Correct the "1st": change it to "12" by asking the neighbour who wrote it.
Step 7. Look for the impossible value: use "Data" and "Filter" and look at the maximum. Correct whatever is needed.
Step 8. Add up again with =SUM(...) and compare with the result from step 3. What changed and why?
Step 9. Add a column D called "Log" and write down each correction made with its date.
Step 10. Save the sheet and write a conclusion: "clean data, reliable totals".

## ✍️ Self-assessment exercises
1. What does the saying "garbage in, garbage out" mean?
2. Name three of the five typical problems of dirty data.
3. Why do duplicates inflate sums?
4. What must you do before you start cleaning a sheet?
5. What percentage of their time do data scientists spend cleaning data?

Answers: 1. That if the data is wrong, the conclusions will be wrong however pretty the charts are. 2. Duplicates, missing values, typos, mixed formats and impossible values. 3. Because the same row is counted twice. 4. Make a copy of the sheet (never clean on the original). 5. Between 60% and 80% of their time.

## ⚖️ Ethical dimension
Dirty data does not just cause technical errors: it causes harm to people. A medical record with a typo can lead to the wrong treatment; a census with gaps leaves out the neighbours who did not answer. Cleaning data is an act of respect: it means making sure that decisions taken about people are based on true information. And being honest in the cleaning log lets others check and trust our work.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | Cleaning tools: remove duplicates, find, filter | https://sheets.google.com |
| OpenRefine | Free program specialised in cleaning data | https://openrefine.org |
| LibreOffice Calc | The same cleaning functions, no connection needed | https://www.libreoffice.org |
| Open Data Kit | Field data collection with fewer errors | https://getodk.org |

## 🧠 Summary and bridge
- Dirty data falsifies any analysis: garbage in, garbage out.
- The five typical problems: duplicates, missing values, typos, mixed formats and impossible values.
- Always clean on a copy and log each correction.
- Data scientists spend 60-80% of their time cleaning data.
In the next level we will turn the now-clean data into our first control panel or "dashboard".
