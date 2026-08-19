# Module 1: Introduction to Artificial Intelligence — Level 08
## Language: EN · Difficulty: Root
## Estimated time: 2 hours

## 🎯 Level objective
- Understand what a neural network is using everyday metaphors.
- Understand that neural networks are inspired by the brain, but are not a brain.
- Know what layers are and why "more layers" is called deep learning.
- Understand the role of connections (weights) in learning.
- See that a neural network can be visualized and experimented with online.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Neural network | A system of small connected "nodes" that learns by adjusting the strength of its connections. |
| Artificial neuron | Each small piece of the network that receives signals, transforms them, and passes them on. |
| Layer | A group of neurons that processes information at the same time and hands it to the next one. |
| Deep learning | A network with many layers, capable of learning very complex things. |
| Weight (connection) | The "strength" of each connection, which the system adjusts as it learns. |
| Activation | The signal a neuron sends to the next one when it "lights up". |

## 📚 Main lesson
Neural networks sound like laboratory science, but they can be understood with household metaphors. Imagine you run a huge kitchen brigade. In front of you are hundreds of cooks in a line. The first one receives the customer's order, passes a note to the second, the second adds something and passes it to the third, and so on until the last one, who serves the dish. Each cook does a small job and passes the result to the next one. That is how a neural network works.

Each cook is an artificial neuron. It receives signals (the orders), transforms them a little, and passes them to the next neuron. No single neuron, by itself, does anything impressive. But when thousands are organized in lines, the whole is capable of astonishing things: recognizing your face, translating a language, or understanding what you say.

The lines of cooks are called layers. The first layer receives the input data, for example the points of light in a photo. The middle layers keep refining: one detects edges, another recognizes shapes, another identifies that those shapes together look like an eye. The last layer gives the result: "this is a face". The more layers, the more detailed the recognition. That is called deep learning.

And how does the brigade learn? That is the key: the connections between cooks have a "strength", which is called a weight. When the network gets it right, the weights stay. When it fails, they are adjusted: the connection that helped is strengthened and the one that confused is weakened. With millions of examples, the network keeps fine-tuning the weights until it almost always gets it right. It is like adjusting the stove fire: too strong, you lower it; too gentle, you raise it.

Think of the connections as the threads of a crochet blanket. Each thread holds a part. If a thread is loose, the blanket falls apart; if it is too tight, it distorts the pattern. The network adjusts each thread as it learns. In the end, the blanket (the model) has exactly the right tension for each case.

It is important to clear up a misunderstanding: neural networks are inspired by the brain, but they are not a brain. They do not think, they do not feel, and they have no consciousness. They are mathematics imitating a way of organizing work that proves very effective. It is like an airplane: inspired by birds, but not a bird.

Where did the idea come from? In the 1940s and 1950s, scientists observed that the brain processes information with millions of connected cells, the neurons, which turn on and off. They thought: what if we build a simple imitation of that? That is how the artificial neuron was born, a small device that receives numbers, adds them up, and decides whether to "turn on" or not.

For decades, neural networks were a curiosity. Two things were missing: computing power and data. Without data, there is nothing to learn; without power, there is no way to adjust millions of connections. That is why the great takeoff came in the 2010s, when computers became very fast and data became abundant. Networks stopped being theory and became the engine of everything.

Today, deep neural networks are in the translator, in speech recognition, in photos, in medical diagnosis, and in self-driving cars. When you dictate a message and the phone writes it correctly, a neural network with many layers is working in half a second.

One way to really understand it is to see it. Online there is a free laboratory called TensorFlow Playground where you can play with a small neural network: choose the shape of the data, add layers, and watch the network learn live. It is like peeking through the kitchen window and watching the brigade work.

What you should not expect is for a neural network to "reason". It does not understand the why of things. It learned to get things right, not to understand. That is why it sometimes gets things right for the wrong reasons: for example, if all the dog photos in its training had grass behind them, it may end up identifying grass and not dogs. That is an important danger to know about.

The final metaphor: the neural network is like a big relay team. Nobody runs the whole race; each runner runs their stretch and passes the baton. The complete, coordinated team reaches the finish line. The intelligence is not in a single runner: it is in how they pass the baton. And that, fortunately, can be trained, corrected, and improved.

In the next level, we will see the other essential ingredient: training data.

## 💡 Practical examples
1. **Phone dictation:** when you dictate and the text comes out correct, a many-layered neural network has processed your voice in an instant.
2. **Family photos:** the network that groups your grandson's photos first detects edges, then eyes and nose, and finally "recognizes" the full face.
3. **Translation:** the automatic translator uses layers that go from letters to the meaning of the whole sentence.

## 🛠️ Guided activity
Step 1. Open the browser and go to TensorFlow Playground (playground.tensorflow.org).
Step 2. Look at the right side: those are the data the network must learn to separate (blue and orange dots).
Step 3. In the center you will see the network's layers with their neurons and connections.
Step 4. Press the "Play" button (triangle) at the top left.
Step 5. Watch how the network learns: the background colors change as it adjusts its connections.
Step 6. When it finishes, press "Reset" and add an extra layer with the "+" button.
Step 7. Press "Play" again and see if it learns faster or differently.
Step 8. Change the shape of the data with the menu above and see that some shapes are easier than others. You have watched a neural network work.

## ✍️ Self-assessment exercises
1. Explain with the kitchen brigade metaphor what a neural network is.
2. What is a layer and what does "deep learning" mean?
3. What is a weight (connection) and how does it change while the network learns?
4. Are neural networks like the human brain? What are they really?
5. Why can a network get things right "for the wrong reasons"?

**Answers:** 1) It is a team in a line where each worker receives signals, transforms them, and passes them to the next one until the result is obtained. 2) A layer is a group of neurons that processes at the same time; deep learning is a network with many layers. 3) It is the strength of each connection; the network adjusts it: it reinforces what works and weakens what confuses. 4) They are inspired by the brain, but they are organized mathematics, without thought or consciousness. 5) Because it learned superficial patterns, such as the background of photos, instead of what is essential.

## ⚖️ Ethical dimension
Neural networks can learn what is right for the wrong reasons, and that is a silent risk. A system that "gets it right" by discriminating (for example, rejecting loans based on neighborhood) seems to work, but it perpetuates injustice. That is why model auditing is so important: it is not enough for it to get things right; you must check why it gets them right. As a user, distrust systems that do not explain their decisions.

## 🔓 Open tools
- **TensorFlow Playground** (playground.tensorflow.org): experiment with neural networks without installing anything.
- **YouTube** (youtube.com): search "how neural networks work" for animated videos.
- **Teachable Machine** (teachablemachine.withgoogle.com): train your own network in minutes.
- **Google Arts & Culture** (artsandculture.google.com): visual explorations of AI and creativity.
- **Wikipedia** (wikipedia.org): article about "artificial neural network" to look up concepts.

## 🧠 Summary and bridge
- A neural network is a relay team that transforms signals layer by layer.
- Each neuron does little; the organized whole does wonders.
- Weights are the strength of connections, adjusted through learning.
- Networks are inspired by the brain, but they are not a brain.
- Sometimes they get things right for the wrong reasons: models must be audited.

In level 09, we will see training data: where it comes from and why it is the foundation of everything.
