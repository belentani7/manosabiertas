# Module 3: AI Applied to Data — Level 10
## Language: EN · Difficulty: Stem
## Estimated time: 3 hours

## 🎯 Level objective
- Understand the difference between correlation and causation, the most important idea in data analysis.
- Recognise when two things "move together" without one causing the other.
- Learn to look for alternative explanations before believing a relationship.
- Apply these ideas to everyday news, adverts and rumours.
- Use Google Sheets to explore whether two columns of data move together.

## 📖 Essential vocabulary
| Term | Plain-language explanation |
|---|---|
| Correlation | Two things that change at the same time, in the same direction or opposite directions. |
| Causation | One thing produces the other: A causes B. |
| Confounder | A third thing that explains both and creates the illusion of a relationship. |
| Reverse causation | B causes A, but it looks like A causes B. |
| Scatter plot | A chart of points that shows whether two columns move together. |

## 📚 Main lesson
Welcome to the Stem band. So far we have learned to handle data: sort it, draw it and summarise it. Now we start thinking like analysts, and the first lesson of that way of thinking is the most famous in all of statistics: that things moving together does not mean one causes the other. Statisticians say it in Latin: "correlation does not imply causation". Today we are going to decode that phrase.

Let's use a classic example that appears in every textbook: ice cream and drownings. When ice cream sales go up, drownings at the beach also go up. The two figures "move together": when ice cream rises, drowning rises. Does that mean ice cream causes drownings? Of course not. The real explanation is a third thing: summer. In summer it is hot, people buy more ice cream and also swim more in the sea. Summer is the "confounder".

That example sounds like a joke, but it is the key to countless deceptions. Every day, headlines and adverts use correlations to sell false ideas: "villages that eat more yoghurt have fewer colds", "people who sleep eight hours earn more money". In all those cases, a third cause hides the truth: people who eat yoghurt tend to take better care of themselves; people who sleep eight hours tend to have better jobs. Correlation, yes; causation, not proven.

Correlation is not bad: it is a warning. When two things move together, it is worth investigating. Correlation says "look here, something interesting is going on". Causation says "this produces that", and to claim it you need much more than two columns of numbers: you need experiments, checks, and ruling out alternative explanations. Serious science does not confuse a warning with proof.

We stumble on this trap in daily life too. Think: "my head aches on rainy days". Does rain cause the ache? Maybe on rainy days you sleep worse, or go out for walks less, or eat differently. There are dozens of alternative explanations. Before concluding that A causes B, always ask yourself: what else changes at the same time as A?

Another common trap is reverse causation. A headline says "people who retire earlier live longer". Does retiring cause living longer? It may be the other way round: people in good health can retire earlier and live longer because of their health, not because of retirement. Or there may be a confounder: wealthy people retire earlier and have better healthcare. The direction of the arrow is unclear.

How can we explore a correlation in Google Sheets? With a scatter plot. You put two columns: for example, "ice creams sold" and "drownings". Select them and choose the "Scatter chart" type: each point is a month, with its ice cream sales and its drowning count. If the points form a cloud rising from left to right, the two things move together (positive correlation). If the cloud falls, they move in opposite directions (negative correlation). If it is a shapeless cloud, there is no relationship.

The scatter plot is the tool of the correlation hunter. But beware: the chart only shows that they move together, not why. Seeing the cloud of points is the first step; looking for the confounder is the second, and that second step is what separates the analyst from the person who swallows any headline. The scatter plot raises its hand to say "something is going on here"; the investigation decides what it is.

Let's practise with a healthy example: age and risk of disease. There is a clear correlation: the older you are, the higher the risk of many diseases. But does age cause the diseases? Not exactly: age is a "marker" that bundles many other factors that come with time. Modern medicine knows how to separate what correlates from what causes, and that is why it does not treat people by their age but by their real risk factors.

A practical rule for daily life: whenever someone presents you with a relationship, ask three questions. First, do they really move together or is it coincidence? Second, what else could explain both? Third, who benefits from me believing this relationship? Those three questions turn anyone into a critical reader of headlines, adverts and rumours.

In the next level we will apply these ideas to the real world: cleaning data so that correlations are not distorted by errors. Because there is another trap: if the data is dirty, the correlations that come out are lies. One wrongly copied figure can create a cloud of points that does not exist. Honest correlation starts with clean data.

## 💡 Practical examples
### Example 1: Ice cream and drownings
Write down in two columns the ice cream sales and drownings of 6 months (invent the data: in summer both rise). Draw the scatter plot: the points rise. Now explain in your own words why it is not causation.

### Example 2: The nap and productivity
A headline reaches you: "people who take a nap earn more money". Before believing it, look for alternative explanations: maybe people with more money can take a nap at work? That is a possible reverse causation.

### Example 3: Umbrellas and flu
In your city, on days when more umbrellas are sold there are more flu cases. Apply the three questions: do they move together? What unites them (the bad weather)? Who gains from me believing that the umbrella causes the flu?

## 🛠️ Guided activity
Step 1. Open Google Sheets and create a new sheet called "Ice cream and drownings".
Step 2. Write in A1 "month", in B1 "ice cream" and in C1 "drownings".
Step 3. Fill 6 rows with data that rise together (example: January 10 and 2, April 30 and 5, July 80 and 12).
Step 4. Select columns B and C with the header.
Step 5. Press "Insert" and "Chart". Under "Chart type", choose "Scatter chart".
Step 6. Look at the cloud of points: it rises from left to right. There is a positive correlation.
Step 7. In a nearby cell, write the key question: "what third thing explains both?".
Step 8. Write the answer: "summer and heat". That is the confounder.
Step 9. Now change the data in column C so that it FALLS when B rises (example: January 12, July 2). Look at the cloud: now it falls. That is negative correlation.
Step 10. Write a conclusion: "the scatter plot shows they move together, not that one causes the other". Save the sheet.

## ✍️ Self-assessment exercises
1. What is the difference between correlation and causation?
2. In the ice cream example, what is the confounder?
3. What is reverse causation? Give an example.
4. Which Google Sheets chart shows whether two columns move together?
5. What three questions should you ask about any relationship presented to you?

Answers: 1. Correlation means two things change together; causation means one produces the other. 2. Summer (the heat), which explains that more ice cream is bought and that there are more swimmers. 3. When it looks like A causes B but B is what causes A; for example, people who retire earlier live longer because they already had good health. 4. The scatter plot. 5. Do they really move together? What else explains both? Who benefits from me believing it?

## ⚖️ Ethical dimension
The confusion between correlation and causation is not an innocent error: it is a tool of manipulation. Adverts for creams, insurance and even political parties use correlations to sell. When you communicate data, always say honestly whether there is a proven relationship or only a coincidence. And when someone uses a correlation to convince you, remember the ice cream and the drowning: don't swallow the story with a spoon.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | Scatter plots to explore correlations | https://sheets.google.com |
| Gapminder | Real world data to see correlations for real | https://www.gapminder.org |
| "Spurious Correlations" | Website showing absurd but real correlations | https://www.tylervigen.com/spurious-correlations |
| LibreOffice Calc | The same scatter plots, no connection needed | https://www.libreoffice.org |

## 🧠 Summary and bridge
- Correlation is when two things move together; causation is when one produces the other.
- A confounder is a third thing that explains both.
- Reverse causation inverts the direction of the arrow.
- The scatter plot shows whether they move together, not why.
In the next level we will learn to clean data, because an honest correlation can only come from error-free data.
