# Module 1: Introduction to Artificial Intelligence — Level 07
## Language: EN · Difficulty: Root
## Estimated time: 2 hours

## 🎯 Level objective
- Understand what machine learning is and how it differs from a normal program.
- Understand that machines learn from examples, not from written rules.
- Recognize training data as AI's "textbook".
- Apply the phrase "garbage in, garbage out" to the world of data.
- Train a simple model with a free tool.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Machine learning | The way of making AI in which the machine learns on its own from examples, without written rules. |
| Training data | The examples (photos, texts, numbers) that the machine learns from. |
| Model | The result of learning: the "learned recipe" later used to predict. |
| Train | The process of teaching the machine by showing it examples. |
| Predict | To make a guess with what was learned: "this is spam", "this is a face". |
| Feature | A detail the machine uses to decide, such as size or color. |

## 📚 Main lesson
So far we have seen what AI is and what types exist. Now comes the most important question: how do machines learn? The short answer is: in the same way we learn to recognize things as children, but with millions of examples. That is called machine learning, and it is the engine of almost all modern AI.

Think about how you would teach a child to tell a cat from a dog. You would not give them a list of rules ("if the ears are pointed and it weighs less than five kilograms..."). You would show them many cats and many dogs, and the child, without being able to explain it, ends up telling them apart. Machine learning does exactly that, but on a big scale: it shows millions of labeled photos and the system finds the patterns on its own.

Compare with classic programming. In a traditional program, a human writes the rules and the computer follows them: "if the password is correct, enter". That works for fixed things, but it is impossible to write rules to recognize a voice, a face, or a language. There are too many variations. That is why the approach changed: instead of giving rules, you give examples.

The examples are called training data. They are the machine's "textbook". If we want a system to tell junk mail apart, we show it thousands of emails labeled as "spam" or "important". If we want it to recognize faces, we show it thousands of photos of faces. The more and better examples, the better it learns. It is like learning to cook: the more recipes you try, the better cook you become.

The result of training is called a model. The model is the "learned recipe": a collection of internal adjustments that summarize the patterns found. Once trained, the model no longer needs the examples: it can face new data and predict. When your email decides that a new message is spam, it is using an already trained model.

The machine learns using features: small details that help decide. In an email, the feature might be "it has many capital-letter words" or "it promises easy money". In a photo, "it has curved lines" or "orange color dominates". The system learns which features matter by combining thousands of examples.

There is a famous phrase in this world: "garbage in, garbage out". It means the quality of learning depends on the quality of the data. If we train a system with incorrect, incomplete, or unfair examples, the system will learn those mistakes. It is like teaching a child with a textbook full of errors: the child will learn the errors.

That is why training data is so important and so delicate. If we show a system a thousand photos of people and 90% are men, it will learn that "person" looks like a man. That is called bias, and it is a serious problem we will talk about later. The machine is not neutral: it inherits what we teach it.

How does the machine "learn" exactly? It does not do it like us; it does not "understand" concepts. It adjusts numbers. Imagine thousands of buttons and knobs on a huge machine: each well-solved example turns a button up, each failed example turns it down. With millions of examples, the machine adjusts the knobs until it almost always gets it right. It is trial and error at high speed.

You do not need to know math to understand the idea. The idea is: examples plus adjustments plus corrections equals a model that gets it right. You do not need to program; you only need to understand the principle to know why AI gets things right and why it sometimes fails.

Machine learning is everywhere. The email that filters spam, the phone that recognizes your voice, the bank that detects fraud, the store that predicts what you will buy: they all work on this same principle. You have already used it hundreds of times without knowing. Now you know the name of what is behind it.

A key difference from people: the machine needs a great many examples. A child sees four cats and already recognizes them; a system needs thousands or millions. The machine's advantage is speed: it can process in hours what would take a person years. The disadvantage is that it does not generalize so easily: a small change in context can confuse it.

In practice, to use AI you do not need to train models: most come already trained. But understanding how they learn makes us smarter users: we know why a system makes mistakes, why it "hallucinates", and why it is worth reviewing data. It is like knowing how the engine works: you do not need to fix it, but it helps to understand why it sometimes makes noise.

In the next level, we will meet neural networks: the artificial "brain" inside these models.

## 💡 Practical examples
1. **Email:** you mark a message as "spam"; the system learns from your example and from then on filters similar ones.
2. **The bank:** the system that detects that a purchase in another country "is odd" has learned from millions of normal and anomalous movements.
3. **Photos:** the phone that groups your grandson's photos has learned to recognize his face from thousands of training photos.

## 🛠️ Guided activity
Step 1. Open the browser and go to Teachable Machine (teachablemachine.withgoogle.com).
Step 2. Click "Get Started" and choose "Image Project".
Step 3. You will see two classes: "Class 1" and "Class 2". Rename the first "Hand raised" and the second "Hand down".
Step 4. Click "Webcam" in class 1 and, when the phone or computer asks for permission, allow it.
Step 5. Raise your hand and press "Hold to Record" for a few seconds to capture examples.
Step 6. Repeat in class 2 with your hand down. You now have your training data.
Step 7. Click "Train Model" and wait a few seconds.
Step 8. Test it: raise your hand and watch the model predict "Hand raised". You have just trained your first AI.

## ✍️ Self-assessment exercises
1. How does machine learning differ from a traditional program?
2. What is training data and why is it compared to a textbook?
3. What is a model and what is it used for once trained?
4. What does "garbage in, garbage out" mean?
5. How does the machine really "learn": by understanding or by adjusting?

**Answers:** 1) A traditional program follows rules written by humans; machine learning learns patterns from examples. 2) They are the examples the machine learns from, like a textbook it studies. 3) It is the result of learning, an internal "recipe" used to predict with new data. 4) That the quality of learning depends on the quality of the data: bad data produce bad models. 5) It does not understand concepts: it adjusts numbers through trial and error until it gets things right.

## ⚖️ Ethical dimension
Training data is not neutral: it reflects the world, with its injustices. If we train with biased data, the machine discriminates, even though nobody asked it to. That is why those who create models have a great responsibility, and those who use them must demand transparency about what data was used. As a user, remember: when a system fails you unfairly, the problem is usually in the data, not in the "machine".

## 🔓 Open tools
- **Teachable Machine** (teachablemachine.withgoogle.com): train your own image, sound, or pose model, without programming.
- **Machine Learning for Kids** (machinelearningforkids.co.uk): learn by creating simple projects.
- **Orange** (orangedatamining.com): free program to analyze data visually, without code.
- **Kaggle** (kaggle.com): free datasets and contests to practice.
- **YouTube** (youtube.com): search "what is machine learning" for more examples.

## 🧠 Summary and bridge
- Machine learning teaches the machine with examples, not rules.
- Training data is the textbook; the model is the learned recipe.
- "Garbage in, garbage out": the data rules.
- The machine does not understand: it adjusts numbers by trial and error.
- We already use machine learning every day without knowing it.

In level 08, we will meet neural networks, the artificial "brain" of modern AI.
