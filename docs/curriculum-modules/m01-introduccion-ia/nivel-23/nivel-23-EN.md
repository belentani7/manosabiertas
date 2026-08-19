# Module 1: Introduction to Artificial Intelligence — Level 23
## Language: EN · Difficulty: Fruto
## Estimated time: 6 hours

## 🎯 Level Objective
- Understand what an autonomous agent is and how it differs from an assistant.
- Know the components: goal, tools, memory, action loop.
- Identify when an agent is useful and when it's a risk.
- Learn to supervise an agent without letting it act alone without control.
- Reflect on responsibility when AI acts on its own.

## 📖 Essential Vocabulary
| Term | Simple Explanation |
|---|---|
| Autonomous agent | An AI that receives a goal and decides the steps to achieve it on its own. |
| Action loop | The cycle: observe, plan, act, learn, repeat. |
| Tools | What the agent can use: search, calculator, email, code. |
| Memory | What the agent remembers from what it has done and seen. |
| Human supervision | A person who reviews and approves what the agent does. |
| Alignment | That the agent does what we want, not just what we literally asked. |

## 📚 Main Lesson
Until now AI waited for our command: we asked, it answered. Autonomous agents go a step further: we give them a goal and they decide what to do, in what order, with what tools, and keep going until finished. It's like hiring an intern who doesn't need you to specify every step, just the result you want.

An agent has four pieces. First: the goal, what we want to achieve ("find three vegetarian lentil recipes and email them to me"). Second: the tools, what it can use (web search, email, calculator, Python). Third: memory, what it remembers to avoid repeating mistakes. Fourth: the action loop, the engine: observe what happens, plan the next step, act, learn from the result, and repeat.

Let's see an example. You tell an agent: "organize my trip to Madrid next week". The agent searches trains, compares prices, checks hotels, reviews weather, books the best option, and sends you the itinerary. You only gave the goal; the agent did the rest. It sounds wonderful, and it is, but it has risks.

The first risk is that the agent makes a mistake. It might book the wrong train, a hotel that doesn't exist, or spend more than budgeted. That's why human supervision is mandatory: the agent proposes, the person decides. Before booking, the agent shows you the option and you say yes or no. Without that brake, an agent's error is your error.

The second risk is alignment. You ask "delete old emails" and the agent also deletes important ones because "they were old". It did what you literally asked, not what you wanted. Alignment is the central problem of advanced AI: ensuring the agent understands the intent, not just the command. That's why goals must be precise and bounded: "archive emails older than one year without the 'important' label".

The third risk is opacity. The agent does many things in the background and you don't see the process. If something fails, you don't know why. Good agents leave a trace: a log of what they searched, what they decided, why. Demand traceability: if you can't see what it did, don't trust it.

The fourth risk is dependence. If you delegate everything to agents, you lose practice and judgment. Knowing how to search, compare, decide is a skill that rusts if unused. Use agents for the tedious, but keep control of what matters.

When to use an agent? For repetitive tasks, with clear steps, under supervision: "every Monday summarize minutes and send them", "watch this product's price and alert me if it drops". When NOT? For health, money, relationship decisions, or when errors hurt. There, you decide.

Responsibility is always human. The agent is a powerful tool, but the person who sets the goal, provides the tools, supervises, and answers for consequences is the human. There's no "the agent did it". You did it, using an agent.

In the next level we'll enter scientific AI: how AI is transforming science, and the challenge of alignment at scale.

## 💡 Practical Examples
1. **Shopping agent:** goal "buy the grocery list at the best price"; tools: supermarket sites, price comparator; supervision: you approve the cart before paying.
2. **Research agent:** goal "find 10 studies on sleep in people over 60"; tools: Google Scholar, summarizer; supervision: you review the list before using it.
3. **Calendar agent:** goal "find slots for the club meeting"; tools: calendar, email; supervision: you choose the final time.

## 🛠️ Guided Activity
Step 1. Choose a repetitive task of yours (price comparison, email summarization, appointment finding).
Step 2. Write the goal with clear boundaries: what yes, what no, how much at most.
Step 3. Test a simple agent: use ChatGPT with "Custom GPT" or a tool like AutoGPT (free web version).
Step 4. Give it the goal and observe: what does it search? What does it decide? What does it propose?
Step 5. Before it executes the final action (buy, send, delete), stop it and review.
Step 6. Note: did it save time? Did it make mistakes? What boundary was missing?
Step 7. Rewrite the goal with learned boundaries and test again.
Step 8. Decide: does this task deserve an agent or do you do it better?

## ✍️ Self-Assessment Exercises
1. What are the four pieces of an autonomous agent?
2. What is the action loop and what is it for?
3. Why is human supervision mandatory?
4. What is alignment and why does it sometimes fail?
5. Who is responsible if an agent makes an error?

**Answers:** 1) Goal, tools, memory, action loop. 2) The observe-plan-act-learn-repeat cycle; it's the engine that makes the agent advance on its own. 3) Because the agent can make mistakes, overspend, or delete important things; the person must approve the final action. 4) It's that the agent does what we want, not just what we literally asked; it fails when the goal is vague or unbounded. 5) The person who set the goal, provided the tools, and supervised: responsibility is always human.

## ⚖️ Ethical Dimension
An autonomous agent amplifies the power of its user. It can do much good (free time, help those who don't know how) and much harm (cascading errors, opacity, skill loss). Never use an agent to decide for others, to act on someone else's behalf without permission, or to evade your responsibility. Supervision isn't optional: it's the brake that prevents a small error from becoming a big one.

## 🔓 Open Tools
| Tool | Purpose | Where to Get It |
|---|---|---|
| Custom GPTs (ChatGPT) | Create agents with instructions and tools | chat.openai.com |
| Gemini Gems | Google's personalized agents | gemini.google.com |
| AutoGPT (web) | Open-source agents to test | github.com/Significant-Gravitas/AutoGPT |
| LangChain | Library for building agents (advanced) | github.com/langchain-ai/langchain |

## 🧠 Summary and Bridge
- An autonomous agent receives a goal and decides steps on its own.
- Four pieces: goal, tools, memory, action loop.
- Mandatory supervision: agent proposes, person decides.
- Alignment: precise goal with boundaries so it does what we want.
- Responsibility always human.
In Level 24 we'll see how AI is transforming science and the challenge of alignment at scale.