# Module 1: Introduction to Artificial Intelligence — Level 15
## Language: EN · Difficulty: Branch
## Estimated time: 3 hours

## 🎯 Level objective
- Understand that an AI is not just the model, but a system with several parts.
- Identify the basic parts: input data, processing, and output.
- Understand where the AI is computed (on the phone or in the cloud).
- Recognize the role of the interface and of the people who supervise.
- Describe the architecture of an app we use every day.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Architecture | The set of parts and connections that form an AI system, like the pieces of an engine. |
| Input | What goes into the system: a photo, a message, a sensor reading. |
| Processing | The internal work: the model receives the input and computes. |
| Output | What comes out of the system: an answer, an image, a prediction. |
| Cloud | Distant servers where the AI is computed, instead of on the phone itself. |
| Interface | The screen or buttons you see and touch; the part of the system that talks to you. |

## 📚 Main lesson
So far we have talked about AI as if it were a single thing. But the reality is more interesting: an AI system is a set of pieces that work together, like the engine of a car. Opening the hood and looking at the pieces takes away the mystery and makes us wiser users.

Let us start with the essentials: every AI has an input, a processing, and an output. The input is what we give it: a photo, a question, a sensor movement. The processing is the internal work, where the model computes. The output is the result: an answer, an image, an alert.

Think of a restaurant. The input is the customers who arrive hungry and the ingredients that come in through the back door. The processing is the kitchen, where the dishes are prepared. The output is the food that arrives at the table. Without one of the three parts, the restaurant does not work. The same happens with AI.

The most famous piece is the model, the "kitchen". It is the set of learned rules that turns the input into an output. But the model alone is good for nothing: it needs data to feed it, an interface to let it talk to you, and an infrastructure to hold it up.

The infrastructure is the restaurant building: the servers, the electricity, the connections. A lot of AI is computed in the cloud, that is, in distant computers that answer when you ask. That is why the phone can have "intelligence": in reality it is asking a huge kitchen that is kilometers away for help.

That explains two everyday things. First: without internet, many assistants become mute, because the kitchen is far away. Second: when the answer takes time, it is because your question travels to the cloud and comes back. The distance is noticeable, even though it is invisible.

The interface is the part you see: the screen, the microphone, the buttons. It is the restaurant waiter. Many times we think that the interface "is" the AI, but in reality it is only the front door. What you type goes in there, travels to the kitchen, and the answer comes back the same way.

There is one more piece, often forgotten: the supervising person. In many serious systems there are humans who review strange results, correct errors, and make difficult decisions. It is called "humans in the loop". The AI is not alone: there are people behind it, and that is good news.

Let us look at a daily example: the weather app. The input data are the measurements of thousands of sensors, satellites, and stations. The processing is a huge weather model that computes in the cloud. The output is the forecast you see on the screen. And behind it there are meteorologists who review the important warnings.

Another example: the bank. The input is your transactions; the processing is a model that learns how you spend; the output is an alert when something strange happens. And a human reviews the alerts before blocking a card. Without that person, there would be more errors and more scares.

Knowing the architecture gives you practical power. If an app fails, you already know how to tell whether the problem is the connection (the trip to the cloud), the interface (the screen), or the model itself. And when you are asked "where is the AI computed?", you can answer with sense.

It also helps you understand the limits. The cloud costs money and consumes energy; that is why some functions are only online. And because the model lives in the cloud, the company can improve it or change its rules without you touching anything: the "intelligence" of your phone can evolve overnight.

Ethics also looks at the architecture. When a system is wrong, who is responsible: the model, the one who trained it, the company that installed it, or the person who supervises it? Thinking about the pieces helps us share responsibilities fairly, instead of blaming a machine.

In the next level, we will see how an AI is evaluated: how to know whether a model is good, bad, or simply exaggerated.

## 💡 Practical examples
1. **Weather app:** sensors and satellites (input), weather model in the cloud (processing), forecast on the screen (output).
2. **Bank:** your transactions (input), fraud model (processing), security alert (output), with a human who reviews.
3. **Voice assistant:** your sentence (input), language model in the cloud (processing), spoken answer (output).

## 🛠️ Guided activity
Step 1. Take your phone and open the weather app (or a maps app).
Step 2. Look at the output: what forecast or result it shows on the screen.
Step 3. Turn off the phone or turn on airplane mode and open the app again. Observe what happens without connection.
Step 4. Reconnect and ask yourself: did the answer take more or less time? What do you think traveled to the cloud?
Step 5. Now open Hugging Face Spaces (huggingface.co/spaces) in the browser and choose a simple space, such as a "text to text" one.
Step 6. Type a short sentence and send it. Identify: what was the input? What was the output?
Step 7. Think about where it was computed: on your computer or on a distant server? How do you know?
Step 8. Draw on paper or write: input, processing, output, cloud, and interface for the weather app. Put the name of each piece next to its part.

## ✍️ Self-assessment exercises
1. What are the three basic parts of every AI system?
2. Explain with the restaurant metaphor what each part does.
3. Why do many assistants not work without internet?
4. What is the interface and why is it not the AI itself?
5. What does "humans in the loop" mean and why is it important?

**Answers:** 1) Input, processing, and output. 2) The input is the customers and ingredients; the processing is the kitchen; the output is the food on the table. 3) Because your question travels to the cloud, where the model is, and it needs the connection to go and come back. 4) It is the screen and the buttons, the front door; the real AI is in the processing, not in what you see. 5) It means that people review and decide together with the system; it avoids errors and shares responsibility.

## ⚖️ Ethical dimension
Seeing AI as a system helps us share responsibilities: when it fails, we must ask who designed the data, who trained the model, and who supervises it. Also, the cloud consumes energy and stores our data: knowing that your question travels to distant servers invites you not to share sensitive information in public assistants. Transparency (that companies explain how their system works) is a right worth demanding.

## 🔓 Open tools
- **Hugging Face Spaces** (huggingface.co/spaces): test models of all kinds and observe inputs and outputs.
- **TensorFlow Playground** (playground.tensorflow.org): see from the inside how a network turns inputs into outputs.
- **Google Colab** (colab.research.google.com): free notebooks where AI runs in the cloud.
- **YouTube** (youtube.com): search "AI system architecture" for animated diagrams.
- **Wikipedia** (wikipedia.org): articles about "machine learning" and "cloud computing".

## 🧠 Summary and bridge
- Every AI has an input, a processing, and an output.
- The model is the kitchen; the interface, the waiter; the cloud, the distant building.
- Without connection, many systems run out of kitchen.
- There are humans who supervise: the AI is not alone.
- Knowing the pieces helps share responsibilities.

In level 16, we will see how an AI is evaluated: the tests, the metrics, and how to know whether a model is trustworthy.
