# Module 3: AI Applied to Data — Level 17
## Language: EN · Difficulty: Branch
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what classification is: the technique that predicts categories.
- See the difference between predicting numbers (regression) and predicting labels (classification).
- Understand the role of labelled data in training.
- Learn to read a classifier's "accuracy" and distrust the traps.

## 📖 Essential vocabulary
| Term | Plain-language explanation |
|---|---|
| Classification | The AI technique that decides which group something belongs to. |
| Label | The correct answer that accompanies each example during training. |
| Class | Each of the possible groups: "cat", "spam", "rain". |
| Accuracy | The percentage of correct answers of the classifier. |
| Decision boundary | The invisible line that separates the classes on the data map. |

## 📚 Main lesson
In the previous level we learned to predict numbers with regression. Today we go for the other great family of predictions, perhaps the most visible in your daily life: classification. Classification does not predict a number but a category. The email: spam or not? The photo: dog or cat? The day: rain or sun? The message: threat or news? Classification is the art of deciding which box each thing goes into.

Let's compare the two techniques so they are never confused. Regression answers "how much?" questions: how many ice creams, how many euros, how many kilos? Classification answers "which one?" questions: spam or normal, dog or cat, safe or fraudulent? One gives you a measurement; the other gives you a label. If you want to know how much the ticket will cost, use regression. If you want to know whether a message is dangerous, use classification.

How does a machine learn to classify? With labelled data. Let's go back to the child from level 15: we show them 100 photos, each with its label ("this is a dog", "this is a cat"). In AI jargon, those 100 photos are "labelled data", and the labels are the correct answers. Without labels, no classification is possible: the machine cannot learn what each thing is if we never tell it what it is. That is why every training example is a pair: the data (the photo) and the label (what it is).

A beautiful idea for understanding classification is the "decision boundary". Imagine a map: on one axis, the animal's weight; on another, the length of its ears. Dogs fall in one area of the map and cats in another. The classifier draws an invisible line separating the two areas, and when a new animal arrives, it looks at which side of the line it is on. If it falls on the dog side, it says "dog". That invisible line is the decision boundary, the equivalent of regression's trend line, but separating groups.

How do you measure whether a classifier works? With "accuracy": the percentage of times it is right. If you test the classifier with 100 new animals and it gets 92 right, its accuracy is 92%. It seems simple, but here is where manufacturers hide the biggest trap. Imagine a fraud detector in a bank where 99% of transactions are legitimate. A system that always answers "legitimate", without looking at anything, would have 99% accuracy. It would seem perfect and would be useless! That is why professionals look beyond accuracy: they look at how many real frauds it catches and how many false alarms it fires.

Another famous trap: the majority class crushes the minority. If you train a classifier to detect a rare defect in parts, and the defect only appears in 1 in 1000 parts, the system learns to say "everything is fine" and gets 99.9% right. Apparently brilliant; in reality it detects nothing. The lesson: when a category is very rare, a classifier that ignores the rare category "seems" excellent. Always look at how many rare cases it detected, not just the total percentage.

In daily life, classification is everywhere and almost always unnoticed. Email classifies spam. Your phone classifies your voice into "commands". The bank classifies each transaction as "normal" or "suspicious". The hospital classifies x-rays as "clean" or "with a nodule". The camera classifies your photos into "landscapes" and "people". Each of those decisions is a decision boundary drawn by a machine trained on thousands of labelled examples.

To practise classification without coding, there are free visual tools. A very famous one is "Machine Learning for Kids", where you create "projects", upload labelled photos or texts and the tool trains a model with buttons. Another is "Teachable Machine" by Google, where you make three classes with camera photos (for example, "head", "paper", "nothing") and the model learns to tell them apart live. In level 18 we will use them in depth. Today we will just get to know them.

Before finishing, one idea to link with what comes next: classification and regression combine in almost every real system. The navigation app classifies your route ("normal trip or traffic jam") and then regresses the time ("you will arrive in 23 minutes"). The bank classifies the transaction ("fraudulent or not") and then predicts how much is at risk. Understanding the two pieces gives you the complete map of how AI thinks. In the next level, let's get our hands dirty: you will train your first classification models with your own photos and sounds.

## 💡 Practical examples
### Example 1: Spam email
An email arrives saying "WIN A PRIZE, click now". The classifier in your inbox compares it with millions of emails labelled as spam and decides: spam. It does not read the text: it classifies it.

### Example 2: Grandma's photos
Grandma wants a photo of only her grandchildren. The app classifies each photo in her gallery as "person" or "not a person", and also identifies each grandchild. All of that is classification trained on labelled photos.

### Example 3: The market fruit
A farmer photographs apples and pears with their phone camera. A classifier trained on thousands of labelled fruits tells them instantly whether it is an apple or a pear, saving them from sorting by hand.

## 🛠️ Guided activity
Step 1. Open your browser and go to https://teachablemachine.withgoogle.com (it is free and needs no account).
Step 2. Press "Get Started" and choose "Image Project".
Step 3. You will see three classes: Class 1, Class 2 and Class 3. Assign each class an object from your home (for example, "mug", "remote", "nothing").
Step 4. Turn on the camera and capture 20 photos of the mug by holding the "Hold to Record" button while moving it.
Step 5. Capture 20 photos of the remote and 20 of the background with no object (the "nothing" class).
Step 6. Press "Train Model" and wait for it to finish (a few seconds).
Step 7. In the "Preview" window, show the mug to the camera: does it classify it well?
Step 8. Try the remote and then the "nothing" class. Note how many times out of ten it gets it right.
Step 9. Now try an object you did NOT train (for example, your hand): see how the AI gets confused. That is normal: it did not learn that class.
Step 10. Write on a piece of paper: "my classifier gets X out of 10 right" and save the project. You have trained your first classification model.

## ✍️ Self-assessment exercises
1. What is the difference between regression and classification?
2. What is labelled data?
3. What is the decision boundary?
4. Why can accuracy deceive when a class is very rare?
5. Name two free tools for training classifiers without coding.

Answers: 1. Regression predicts numbers ("how much?") and classification predicts categories ("which one?"). 2. Examples that carry, alongside the data, their correct answer (the label). 3. The invisible line that separates the classes on the data map. 4. Because a system that always says the majority class gets it right almost always without detecting anything. 5. Machine Learning for Kids and Teachable Machine.

## ⚖️ Ethical dimension
Classifiers make mistakes, and not all their mistakes weigh the same. Confusing an email with spam is annoying; confusing a clean x-ray with one that has a nodule frightens a person and can change their life. Classification errors that affect people must always be reviewed by people. And there is an enormous ethical danger: if the labels it was trained with contain prejudices (for example, "these photos are of criminals"), the machine inherits and repeats them at scale. Train your classifiers with fair labels, and never let them decide alone about human lives.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Teachable Machine | Train classifiers with photos and sounds without coding | https://teachablemachine.withgoogle.com |
| Machine Learning for Kids | Visual classification projects for learning | https://machinelearningforkids.co.uk |
| Google Sheets | Classify data with filters and tables | https://sheets.google.com |
| Quick, Draw! | See how an AI classifies your drawings | https://quickdraw.withgoogle.com |

## 🧠 Summary and bridge
- Regression predicts numbers; classification predicts categories.
- Classification is trained with labelled data.
- The decision boundary separates the classes, as the trend line separates trends.
- Accuracy alone deceives when there are rare classes: look at the real hits.
In the next level, let's get our hands dirty: we will use Teachable Machine and Machine Learning for Kids to train our first models with photos, sounds and texts.
