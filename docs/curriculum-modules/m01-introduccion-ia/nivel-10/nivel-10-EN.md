# Module 1: Introduction to Artificial Intelligence — Level 10
## Language: EN · Difficulty: Stem
## Estimated time: 2.5 hours

## 🎯 Level objective
- Understand what supervised learning is using the teacher metaphor.
- Distinguish classification and regression with real-life examples.
- Understand how the machine corrects its errors during training.
- Recognize supervised learning in everyday applications.
- Do a small "regression" by hand in a spreadsheet.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Supervised learning | Learning with a "teacher": the machine receives examples with their correct answer. |
| Classification | Deciding which group something belongs to: spam or not, cat or dog. |
| Regression | Predicting a number, such as the price of a house or tomorrow's temperature. |
| Teacher (supervisor) | The one who labels the examples and corrects the machine during training. |
| Error | The difference between what the machine answered and the correct answer. |
| Train and validate | Training is learning with examples; validating is checking with new examples. |

## 📚 Main lesson
Imagine a primary school class. A teacher teaches children to distinguish fruit: he shows an apple and says "this is an apple", shows a pear and says "this is a pear". Then he gives an exam: he shows a fruit and asks. If the child is right, great; if wrong, the teacher corrects him. With practice, the child ends up getting it right almost every time. That is how supervised learning works.

"Supervised" means there is a supervisor: someone or something that knows the correct answers. In the AI world, the supervisor is the labeled dataset. Each example comes with its answer. The machine does not guess blindly: at the end of the process it has a "teacher's correction" that tells it whether it was right.

The process is a circle: the machine looks at an example, makes a prediction, compares with the correct label, calculates its error, and adjusts its connections to fail less next time. Then it moves to the next example, and the next, millions of times. Each round is like one exam after another, and each correction makes it a little better.

There are two big types of supervised tasks. The first is classification: deciding which group something belongs to. Is this email spam or important? Does this photo have a cat or a dog? Is this payment normal or suspicious? The answer is a label, a category. It is like putting each thing in its box.

The second is regression: predicting a number. How much will this house be worth? What temperature will it be tomorrow? How many steps will you take today? There are no boxes; there is a scale. It is like estimating how many kilograms a sack weighs by looking at it: it does not say "heavy or light", it says "approximately 25 kilograms".

A very close example of regression: the price of apartments. If we show the machine thousands of examples of "square meters → price", it will learn to estimate the price of an apartment it has never seen. You do this intuitively every day: "a bigger apartment usually costs more". The machine does it with thousands of data points and with more precision.

The difference between classification and regression is simpler than it seems: classifying is saying "yes or no, this or that"; regression is saying "how much". The bank classifies whether a payment is fraud; it predicts (regression) how much you will spend next month. Understanding this difference will help you read any AI news.

Now, an important point: the machine can learn "by heart" and deceive us. If the teacher examines the children with the same fruits they already saw in class, everyone gets a perfect score. That is why in AI, training is separated from validation: you train with some examples and check with others the machine has not seen. If it gets the new ones right, it has truly learned.

This has a technical name worth knowing: overfitting. It is when the machine memorizes the training examples instead of learning the general pattern. It is like a student who memorizes the exam questions but does not understand the subject: he passes the known exam and fails the unknown one. Good models are always tested with new data.

Supervised learning is in almost all the applications we already know. The email that filters spam, face recognition, fraud detection, image diagnosis: they are all supervised; they all learned with labeled examples. It is the most used type of learning and the easiest to understand.

And why is so much data needed? Because each example is an opportunity to correct. A model needs to see many variations of the real world so as not to get confused. Just as a child needs to see many dogs (white, black, big, small) so as not to believe there is only one kind of dog.

You do not need to know math to use this. What matters is the concept: there is a teacher (the labeled data), the machine takes exams (predictions), makes mistakes, corrects, and improves. And then it is tested with new exams to make sure it truly learned.

In this level's activity, you will do your own regression with a spreadsheet: you will draw points of "apartment size → price" and a line that summarizes them. That line is, in miniature, what regression does with thousands of data points. You will see with your own eyes how the machine "sees" the trend.

In the next level, we will see the other two types of learning: unsupervised and reinforcement learning.

## 💡 Practical examples
1. **Email:** you mark messages as "important" or "spam"; the machine classifies the new ones just like you.
2. **The bank:** it classifies each payment as "normal" or "suspicious", with labeled examples from millions of transactions.
3. **Housing prices:** a website estimates the price of an apartment by comparing it with thousands of real sales (regression).

## 🛠️ Guided activity
Step 1. Open the browser and go to Google Sheets (sheets.google.com) or open your spreadsheet program.
Step 2. In column A, write apartment sizes: 40, 55, 70, 85, 100.
Step 3. In column B, write invented prices that grow with size: 80000, 100000, 130000, 160000, 190000.
Step 4. Select the two columns with the mouse.
Step 5. Click "Insert" and then "Chart".
Step 6. In the chart, look for the "Trendline" option and enable it.
Step 7. Observe: the line summarizes the relationship "more meters, more price". That is a regression.
Step 8. Think: with this line, what price would you estimate for a 60-square-meter apartment? That estimate is exactly what AI does with thousands of data points.

## ✍️ Self-assessment exercises
1. Explain with the teacher metaphor what supervised learning is.
2. What is the difference between classification and regression?
3. What is the error and what is it used for during training?
4. What is overfitting and why is the model tested with new data?
5. Give an everyday example of classification and one of regression.

**Answers:** 1) It is learning with examples that come with their correct answer, like a teacher who corrects exams. 2) Classifying is deciding which group something belongs to (category); regression is predicting a number (quantity). 3) It is the difference between what the machine predicted and the correct answer; it is used to adjust and improve. 4) It is when the machine memorizes the examples instead of learning the pattern; that is why it is tested with data it has not seen. 5) Classification: filtering spam or recognizing a face; regression: estimating the price of an apartment or tomorrow's temperature.

## ⚖️ Ethical dimension
Supervised learning inherits the decisions of the human supervisor who labels. If the labels are unfair (for example, loans approved by neighborhood), the machine learns that injustice and applies it to thousands of people. In addition, a model tested only on similar data can seem perfect and fail in the real world. Demanding that models be validated with diverse data is an ethical responsibility, not a technical luxury.

## 🔓 Open tools
- **Teachable Machine** (teachablemachine.withgoogle.com): train a supervised classifier with your own photos.
- **TensorFlow Playground** (playground.tensorflow.org): watch live how a network is trained with labeled data.
- **Google Sheets** (sheets.google.com): free, with charts and trendlines to do simple regressions.
- **Kaggle** (kaggle.com): contests and data to practice classification and regression.
- **YouTube** (youtube.com): search "supervised learning explained" for more videos.

## 🧠 Summary and bridge
- Supervised learning learns with labeled examples: there is a teacher.
- Classifying is putting into boxes; regression is predicting numbers.
- The machine corrects its error with each example and improves.
- Overfitting deceives: you must validate with new data.
- You already use supervised learning every day without knowing it.

In level 11, we will see unsupervised learning and reinforcement learning.
