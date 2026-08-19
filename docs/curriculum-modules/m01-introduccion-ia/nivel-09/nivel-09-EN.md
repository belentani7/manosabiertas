# Module 1: Introduction to Artificial Intelligence — Level 09
## Language: EN · Difficulty: Root
## Estimated time: 2 hours

## 🎯 Level objective
- Understand what training data is and where it comes from.
- Understand why the quantity and quality of data matter more than the technique.
- Learn about the work of labeling data and who does it.
- Reflect on the privacy and copyright of data.
- Create a small dataset by hand to see how learning works.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Dataset | An ordered collection of examples used to train a model. |
| Label | The "correct answer" placed on each example so the machine can learn. |
| Labeler | The person who reviews and classifies the examples, often appearing nowhere. |
| Data quality | How well the examples represent the reality we want to teach. |
| Copyright | The creator's rights over their work; data has them too. |
| Consent | A person's permission to use their data; without it, it should not be used. |

## 📚 Main lesson
We already know that machines learn from examples. But where do those examples come from? In this level, we will open the box and look at the raw material: training data. It is the foundation of everything, and understanding it is understanding the strengths and weaknesses of today's AI.

A dataset is, in essence, an ordered list of examples with their correct answer. For example, to teach a system to tell apples from pears, the dataset would have thousands of photos, each with its label: "apple" or "pear". The model studies the list, finds the patterns, and learns. Without a list, there is no learning.

Who puts the labels? Behind almost all modern AI there is an invisible army of people who look at images, audios, and texts and classify them. They are the labelers. It is real, repetitive, and sometimes poorly paid work that almost never makes the news. Every time a system recognizes your voice or a traffic sign, someone spent hours teaching it with examples.

It is good to know this for two reasons. First, for justice: the AI we admire is not born on its own; it is born of human work. Second, for humility: if the labels have errors, the machine will learn those errors. Labelers, however careful they are, are not perfect, and their mistakes slip into the models.

Where does the data come from? From many places. Scientists use public datasets such as ImageNet, with millions of classified photos. Companies use their own data: purchases, searches, messages. And large language models are trained on a gigantic amount of text taken from the internet: web pages, books, forums. All that text is their "library".

Here an important debate appears: copyright. Can a company train a model with other people's books and articles without paying? It is an open discussion in courts and parliaments. The key point for us is this: data is neither free nor neutral. Someone created it, and using other people's data without permission has consequences.

Another thing you should know: quantity matters, but quality matters more. A small, clean dataset usually produces better models than a gigantic one full of errors. It is like studying: memorizing ten thousand confusing notes is worse than studying a hundred clear pages well. The best companies invest heavily in cleaning and reviewing their data.

Quality includes variety. If we train a fruit recognizer only with perfect photos, it will fail with real photos: with shadows, low light, or side angles. The real world is varied, and the model must see that variety so as not to fail. That is why it is said that data must represent the world we want to manage, with all its diversity.

And here comes the most delicate part: privacy. Much personal data — photos, voices, messages — is used to train models, sometimes without the person knowing or consenting. Your face may have "helped" train a recognition system without you knowing it. Consent should be the rule, not the exception.

Let us think about your daily life. When the phone suggests replies, when the bank decides whether to give you a loan, when the doctor uses a diagnostic system: behind it there is training data that may include people like you. Asking where that data came from is not paranoia; it is digital citizenship.

There is a detail that is curious and worrying at the same time: models are trained on past data, but they live in the present. If the world changes — a fashion, a law, a new technology — the model becomes outdated. It is like an employee who learned their trade twenty years ago and has not kept up. Keeping models up to date is constant work.

There is also a curious circle: AI generates new content, and that content can be used as data to train the next AI. It is like photocopying photocopies: each copy loses quality. Experts already talk about the risk that AIs trained on other AIs' content degrade their results. The raw material gets contaminated.

Knowing training data changes the view: AI is not a magic box; it is a sponge that absorbs what we give it. Give it good data, get good answers; give it dirty data, get dirty answers. That is why the responsibility of those who create models is enormous, and the curiosity of those who use them too.

In the next level, we change bands: we leave the Root and enter the Stem, seeing how machines learn according to the type of learning.

## 💡 Practical examples
1. **At the supermarket:** the image-based fruit price reader was trained on thousands of photos labeled by real people.
2. **At the bank:** the credit system was trained on historical loan data; if that data had biases, the system inherits them.
3. **With the doctor:** a system that reads X-rays was trained on thousands of plates annotated by radiologists.

## 🛠️ Guided activity
Step 1. Take a piece of paper and a pen.
Step 2. Draw a table with four columns: "Example", "Color", "Shape", "Is it an apple?".
Step 3. Write six rows: three apples and three pears, with simple features (red, green, round, elongated...).
Step 4. Review: what features do you see that separate apples from pears in your examples?
Step 5. Add a "weird" row: a green apple with an elongated shape. What do you think the model would answer?
Step 6. Think: what would happen if your six examples were all red apples? The model would not know how to recognize pears.
Step 7. Compare with the real world: life has more variety than your examples, which is why thousands of photos are needed.
Step 8. Optional: open Kaggle (kaggle.com), search "fruits", and see what real datasets with thousands of labels look like.

## ✍️ Self-assessment exercises
1. What is a dataset and what does each example contain?
2. Who does most of the data labeling and why does it matter to know it?
3. What is more important, the quantity or the quality of data? Why?
4. How are copyright and training data related?
5. What is the risk of training an AI on content generated by other AIs?

**Answers:** 1) It is a list of examples with their correct answer (label) used to train a model. 2) Labelers, real and often invisible workers; knowing this helps understand where AI comes from and value their work. 3) Quality: a small, clean set teaches better than a giant, dirty one. 4) Data created by others (books, articles, photos) has rights; using it without permission is an open debate in courts. 5) That content degrades, like photocopying photocopies: models trained on other AIs' content lose quality.

## ⚖️ Ethical dimension
Training data hides far-reaching ethical decisions. Was people's data used without their consent? Were the labelers paid fairly? Does the data represent the whole society or only a few? Behind every model there are human choices that can discriminate or exclude. Demanding transparency about data is not technical: it is demanding that AI be built with dignity and justice.

## 🔓 Open tools
- **Kaggle** (kaggle.com): thousands of public, free datasets to explore.
- **Google Dataset Search** (datasetsearch.research.google.com): a search engine for public datasets.
- **ImageNet** (image-net.org): the famous dataset of millions of classified images.
- **OpenML** (openml.org): open platform of machine learning data.
- **Common Crawl** (commoncrawl.org): the open archive of web pages used to train many models.

## 🧠 Summary and bridge
- Training data is the list of labeled examples the machine learns from.
- Behind it is invisible human work: the labelers.
- Quality and variety matter more than quantity.
- Data has copyright and raises privacy concerns.
- AI is a sponge: it absorbs what we give it.

In level 10, we enter the "Stem" band: how machines learn (supervised, unsupervised, and reinforcement).
