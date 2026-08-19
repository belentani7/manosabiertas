# Module 3: AI Applied to Data — Level 16
## Language: EN · Difficulty: Branch
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what regression is: the technique for predicting numbers.
- See the "trend line" as the heart of regression.
- Draw a trend line in Google Sheets.
- Learn the dangers of predicting too far ahead (extrapolating).

## 📖 Essential vocabulary
| Term | Plain-language explanation |
|---|---|
| Regression | The AI technique for predicting a number from past data. |
| Trend line | The straight line that best summarises how the points rise or fall. |
| Historical data | The past values the model uses to learn. |
| Extrapolate | Predict beyond the data we have, with care. |
| Error | The difference between what the model predicted and what happened. |

## 📚 Main lesson
In the previous level we saw the general idea of prediction. Today we go for the first concrete technique, and it is the most useful of all when we want to guess a number: regression. Don't be scared by the name, which sounds like a lab coat. Regression is the technique that draws a straight line through the points of a chart so it can say: "things are going this way, and so they will continue".

Remember the scatter plot from level 10: a cloud of points rising from left to right when two things move together. Regression does something wonderful with that cloud: it draws the straight line that passes as close as possible to all the points at once. It is not just any line: it is the "best" line, the one that leaves the points as close as possible, above and below. That line is called the "trend line".

Why is a line useful? Because once you have it, you can extend it. If the cloud shows that at 20 degrees 40 ice creams are sold and at 25 degrees 55 are sold, the line passes through there and continues straight. Then you look at the height of the line at 28 degrees and say: "probably about 65 ice creams will be sold". You have just made a prediction by regression. The machine does not think: the machine draws the line and reads the height.

Google Sheets draws this line for us with a couple of clicks. Select the scatter plot, open the settings ("Customise", "Series", "Trendline"), and the line appears magically. Beside it you can turn on the "label" showing the formula, and also the "coefficient of determination" (R²), a number between 0 and 1 that says how well the line fits the points. The closer to 1, the more reliable the line; near 0, the line is useless.

Let's understand that coefficient with an everyday example. If the points of your scatter plot are almost stuck to the line, like a kiosk's sales against temperature, the coefficient is close to 1: the line summarises reality very well, and its predictions deserve trust. If the points are scattered like a handful of rice, the coefficient is close to 0: there is no clear pattern, and no straight line can save the situation. The coefficient is the "traffic light" of regression.

Now comes the most important lesson of the day: extrapolation. Extrapolating is using the line to predict beyond the data we have. It is tempting and dangerous. If you only have temperature data between 10 and 30 degrees, you can safely predict the ice creams at 25 degrees: you are within what is known, the data supports it. But if you predict the ice creams at 50 degrees, you are travelling to a territory you have never seen: the line may keep rising, but in reality, at 50 degrees, nobody goes out to buy ice creams and sales collapse. The line does not know that: the line only knows how to extend itself.

Professionals call this "don't extrapolate beyond the data". It is the cause of the most famous errors in the history of AI. The behaviour of economies, epidemics and climate was predicted by extending lines without asking whether the world was still the same. A line is a summary of the past, not a law of the universe. The further from the past, the less reliable.

Another useful idea: regression does not understand the meaning of numbers, only their shape. If you give it kilos of tomatoes and rainy days, the machine finds the line that fits best. But it does not know that tomatoes need water, or how much. The interpretation is the person's job. That is why regression is an excellent tool, but always accompanied by human judgement: the judgement is yours, the line is the machine's.

In the real world, regression is everywhere disguised as a product. Flight prices are predicted with regression over millions of past bookings. The value of a house is estimated with regression over previous sale prices. Next month's electricity bill is anticipated with the line of past months. Every time a system tells you a "likely" number, chances are a regression is behind it.

In the next level we will see the second great prediction technique: classification, which does not predict a number but a category: will it be rain or sun? Is it spam or not? Meanwhile, keep this idea: predicting numbers is drawing the best line between the points and reading it with humility, knowing that the line is memory, not prophecy.

## 💡 Practical examples
### Example 1: The kiosk's ice creams
With 10 days of data (temperature and ice creams sold), the trend line lets you estimate how many ice creams will be sold tomorrow. At 28 degrees, about 65. Regression done with your eyes.

### Example 2: The flight price
An airline keeps millions of past bookings. A regression finds the line linking price to days of advance booking and charges you "what the algorithm knows you will pay".

### Example 3: The building's water
With 12 months of consumption, the trend line shows whether water spending is rising. If the line rises, something is breaking or being wasted: regression warns before the bill does.

## 🛠️ Guided activity
Step 1. Open the "My first prediction" sheet from level 15 (or create one with 10 days of temperature and ice creams).
Step 2. Select the two columns and make a scatter plot (Insert, Chart, scatter).
Step 3. Click the three dots on the chart and open "Edit chart".
Step 4. Go to "Customise", "Series" and enable "Trendline".
Step 5. Also enable "Label" (to see the formula) and, if it appears, "R²" (the coefficient of determination).
Step 6. Look at the R²: is it close to 1? Then the line summarises the points well.
Step 7. Read the number in the formula: it has the form "y = a·x + b". There, "x" is the temperature and "y" the ice creams.
Step 8. Replace x with 28 and calculate y with the calculator. That is the number the line predicts.
Step 9. Write below: "prediction at 28 degrees: y ice creams". Check it matches what you see on the line.
Step 10. Ask yourself and write: "would I dare to predict at 50 degrees? Why yes or why not?".

## ✍️ Self-assessment exercises
1. What is regression?
2. What is the line that regression draws called?
3. What does the R² coefficient indicate?
4. What is extrapolating and why is it dangerous?
5. Who puts the meaning into the numbers regression predicts?

Answers: 1. The AI technique for predicting a number from past data. 2. Trend line. 3. How well the line fits the points: near 1 it is reliable, near 0 it is useless. 4. Predicting beyond the data we have; dangerous because the world can change and the line does not know it. 5. The person: the machine sees the shape, the person understands the meaning.

## ⚖️ Ethical dimension
A regression can be used to help or to squeeze. The same technique that predicts water consumption to prevent waste is also used to charge more to those with fewer options. And there is a subtle ethical trap: if the historical data contains injustices (for example, a neighbourhood that was sold less), the line inherits and perpetuates them. Before believing a predicted number, ask yourself: are the data it was born from fair? Regression is neither guilty nor innocent: it inherits the truth or the prejudice of its data.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | Trend line and R² in two clicks | https://sheets.google.com |
| LibreOffice Calc | The same trend lines, no connection needed | https://www.libreoffice.org |
| Gapminder | Real data to practise trend lines | https://www.gapminder.org |
| Desmos | Graphing calculator that draws lines over points | https://www.desmos.com |

## 🧠 Summary and bridge
- Regression predicts numbers by drawing the best line between the points.
- The R² coefficient tells you whether the line is reliable.
- Extrapolating beyond the data is the cause of famous errors.
- The machine draws the line; the person puts the meaning.
In the next level we will see classification: predicting categories (rain or sun? spam or not?) instead of numbers.
