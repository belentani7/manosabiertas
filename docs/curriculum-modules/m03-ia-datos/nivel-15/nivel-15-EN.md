# Module 3: AI Applied to Data — Level 15
## Language: EN · Difficulty: Branch
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what predictive analysis is and why it is the most "magical" part of AI.
- Understand that predicting is not guessing: it is calculating probabilities from past data.
- Distinguish between a good prediction and a bad one.
- Learn the idea of "training" and "evaluating" a model.

## 📖 Essential vocabulary
| Term | Plain-language explanation |
|---|---|
| Predictive analysis | Using past data to anticipate what will happen in the future. |
| Model | The rule that AI learns to make predictions. |
| Train | Teach the model using examples of past data. |
| Evaluate | Check whether the model's predictions are correct. |
| Probability | The measure of how much confidence a prediction has, from 0 to 100%. |

## 📚 Main lesson
Welcome to the Branch band. It is the most awaited band of the course, because here AI does what looks like magic: looking into the future. So far we have learned to look at the past: sorting data, drawing it, cleaning it, finding correlations. All of that was the training of a detective. Now comes the hour of the oracle: using what we know to anticipate what is coming.

What is predictive analysis? It is the discipline that uses past data to calculate what will happen in the future. It is not fortune-telling or superstition: it is applied statistics. When the weather forecaster says "tomorrow there is a 70% chance of rain", they are not flipping a coin: they are comparing today with thousands of similar days in the past and counting how often it rained afterwards. That is predictive analysis.

The central piece is the "model". A model is a rule the machine learns on its own from examples. Imagine a child who has never seen dogs or cats. We show them 100 photos: "this is a dog", "this is a cat". With those 100 photos, the child internalises the rule: "four legs, floppy ears, long snout... dog; pointed ears, meows... cat". Then we show a new photo and they get it right. The child has just trained a model. AI does exactly the same thing, but with millions of examples.

The process has two phases you need to know well because we will always use them: train and evaluate. Training is teaching the model with past data, like the child with the 100 photos. Evaluating is checking whether it learned well: you give it questions whose answers you already know, let it answer without help, and count how many it gets right. If it gets 95% right, the model is good. If it gets 40% right, it is useless.

Here is the most dangerous trap in the world of AI: a model can get answers right from memory. If the child memorises the exact 100 photos and you show them one of those same 100, they get it right every time... but they cannot generalise: photo 101, which they have never seen, they fail. Professionals call this "memorising instead of learning". That is why evaluation is always done with data the model has NOT seen during training. That detail separates the good from the sloppy.

There is another idea to take home: AI predictions are never certainties, they are probabilities. An AI that predicts diseases never says "you have this"; it says "there is an 80% chance that...". The percentage matters. A prediction with 95% confidence and one with 55% do not deserve the same treatment. Distrust any system that gives answers without saying how wrong it can be. The model's honesty is its percentage.

Where do we find predictive analysis in daily life? Everywhere. The email that predicts spam, the bank that detects stolen cards, the shop that suggests "you may also like", the navigation app that works out how long your trip to the hospital will take, the TV that guesses which series you will like. All those systems, every day, do predictive analysis with their data and with yours. You already live surrounded by oracles; today you learned how they work.

For this course, the good news is that you do not need to program to do predictive analysis. In the coming levels we will use visual, free tools where "training" means dragging folders and pressing buttons. You already have foundations others lack: you know that behind every prediction there is clean data (level 11), suspicious correlations (level 10) and responsible decisions (level 13). The machine predicts; you judge.

In the next level we will see the first type of prediction: regression, used when we want to predict a number. How many kilos of tomatoes the garden will give, how much the plane ticket will cost, how many customers will come to the market. For now, remember this: predicting is not guessing, training is not memorising, and the confidence of every prediction is measured with a percentage.

## 💡 Practical examples
### Example 1: The weather forecaster
When the forecast says "70% chance of rain", it is comparing today with thousands of similar days in the past. That is pure predictive analysis.

### Example 2: The child and the animals
With 100 labelled photos, the child learns the rule that separates dogs from cats. Then they get a new photo right. Training and generalising, in one sentence.

### Example 3: The bank
The bank detects that your card is being used in a distant city while also being used in yours. That is unlikely, so the system predicts fraud and blocks it. It bases the decision on a probability calculated from millions of past transactions.

## 🛠️ Guided activity
Step 1. Open a new Google Sheets sheet and write the title "My first prediction".
Step 2. Make a list of 10 days and the number of ice creams a kiosk sold (invent data that rises when it is hot).
Step 3. Add a column with the temperature of each day (if you like, use real data from level 14).
Step 4. Make a scatter plot with temperature (X) and ice creams (Y), as in level 10.
Step 5. Look: do the points form an ascending line? Then temperature and ice cream are correlated.
Step 6. Imagine that AI draws the "best line" that passes through the points. That is called regression and it is the topic of level 16.
Step 7. Write a prediction: "if it is 28 degrees tomorrow, how many ice creams will be sold?".
Step 8. Estimate a number with your eyes (looking at the cloud of points) and write it down.
Step 9. Now think: is that prediction a certainty or a probability? Write it below.
Step 10. Save the sheet. You have taken your first step in predictive analysis.

## ✍️ Self-assessment exercises
1. What is predictive analysis?
2. What is a model?
3. What are the two phases of the AI process?
4. Why is evaluation done with data the model has not seen?
5. Are AI predictions certainties or probabilities?

Answers: 1. Using past data to anticipate what will happen in the future. 2. The rule that AI learns from examples to make predictions. 3. Train (teach with examples) and evaluate (check with new data). 4. Because if you evaluate with data already seen, the model may be memorising instead of learning. 5. They are probabilities, with a confidence percentage you must look at.

## ⚖️ Ethical dimension
Predictive analysis can help or harm. A bank that predicts defaults with biased data can deny credit to people who could actually pay; a badly trained policing algorithm can point at whole neighbourhoods. The central ethical question is: who answers when the prediction is wrong? The honest answer: always a person. AI proposes, people dispose. And any model that affects people must be explainable: if no one knows why the machine decided something, that machine should not decide anything.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | To explore data and see correlations that predict | https://sheets.google.com |
| Teachable Machine | Train your first model without coding | https://teachablemachine.withgoogle.com |
| Machine Learning for Kids | Visual introduction to machine learning | https://machinelearningforkids.co.uk |
| Gapminder | Real data to practise predictions | https://www.gapminder.org |

## 🧠 Summary and bridge
- Predictive analysis uses the past to anticipate the future with probabilities.
- A model is a rule learned from examples.
- The two phases are train and evaluate; evaluation always uses new data.
- No prediction is a certainty: always look at the percentage.
In the next level we will see regression: predicting numbers such as sales, kilos or temperatures.
