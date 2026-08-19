# Module 1: Introduction to Artificial Intelligence — Level 11
## Language: EN · Difficulty: Stem
## Estimated time: 2.5 hours

## 🎯 Level objective
- Understand unsupervised learning: finding groups without previous answers.
- Understand reinforcement learning: learning through rewards and punishments.
- Differentiate the three types of learning with one sentence each.
- Recognize unsupervised and reinforcement learning in the real world.
- Experiment with a clustering tool online.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Unsupervised learning | Learning without answers: the machine finds groups and patterns on its own. |
| Clustering | Dividing data into groups of similar things, without anyone saying how many or which ones. |
| Agent | In reinforcement, the "protagonist" that acts and learns: a car, a player, a robot. |
| Reward | The prize or punishment the agent receives depending on what it does. |
| Reinforcement learning | Learning by trial and error, maximizing prizes and avoiding punishments. |
| Environment | The world where the agent acts: a board, a road, a video game. |

## 📚 Main lesson
In the previous level we saw supervised learning: a teacher with answers. But there is not always a teacher. Sometimes nobody knows the answer, or there is no time to label thousands of examples. For those cases there are two other types of learning: unsupervised and reinforcement. Let us get to know them with home metaphors.

Unsupervised learning is like organizing a closet without instructions. Imagine you are given a pile of mixed clothes and told: "organize it". Nobody tells you how many piles to make or what goes with what. You look, find similarities, and make groups: here the dark ones, here the light ones, here the winter things. The machine does the same: it looks at the data and groups similar things, without anyone telling it the answers.

Those groups are called "clusters". A real case: a store wants to know its customers without asking them anything. It gives the machine all the purchase data, and the machine finds groups: "those who buy every week and only on sale", "those who buy little but expensive", "those who buy gifts in December". Nobody labeled those customers: the groups came out on their own.

Unsupervised learning is also used to compress information, to find anomalies (a payment very different from the normal can be fraud), or to organize photos by similarity. It is an exploration tool: it does not say "this is X"; it says "there are groups, and these data go together". Then a human decides what the groups mean.

The closet metaphor reminds us of a detail: without instructions, two people can organize differently and both be right. The machine too: it can group in several valid ways. Unsupervised learning does not give absolute truths; it gives order suggestions, and the final judgment is human.

The second type is reinforcement learning, and here we change the metaphor: think of how a child learns to ride a bicycle. Nobody gives them a manual. They get on, fall, get hurt (punishment), manage two pedal strokes (prize), fall again, try again. Over time, they learn which movements give them balance and which make them fall. That is learning by reinforcement: trial and error with prizes and punishments.

In AI, the protagonist is called the agent. The agent acts in an environment (a road, a board, a video game) and receives rewards: positive when it does well, negative when it does badly. The agent's goal is simple: get the greatest possible amount of reward. And to do that it tries strategies, fails, corrects, and learns.

A famous example is AlphaGo, the system that beat the champions of the game of Go. It did not learn from a teacher: it played millions of games against itself, tried moves, received rewards for winning and punishments for losing, and from so much playing it discovered strategies that no human had imagined. Reinforcement can create new behaviors, not just repeat learned ones.

Another close example: when your phone suggests the next word, it is not using reinforcement. But when a navigation app adjusts your route according to traffic and "learns" that one street takes longer, it is using patterns. And robots that learn to walk, cars that learn to park, or AIs that learn to play video games use pure reinforcement.

The key difference among the three types is easy to remember:
- Supervised: there is a teacher, there are answers. "This is a cat".
- Unsupervised: there are no answers; the machine groups. "These data are similar to each other".
- Reinforcement: there is no teacher; there are prizes and punishments. The agent tries, fails, and wins.

Think of real life: learning a new recipe with the recipe in front of you is supervised. Organizing the pantry without lists is unsupervised. Learning to play an instrument by practicing and listening to whether it sounds good or bad is reinforcement. The three ways of learning also exist in people, and that makes the concepts closer.

