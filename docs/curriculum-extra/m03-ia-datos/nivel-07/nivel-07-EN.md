# Module 3: AI Applied to Data — Level 07
## Language: EN · Difficulty: Root
## Estimated time: 3 hours

## 🎯 Level objective
- Master the bar chart, the most used of all.
- Learn to read bars by comparing heights accurately.
- Create vertical and horizontal bar charts as appropriate.
- Discover the visual tricks that make a chart lie.
- Decide when the bar chart is the best option.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Column chart | Vertical bars, standing up. They are compared from left to right. |
| Bar chart | Horizontal bars, lying down. They are compared from top to bottom. |
| Scale | The values that mark the axis, like the marks on a ruler. |
| Baseline | The starting point of the axis, usually zero. |
| Label | The text identifying each bar or each axis. |

## 📚 Main lesson
Of all charts, the bar chart is the king. It appears on the evening news, in bank reports, in phone news feeds and on town hall posters. And there is a reason: the human eye compares heights in a very fast and precise way. When two bars are side by side, our brain instantly says which one is taller. The bar chart makes the most of that natural ability.

There are two versions of the same chart. The column chart has vertical bars, standing up; it is ideal when there are few categories and short names. The bar chart has horizontal bars, lying down; it is better when there are many categories or long names. Think of a restaurant menu: the dishes are long names, which is why lists go from top to bottom. With long names, horizontal bars.

What question does the bar chart answer? "How much of each thing is there?" and "what is more and what is less?". Spending by category, sales by shop, people by city, marks by subject. Whenever there are categories to compare, bars work. It is not good, however, for showing changes over time with many points (that is the line, level 8) or parts of a whole (that is the pie, also level 8).

Reading a bar chart correctly is a process of three looks. First look: the axis titles. What does the horizontal axis measure and what does the vertical measure? Second look: the scale of the value axis. Does it start at zero or another number? Third look: the relative heights. Which is the tallest bar and which is the shortest? With those three looks, you have understood the chart without anyone explaining it to you.

Here comes the most important moment of this level: the baseline trick. An honest chart starts its scale at zero. If the axis starts at zero, a bar twice as tall means a value twice as big. But if someone "cuts" the axis and makes it start at 40, a small difference from 45 to 50 will look like a mountain. It is the favourite trick of misleading charts. Always look at where the axis starts.

An everyday example: the bank sends you a brochure with a chart of your savings. The bars go up and up; it looks like your money is growing enormously. But if you look at the scale, the axis starts at 4,500 euros, not zero. The real rise is small; the chart made it look huge. Now you know to look at the scale before getting excited. That critical look is worth money.

When you create your own bars, follow three honesty rules. First, let the axis start at zero (Google Sheets does this by default; do not change it without a reason). Second, put clear labels: each bar with its name and the axis with its unit (euros, kilos, people). Third, do not use decorative effects that distract: three dimensions, shadows or loud colours do not add information; they remove it.

In Google Sheets, creating a column chart takes three clicks, as we saw in level 4. Select the data with the header, click "Insert" and "Chart", and in the panel choose "Column chart". If you want horizontal bars, choose "Bar chart" in the same panel. Switching between vertical and horizontal is one click: try both and keep the one that reads better.

How do you choose between columns and bars? If there are few categories (fewer than eight) and short names, columns. If there are many or the names are long, horizontal bars. Think of bookshelves: books with wide spines read better lying down. The same happens with your chart labels: if they do not fit standing up, put them horizontally.

Another detail: do not overdo the bars. If you have fifty categories, fifty bars are a comb, not a chart. Better to group the small ones into "others" or choose another chart. A chart must fit in one glance; if it forces you to make an effort, it is not doing its job. Simplicity is the elegance of data.

In this module, bars are our comparison tool. With the pivot table from level 6 we summarise, and with the bars of this level we draw the summary. In the next level we will complete the trio of basic charts: the line for changes over time and the pie for parts of a whole. With bar, line and pie we will have the complete visual language for the statistics of level 9.

## 💡 Practical examples
### Example 1: Spending by category in bars
With the pivot table from level 6 (spending by category), create a column chart. At a glance you will see which category dominates your shopping basket.

### Example 2: The week's temperatures
Write down the week's maximum temperatures (Monday to Sunday) and draw columns. The comparison by day jumps out.

### Example 3: Spotting a tricky chart
Search the internet for a bar chart in a news story and look closely at where the value axis starts. If it does not start at zero, the story is exaggerating something. Note down your finding.

## 🛠️ Guided activity
Step 1. Open the "My week's expenses" sheet in Google Sheets.
Step 2. Create a pivot table with "category" in rows and "price" in values (review level 6 if you need to).
Step 3. Next to the pivot table, leave some space and write the header "category" and "total" (or use the pivot table itself as the source).
Step 4. Select the pivot table cells (categories and totals, with header).
Step 5. Click "Insert" and choose "Chart".
Step 6. In the panel on the right, under "Chart type", choose "Column chart".
Step 7. Look at the scale of the vertical axis: it must start at zero. If not, look for it under "Customise" and fix it.
Step 8. Under "Customise", choose a single colour for the bars and turn on data labels so you can see the exact value of each bar.
Step 9. Now change the type to "Bar chart" and look at the horizontal version. Which reads better with your names?
Step 10. Give the chart a clear title, for example "Weekly spending by category". Save and share it with a family member: ask them to tell you what they see. If they understand it, your chart works.

## ✍️ Self-assessment exercises
1. What question does a bar chart answer best?
2. When is it better to use horizontal bars instead of columns?
3. Why is it important that the scale starts at zero?
4. What are the three looks for reading a bar chart?
5. What should you do if you have fifty categories?

Answers: 1. "How much of each thing is there?" and comparing what is bigger and what is smaller. 2. With many categories or long names. 3. Because if the axis is "cut", differences look bigger than they are and the chart lies. 4. Axis titles, the scale of the value axis, and relative heights (which is the tallest and the shortest). 5. Group the small ones into "others" or choose another type of chart.

## ⚖️ Ethical dimension
The bar chart is a double-edged sword. Used well, it clarifies; used badly, it deceives. Adverts, political parties and even official reports have used bars with cut axes to exaggerate results. When creating bars, respect the baseline at zero. When reading bars, always look at the scale before believing. Visual honesty is part of civic honesty: whoever knows how to read bars cannot be manipulated.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | Column and bar charts from any table | https://sheets.google.com |
| LibreOffice Calc | The same charts, offline | https://www.libreoffice.org |
| Datawrapper | Beautiful, honest bars in minutes, free | https://www.datawrapper.de |
| RAWGraphs | Free data visualisation, for exploring | https://www.rawgraphs.io |

## 🧠 Summary and bridge
- The bar chart compares amounts; the eye compares heights in an instant.
- Columns for few categories and short names; horizontal bars for many or long ones.
- The baseline must be at zero; if not, be suspicious.
- Three looks for reading bars: axes, scale and relative heights.
In the next level we will complete the trio of charts: the line for changes over time and the pie for parts of a whole, including their critical reading.
