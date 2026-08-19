# Module 1: Introduction to Artificial Intelligence — Level 16
## Language: EN · Difficulty: Branch
## Estimated time: 3 hours

## 🎯 Level objective
- Understand why you must test an AI before trusting it.
- Distinguish between training data and test data.
- Understand what accuracy is and why it does not tell the whole story.
- Recognize overfitting: when the machine memorizes instead of learning.
- Evaluate a simple model in practice with new cases.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Evaluation | The process of testing the AI with cases it has never seen to see if it gets them right. |
| Training set | The examples the machine learns from. |
| Test set | New examples, different from the training ones, used to examine the machine. |
| Accuracy | The percentage of hits: out of every 100 cases, how many it solved correctly. |
| Overfitting | When the machine memorizes the training examples and fails at anything new. |
| Benchmark | Standard tests used to compare models with each other. |

## 📚 Main lesson
Imagine we are hiring a cook. Would we ask for their résumé and that's it? No: we would ask them to cook a new dish and taste it. That is evaluating. The same happens with AI: before trusting a system, you must test it. And the way to test it has a trick.

The trick is this: you cannot examine the machine with the same questions it studied with. Think of a school exam. If the student memorizes the answers and the exam is exactly the same, they get a perfect score but have learned nothing. To know whether they really learned, the exam must bring new questions.

The same thing happens with AI. The examples it learns from are called the training set. The new examples, which it has never seen, are called the test set. A good model passes the exam with new questions. A cheating model only memorizes the old ones.

Why is this so important? Because in real life AI always meets new cases. A spam filter, for example, has never seen the email that will arrive tomorrow. If it had only memorized last week's emails, it would be useless. It has to generalize: learn the rule, not the case.

Accuracy is the number that summarizes how much it gets right: if it solves 95 out of every 100 cases correctly, it has 95% accuracy. That sounds good, but you have to look closely. A model that always answers "no disease" can have a very high accuracy if diseases are rare, and still be extremely dangerous.

That is the great deception of numbers: high accuracy does not guarantee that the AI is good. It depends on which cases were put in the test and on what it is deciding. That is why experts use several measures and, above all, test with data that represents real life.

Another key concept is overfitting. Imagine a student who memorizes the answers. On the memory exam they get a perfect score; on the real exam, a zero. The overfitted machine is the same: with the training examples it gets everything right, but with anything new it collapses. Memorizing is not learning.

How is overfitting detected? By comparing: if the machine gets 99% right in training and only 60% in the test, something smells wrong. That difference is the sign that it memorized instead of understanding. In the professional world, checking that difference is the daily bread.

There is also the opposite problem, underfitting: when the model is so simple that it does not learn even the training examples. It is like a cook who only knows how to make bread, no matter what you ask for. It neither memorizes nor generalizes: it is just weak.

In practice, companies and researchers use benchmarks: batteries of standard tests that allow models to be compared with each other. "This model performs better on these tests" is a meaningful sentence because they all took the same exam.

But be careful: a benchmark is not absolute truth either. Exams can be prepared for, and some models improve on the tests but fail in the street. Reality always beats the laboratory. That is why evaluation is not done once, but continuously, with real data and human supervision.

And what role do you play? Being critical of numbers. When a company announces "our AI gets 99% right", ask yourself: with what cases did they test it? Do they represent my reality? A 99% with easy cases is not worth the same as a 90% with hard cases.

Evaluation is also an ethical issue. A medical diagnosis system that fails more with some people than with others is not acceptable, even if its overall accuracy is high. That is why tests must look not only at the average, but at each group. Justice is measured in the details.

In the next level, we will see the art of talking to AI: advanced prompting, to get the most out of assistants.

## 💡 Practical examples
1. **Spam filter:** it is trained with old emails and tested with new emails it has never seen; that is how we know whether it will learn in real life.
2. **Medical diagnosis:** a model is tested with cases from different groups of people; per-group accuracy matters more than the average.
3. **Weather forecast:** it is trained with last year's data and evaluated with this year's data, which it did not know.

## 🛠️ Guided activity
Step 1. Open Teachable Machine (teachablemachine.withgoogle.com) in the browser.
Step 2. Create two classes: "open hand" and "closed fist". Use the computer camera to teach it 5 examples of each.
Step 3. Train the model and test it with the same hand you used to teach it: it will get it right almost always.
Step 4. Now the real test: make gestures you did not teach, like a turned hand or at a different distance. Watch how the hits drop.
Step 5. Add 20 more examples of each class, varying distance and angle. Train again.
Step 6. Repeat the test with new gestures. Compare: did the hits improve with more and better examples?
Step 7. Reflect: what was the training set and what was the test set?
Step 8. Write a conclusion about why new examples are the fire test of an AI.

## ✍️ Self-assessment exercises
1. Why can you not examine the machine with the same questions it studied with?
2. What is the difference between the training set and the test set?
3. What is overfitting and how is it detected?
4. Why does high accuracy not guarantee that the AI is good?
5. What role does the user play when faced with the numbers companies announce?

**Answers:** 1) Because it would memorize and not learn; the exam must bring new questions to prove it generalizes. 2) The training set is the examples it learns from; the test set is new cases it has never seen and with which it is examined. 3) It is when the machine memorizes the training examples and fails at novelties; it is detected when it gets a lot right in training and much less in the test. 4) Because it depends on which cases were tested and what it decides; it can get easy cases right and fail at the important ones. 5) Be critical: ask yourself with what cases they tested it and whether they represent your reality, instead of believing the number.

## ⚖️ Ethical dimension
Evaluating is a way to protect people: an untested model is a risk. But evaluation can also deceive if it is done with data that does not represent everyone. Systems that decide on health, money, or work must be evaluated by groups, not only by average, and independently. Demanding transparency in tests is demanding justice.

## 🔓 Open tools
- **Teachable Machine** (teachablemachine.withgoogle.com): train and test models with your own photos or gestures.
- **TensorFlow Playground** (playground.tensorflow.org): see the difference between training and test performance.
- **Kaggle** (kaggle.com): real datasets to practice evaluations.
- **Hugging Face** (huggingface.co): leaderboards where models are compared with standard tests.
- **YouTube** (youtube.com): search "overfitting explained" for animations of the concept.

## 🧠 Summary and bridge
- Before trusting, you must test with cases the AI has never seen.
- Training is studying; the test is the exam with new questions.
- Memorizing is not learning: beware of overfitting.
- High accuracy can hide injustices.
- Numbers are looked at with a magnifying glass, not believed blindly.

In level 17, we will master advanced prompting: the art of asking the AI for exactly what we want.
