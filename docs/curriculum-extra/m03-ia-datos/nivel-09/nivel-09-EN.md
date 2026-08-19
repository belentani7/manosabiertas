# Module 3: AI Applied to Data — Level 09
## Language: EN · Difficulty: Root
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what statistics is and what it is for in daily life.
- Calculate the mean (average) of a set of numbers.
- Calculate the median (the middle value) without getting confused.
- Identify the mode (the value that appears most often).
- Know when to use each one and why the mean can deceive.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Statistics | The science of summarising many data in a few figures. |
| Mean | The average: add everything up and divide by how many there are. |
| Median | The value in the middle once the data are sorted. |
| Mode | The value that appears most often. |
| Outlier | A value very different from the others, which throws the summaries off. |

## 📚 Main lesson
In the previous levels we drew data: bars, lines and pies. But sometimes we do not want a drawing; we want a figure. "What is my family's average monthly spending?" "How much does a neighbour in my town earn on average?" "What age is the group in my gymnastics class?" That is what statistics is for: the science of summarising many data in a single figure. And its three basic tools are called the mean, the median and the mode.

The mean is the most famous. To calculate it, you add all the values and divide by how many there are. Five purchases of 2, 4, 6, 8 and 10 euros: we add 2+4+6+8+10 = 30, and divide by 5, which is 6. The mean is 6 euros. The mean answers "if we share the total equally, how much does each one get?". It is like sharing a cake among everyone: the mean is the slice each guest would get.

The median is the more serious sibling. To calculate it, you sort the data from smallest to largest and take the one in the middle. With the same purchases sorted: 2, 4, 6, 8, 10. The one in the middle is 6. Curiously, the mean and the median coincide here. But not always. The median answers "what is the middle value?". It is the person who, in a queue sorted from shortest to tallest, stands in the middle position.

The mode is the simplest: it is the value that appears most often. In the family's marks, if three grandchildren got a 7, the mode is 7. The mode works for data that are not numbers: the most ordered ice cream flavour, the best-selling car colour, the most repeated name. You cannot calculate the "mean" of ice cream flavours, but you can calculate the mode: the favourite flavour. The mode is "what you see most".

When to use each one? It depends on the data. If the data are orderly and without oddities, the mean is perfect. If there is an outlier (a huge or tiny value that does not fit), the mean gets thrown off and the median is more honest. Think of salaries in a company: if there is a boss who earns 10,000 euros and nine employees who earn 1,000, the mean comes to 1,900 euros. But none of the nine earns that: the median (1,000) tells the reality better.

That salary example is key for the life of a citizen over 40. When the news says "the average salary is X", ask yourself: does that figure include outliers? A few very high salaries can push the mean up and give a false impression. The median, on the other hand, resists those strange values. That is why serious organisations usually publish the median when talking about income or house prices.

Another everyday example: house prices. In a neighbourhood, if most houses are worth 150,000 but there is one mansion at 900,000, the mean will come out very high and give the impression that everything is extremely expensive. The median (150,000) tells the reality of the neighbourhood. When buying or selling, check whether they are talking about the mean or the median: the difference can be enormous.

The mode also has its practical use. The baker wants to know which bread sells most (the mode of his sales) so as not to run out of stock. The town hall wants to know which complaint it receives most (the mode of complaints) to fix the most urgent thing. The mode answers "what is most frequent?", which is often exactly the question that matters.

In Google Sheets, all three are calculated with functions we already know from level 5: AVERAGE for the mean, MEDIAN for the median and MODE for the mode. Type "=AVERAGE(A2:A10)", "=MEDIAN(A2:A10)" or "=MODE(A2:A10)" and the sheet calculates. It is a good moment to check the misleading-mean trick: put an outlier in your table and see how the mean changes much more than the median.