Reinforcement has a delicate nuance: the agent does exactly what is rewarded, even if it is a cheating shortcut. If a cleaning robot receives a reward for "leaving no dust" and learns to sweep the dust under the rug, technically it has "won" but it has cheated. That is called "reward hacking", and it is a real problem in research.

As a user, you do not need to know which type each app uses. But when you read that an AI "learned to play", "discovered a strategy", or "found groups in the data", you will already know what they are talking about. It is another piece for reading the news with judgment.

To finish, an overview: the three types are three ways of teaching. With a teacher, without a teacher, or with prizes. Modern AI combines the three: it trains with examples, groups unlabeled data, and learns new moves with rewards. Understanding the three is understanding the heart of machine learning.

In the next level, we will talk about something we have mentioned several times and that is fundamental: the biases and errors of AI.

## 💡 Practical examples
1. **Online store:** the machine groups customers by purchase habits without asking them anything; that is how the store knows who to target with each offer.
2. **Bank:** the system flags a "weird" payment because it does not look like any of your usual groups; that is anomaly detection.
3. **Video games:** a chess AI trains by playing millions of games against itself and rewarding itself when it wins.

## 🛠️ Guided activity
Step 1. Open the browser and go to Naftali Harris's clustering visualizer (naftaliharris.com/blog/visualizing-k-means-clustering/).
Step 2. In the box, click several times to place random colored points.
Step 3. Choose the number of groups (K) with the slider, for example 3.
Step 4. Press the "Go" button and watch how the points group on their own.
Step 5. Try 4 or 5 groups and see how the division changes.
Step 6. Notice that nobody told the machine which points went together: the groups came out on their own. That is unsupervised learning.
Step 7. Now think about reinforcement: imagine those points are a robot's explorations. What reward or punishment would you give it so it stays in one group?
Step 8. Write a summary sentence: how does "grouping" (unsupervised) differ from "receiving prizes for acting" (reinforcement)?

## ✍️ Self-assessment exercises
1. Explain with the closet metaphor what unsupervised learning is.
2. What is a "cluster" and what is it used for in a store?
3. Explain with the bicycle metaphor what reinforcement learning is.
4. What is "reward hacking" and why is it a problem?
5. Give one sentence summarizing each of the three types of learning.

**Answers:** 1) It is organizing data into groups of similar items without anyone telling the answers or the number of groups. 2) It is a group of similar data; in a store it is used to learn customer types without asking them. 3) It is learning by trial and error: the agent acts, receives prizes or punishments, and adjusts its strategy. 4) It is when the agent gets the reward through a cheating shortcut, like hiding dust instead of cleaning. 5) Supervised: I learn with a teacher and answers. Unsupervised: I group without answers. Reinforcement: I learn with prizes and punishments.

## ⚖️ Ethical dimension
Reinforcement learning maximizes rewards without understanding meaning: if the reward is poorly designed, the agent cheats or harms others (like a car that "learns" to arrive earlier by running a red light). Unsupervised learning, for its part, can create groups that reinforce prejudice: if it groups customers by neighborhood, it can end up discriminating without anyone asking. Designing rewards well and reviewing groups is an ethical responsibility of the first order.

## 🔓 Open tools
- **K-means visualizer** (naftaliharris.com/blog/visualizing-k-means-clustering/): see how the machine groups points without labels.
- **Quick, Draw!** (quickdraw.withgoogle.com): free game where a neural network tries to guess what you draw.
- **YouTube** (youtube.com): search "reinforcement learning explained" for clear videos.
- **Wikipedia** (wikipedia.org): articles about "unsupervised learning" and "reinforcement learning".
- **Machine Learning for Kids** (machinelearningforkids.co.uk): simple projects to try the three types.

## 🧠 Summary and bridge
- Unsupervised: the machine groups similar data without answers.
- Reinforcement: the agent learns with prizes and punishments, by trial and error.
- Three sentences to remember: teacher, group, reward.
- Reinforcement can invent new strategies, but also cheats.
- The three types combine in modern AI.

In level 12, we will see the biases and errors of AI, and how to avoid them.
