# Module 3: AI Applied to Data — Level 06
## Language: EN · Difficulty: Root
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what a pivot table is and what problem it solves.
- Create a pivot table in Google Sheets from the expenses table.
- Group data by category and see totals per group without writing formulas.
- Change rows and columns to answer different questions with one click.
- Know how to read a pivot table, like reading a restaurant menu.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Pivot table | An automatic summary of a table: it groups data and calculates totals by category. |
| Row (of the summary) | How the summary is spread out, for example one row per category. |
| Column (of the summary) | An extra grouping, to cross categories. |
| Value | The number calculated in the summary: total, average, count. |
| Slicer | A filter with buttons that shows only part of the data. |

## 📚 Main lesson
Imagine you have a huge box of family photos. Taking them out one by one and counting them is a chore. But if you sort them by year and by person, you suddenly know how many photos there are of each person and each year. The pivot table does exactly that with your data: it takes a long table and summarises it by category, calculating totals with one click. It is like having an assistant who sorts the photo box for you.

In the previous level we saw formulas for adding up a column. But what if we want to know how much we spend on each category: fruit, bread, cleaning? With formulas we would have to write a SUM for each category, and making mistakes is easy. The pivot table does it by itself: it takes the "category" column, groups it and adds up the prices of each group. A whole table summarised in seconds, without a single formula.

Let us build one with our "My week's expenses" sheet. The process is always the same and is learned once and for all. First, we select the whole table (with the header). Then, in the "Insert" menu, we choose "Pivot table". The sheet asks where to put it: we choose a new sheet. And a screen appears with boxes we can tick or drag: "rows", "columns", "values" and "filters".

The idea is simple: you decide where to put each part of the table. If you drag "category" to "rows" and "price" to "values", the sheet groups the products by category and adds up the prices of each one. Result: a small table saying "fruit: 12 euros, bread: 5 euros, cleaning: 8 euros". That, which by hand would take several minutes and many sums, the pivot table does in an instant.

And what are the "columns" and "filters" for? The columns cross another category: if we put "category" in rows and "month" in columns, we see a grid with categories in the rows, months in the columns, and the totals at each intersection. It is like a supermarket grid comparing sales by category and by month. The filters (or slicers) are for showing only part: for example, only the pharmacy purchases.

A new concept: the "value" does not have to be a sum. In the "values" box we can choose whether we want the total, the average, the maximum or the count (how many rows there are). It is like asking the summary which number we want: how much did I spend (sum)? Which is the most expensive purchase (maximum)? How many times did I buy bread (count)? The same pivot table answers different questions depending on the value chosen.

The pivot table is a small leap in power. With basic spreadsheets, you looked at the data one by one. With the pivot table, you look at the data from above, like a map: you no longer see each purchase, you see the patterns. Seeing data "from above" is exactly what AI will do later, but with far more advanced techniques. The pivot table is your first "bird's-eye view" tool.

Let us read a pivot table the way you read a restaurant menu. The menu has sections (starters, mains, desserts) and prices. Our pivot table has categories (in rows) and values (sums). You look at the category, look at the number and compare it with the others. Which is the most expensive category? Which is the cheapest? With a well-made pivot table, those questions are answered in two seconds.

A common mistake is forgetting that the pivot table needs updating. If you add new rows to the original table, the summary does not include them until it is refreshed. In Google Sheets, you have to go back to the pivot table and update it (sometimes with the right-click menu or the menu). Remember: the pivot table is a snapshot of the moment; if the data change, you have to renew the snapshot.

Another important thing: the pivot table needs clean data. If in the "category" column some cells say "fruit" and others say "Fruit" or "fruits", the table will treat them as different categories and the summary will come out fragmented. That is why, before creating a pivot table, check that the categories are always written the same way. It is like making sure all the photo boxes carry the same labelling.

With the pivot table, the first half of the Root band ends. We already know how to: write data, sort it, classify it, draw it and summarise it. In the next level we will go deeper into visualisation, with polished bars, lines and pie charts, and we will learn to read them critically. The pivot table and the charts are the two great summaries that prepare us for statistics.

## 💡 Practical examples
### Example 1: Spending by category
In your expenses table, create a pivot table with "category" in rows and "price" (sum) in values. You will know how much you spend on fruit, bread and cleaning, without a single formula.

### Example 2: Purchases by month
If your table has a "month" column, put "category" in rows and "month" in columns. You will see the grid of spending by category and by month, ideal for spotting expensive months.

### Example 3: How many times I buy each thing
Change the "price" value to "count". The table will say how many times you bought bread or fruit this week. That reveals buying habits.

## 🛠️ Guided activity
Step 1. Open the "My week's expenses" sheet in Google Sheets.
Step 2. Make sure the "category" column exists and is filled in every row (fruit, bread, cleaning, pharmacy).
Step 3. Select the whole table with the mouse, from the header to the last row.
Step 4. In the "Insert" menu, choose "Pivot table".
Step 5. In the window that appears, tick "New sheet" and press "Create".
Step 6. On the right you will see the pivot table editor, with "Rows", "Columns", "Values" and "Filters" areas.
Step 7. Under "Rows", press "Add" and choose "category".
Step 8. Under "Values", press "Add" and choose "price". By default "SUM of price" will appear.
Step 9. Look at the sheet: you will see a summary table by category with its totals. Compare: which category spends the most?
Step 10. Under "Values", change "SUM" to "AVERAGE" in the dropdown and watch the summary change. Also try "MAX" and "COUNT". The same pivot table, different answers.

## ✍️ Self-assessment exercises
1. What problem does a pivot table solve?
2. What do you put in "Rows" and in "Values" to add up spending by category?
3. What are "Columns" for in a pivot table?
4. What happens if you add new data to the original table but do not update the pivot table?
5. Why do you need to write categories always the same way (not "fruit" and "Fruit" together)?

Answers: 1. It summarises a long table by category and calculates totals without writing formulas. 2. In "Rows", "category"; in "Values", "price" with the SUM operation. 3. They cross another category, creating a grid (for example, category by month). 4. The summary does not include the new data until it is updated/refreshed. 5. Because the table would treat "fruit" and "Fruit" as different categories and the summary would come out fragmented.

## ⚖️ Ethical dimension
Summarising data by category is powerful, but it can also over-simplify. A "family" category can hide huge differences between people. When someone presents you with a summary by groups (for example, "people over 40 buy X"), ask yourself who is inside that group and what is lost by grouping them. Summaries are useful, but they must not erase the diversity of real people.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | Free pivot tables in the browser | https://sheets.google.com |
| LibreOffice Calc | Pivot tables offline | https://www.libreoffice.org |
| Google's official pivot table tutorial | Step-by-step guide from Google | https://support.google.com/docs/answer/1272900 |

## 🧠 Summary and bridge
- The pivot table summarises a table by category with one click.
- "Rows" spreads the summary, "Values" says which number is calculated.
- "Columns" cross categories and filters show only part.
- The pivot table must be updated and needs well-written categories.
In the next level we will polish visualisation: bars, lines and pie charts in detail, and we will learn to read them critically so that charts tell honest stories.