And what does all this have to do with artificial intelligence? A great deal. AI, at its core, is a huge statistics: it looks for summaries and patterns in enormous data. The mean, the median and the mode are its simplest tools. When in advanced levels AI "predicts" something, it will be using similar statistical ideas, but with thousands of variables and calculations a human cannot do by hand. Understanding basic statistics is understanding the language of AI.

With this level we close the Root band (levels 5-9). We have learned to calculate, summarise, draw and measure data. In the Stem band (levels 10-14) we will make the quality leap: we will learn to distinguish correlation from causation, to clean data, and to build dashboards with professional tools. Today's statistics is the foundation of everything that comes.

## 💡 Practical examples
### Example 1: The family's mean spending
With your month's expenses table, calculate with "=AVERAGE" the average spending per purchase. Discuss with your family whether the figure matches reality.

### Example 2: The neighbourhood's median salaries
Write down the approximate salaries of 9 neighbours. Sort them and find the one in the middle: that is the median. Now add everything and divide by 9: that is the mean. Are they similar or very different? Why?

### Example 3: The mode of ice cream flavours
Ask 10 people their favourite ice cream flavour. Write them down and count which one appears most. That is the mode. You will see that you cannot calculate the "mean" of flavours, only the mode.

## 🛠️ Guided activity
Step 1. Open Google Sheets and create a new sheet called "My statistics".
Step 2. Write in A1 "spending" and below it 9 expenses from your week (for example: 5, 8, 3, 12, 6, 4, 9, 7, 5).
Step 3. In B1 write "mean" and in B2 the formula =AVERAGE(A2:A10). Press Enter.
Step 4. In C1 write "median" and in C2 the formula =MEDIAN(A2:A10). Press Enter.
Step 5. In D1 write "mode" and in D2 the formula =MODE(A2:A10). Press Enter.
Step 6. Compare the three figures. Are they similar? Normally they will be with normal data.
Step 7. Add an outlier: write in A11 the number 100 (a huge purchase).
Step 8. Change the formulas so they go up to A11: =AVERAGE(A2:A11), etc.
Step 9. Observe: the mean will have risen a lot; the median almost nothing. That is the effect of the outlier.
Step 10. Write a conclusion in E1: "the mean is thrown off by odd values; the median resists". Save the sheet.

## ✍️ Self-assessment exercises
1. How do you calculate the mean and what does it mean?
2. How do you calculate the median?
3. What is the mode and what type of data is it good for?
4. Why can the mean deceive when there is an outlier?
5. Which function does Google Sheets use for the median?

Answers: 1. Add all the values and divide by how many there are; it is the value each one would get if the total were shared. 2. Sort the data from smallest to largest and take the one in the middle. 3. The value that appears most often; it also works for data that are not numbers (flavours, colours, names). 4. Because a very high or very low value shifts the sum and the mean stops representing the majority; the median resists better. 5. MEDIAN, in the form =MEDIAN(range).

## ⚖️ Ethical dimension
The figures that summarise data can be used to deceive. A politician or an advert can choose between the mean and the median depending on what suits them. Learn always to ask: "which measure is this and what data make it up?". And when you present figures, say clearly whether you are talking about the mean or the median. Summarising honestly is not just a technique: it is a commitment to the truth.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | Free AVERAGE, MEDIAN and MODE functions | https://sheets.google.com |
| LibreOffice Calc | The same functions, offline | https://www.libreoffice.org |
| Khan Academy (statistics) | Free statistics video courses | https://www.khanacademy.org/math/statistics-probability |
| Gapminder | Real world data for practising summaries | https://www.gapminder.org |

## 🧠 Summary and bridge
- The mean shares out the total; the median is the middle value; the mode is what appears most.
- The mean is thrown off by outliers; the median resists.
- In Sheets: AVERAGE, MEDIAN and MODE.
- When you receive figures from others, always ask which measure it is and what data form it.
With this level we close the Root band. In the Stem band we will learn to distinguish correlation from causation, to clean data and to build dashboards: we begin to think like analysts.
