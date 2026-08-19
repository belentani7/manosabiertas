# Module 3: AI Applied to Data — Level 12
## Language: EN · Difficulty: Stem
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what a control panel or "dashboard" is and what it is for.
- Get to know two free tools: Looker Studio (by Google) and Power BI (by Microsoft).
- Connect clean data to a dashboard and choose the right chart for each question.
- Build a first simple dashboard with three charts and a title.

## 📖 Essential vocabulary
| Term | Plain-language explanation |
|---|---|
| Dashboard | A page with several charts that answers questions at a glance. |
| Data source | The sheet or file the dashboard takes its numbers from. |
| Control panel | Another name for dashboard, used in business. |
| Panel | Each chart or card inside the dashboard. |
| Refresh | Update the data so the dashboard shows the latest figures. |

## 📚 Main lesson
In the two previous levels we learned to distrust false relationships and to clean data so conclusions are honest. Now for the pretty part: putting several charts on one page that tells the whole story at a glance. That is a dashboard, also called a "control panel" in business.

What does a dashboard do? Imagine you are the chair of a small shopkeepers' association in your neighbourhood. You have data for 12 shops: monthly sales, expenses, days open and new customers. If someone shows you a 500-row sheet, what do you take away? Very little. If someone shows you a dashboard with three charts — sales by month, expenses by shop, and new customers by quarter — in ten seconds you know how the neighbourhood is doing. The dashboard turns data into understanding.

The two most used free tools are Looker Studio (by Google, runs in the browser) and Power BI (by Microsoft, installed on your computer, with a free version). Looker Studio is ideal for starting out because it connects directly to Google Sheets, which we already know. Power BI is more powerful and widely used in companies. This week we will learn with Looker Studio, and the concept applies to both.

A dashboard is built in three steps. First, the data source: you connect the clean Google Sheets sheet we already have. Second, the canvas: a blank page where you place the elements. Third, the panels: you add each chart by choosing its type. The important thing is not the click, but deciding well: what question do I want each chart to answer?

Each chart type answers a different question, and this is the design part to take care of. Bar charts compare categories: "which shop sells the most?". Line charts show change over time: "are sales rising from March to September?". Pie charts (the "pie") divide up a total: "what percentage of spending goes to each item?". The big-number card answers "how much?" with a single figure: 12,450 euros. If you use the wrong chart, the question goes unanswered.

The golden rule of dashboards: less is more. A dashboard with ten charts cannot be read; a dashboard with three or four well-chosen ones can be understood. The designer's discipline is to ask, before adding each chart: "does this picture answer a question someone has asked?". If not, it does not go on the dashboard. The absence of noise is design.

Another important decision: order. A dashboard is read like a newspaper: top to bottom, left to right. At the top, the title and the most important number, the overall summary. In the centre, the two or three charts that tell the main story. At the bottom, the details for those who want to dig deeper. A good dashboard tells a story with a beginning (the summary), a middle (the charts) and an end (the conclusion or detail).

And a technical warning: dashboard data does not update itself. If next week you add data to the sheet, the Looker Studio dashboard still shows the old figures until you press the refresh button. That button is like watering a plant: if you don't water it, the plant (and the dashboard) dries up and stops being useful. Get into the habit of refreshing.

One dashboard capability worth its weight in gold is the filter. In Looker Studio you can add a "date control" or a dropdown list of shops: with one click, the whole dashboard shows only one quarter or only one shop. Filters let you ask many questions with a single dashboard, without drawing anything new. That is what professionals call "exploring the data".

In the next level we enter the AI part proper: we begin with predictive analysis, which uses past data to guess the future. The dashboard you learn to build today will be where that prediction is shown. The dashboard does not predict, but it teaches; AI predicts, but it needs someone (you) to check that its predictions are honest. The two need each other.

## 💡 Practical examples
### Example 1: The neighbourhood of 12 shops
With the monthly sales sheet of 12 shops, a dashboard with three panels answers: card (year total), bars (shop by shop), lines (monthly trend). In ten seconds you know how the neighbourhood is doing.

### Example 2: The gym
A gym records new members and cancellations every month. A dashboard with lines shows both curves: if cancellations outnumber new members, the business is shrinking. The dashboard does not judge, it only shows.

### Example 3: The community garden
A garden logs kilos of tomatoes by plot. The pie chart divides the total: "plot 3 produces 40% of everything". That fact invites the question of why that plot works better.

## 🛠️ Guided activity
Step 1. Open the clean sheet from the previous level (or create one with 12 months of sales and expenses for one shop).
Step 2. Go to https://lookerstudio.google.com and press "Create report".
Step 3. Connect the source: "Google Sheets", select the sheet and "Add".
Step 4. Put a title at the top: "Shop dashboard — 2026".
Step 5. Add a number card: menu "Add a chart", "Scorecard", choose the sales column and the SUM function.
Step 6. Add a bar chart with sales by month: the dimension is the month, the metric the sum of sales.
Step 7. Add a line chart with expenses by month.
Step 8. Add a filter control: "Add a control", "Dropdown list", and choose the "month" field. Try selecting only one month and watch the panels change.
Step 9. Arrange it: number at the top, bars and lines in the centre, control at the bottom.
Step 10. Share the report with the "Share" button (view only) and save the link. Congratulations: you have your first dashboard.

## ✍️ Self-assessment exercises
1. What is a dashboard?
2. Name two free tools for building dashboards.
3. What question does each type answer: bars, lines, pie, number card?
4. What is the golden rule of dashboards?
5. What must you do with new data so the dashboard shows it?

Answers: 1. A page with several charts that answers questions at a glance. 2. Looker Studio (by Google) and Power BI (by Microsoft). 3. Bars: compare categories. Lines: change over time. Pie: divide a total. Card: answer "how much?" with one figure. 4. Less is more: only the chart that answers a real question goes in. 5. Press the refresh button.

## ⚖️ Ethical dimension
A dashboard can be honest or manipulative. It is easy to choose a chart that exaggerates: starting the axis at 100,000 instead of 0 makes a small rise look enormous. You can also hide inconvenient data by leaving it out. The honest dashboard shows the full scale, does not deceive with axes and does not hide what is inconvenient. When you build dashboards, remember that someone will make decisions based on them: that deserves drawing them truthfully.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Looker Studio | Free dashboards connected to Google Sheets | https://lookerstudio.google.com |
| Power BI | Powerful dashboards with a free version | https://powerbi.microsoft.com |
| Google Sheets | Your data source: the clean sheet | https://sheets.google.com |
| Rawgraphs | Unusual and curious charts without coding | https://rawgraphs.io |

## 🧠 Summary and bridge
- A dashboard brings together several charts that answer questions at a glance.
- Looker Studio and Power BI are the most used free tools.
- Each chart type answers a question: bars, lines, pie, card.
- Less is more, and data must be refreshed.
In the next level we enter real AI: predictive analysis, which uses the past to anticipate the future.
