# Module 5: Automation and Integration — Level 12
## Language: EN · Difficulty: Stem
## Estimated time: 3 hours

## 🎯 Level objective
- Understand how artificial intelligence is integrated inside a flow.
- Make an automation send a text to an AI model and receive a reply.
- Use AI to summarise, write or classify inside a flow.
- Combine variables, conditions and AI in an automation.
- Be aware that the AI's reply is always reviewed.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| AI model | The program that reads and generates texts, like an assistant that thinks. |
| Prompt | The instruction we give the AI: what we want it to do. |
| Reply | The text the AI returns. |
| Summarise | Make a shorter text with the essentials. |
| Classify | Put a text in a category: urgent, normal, spam. |
| Review | Read and check what the AI did before using it. |

## 📚 Main lesson
Until now our automations moved data from one place to another and decided with conditions. Today we're going to teach them something new: to think. We're going to integrate artificial intelligence inside a flow. It's like putting in the kitchen an assistant who reads, summarises and writes: a very fast assistant that, mind you, must be reviewed.

The artificial intelligence we use today consists of programs that have read enormous amounts of text and learned to understand and generate it. When we give them a clear instruction, they reply with text. In module 4 we already learned to ask AI for texts. Now we're going to teach our automation to ask for them on its own.

How does AI fit into a flow? Imagine that every morning fifty emails arrive at the club. We want a summary of each one without reading them all. The automation takes each email (variable), sends it to the AI with the prompt "summarise this text in three lines", receives the reply and sends it to our email or message. That's the cycle: take, ask, receive, deliver.

In integration tools, AI is one more step, like another link in the chain. You look for the AI model's app (for example, OpenAI, Google Gemini, or Make's own modules), choose the "create text" or "reply to a prompt" event, and write the prompt. Inside the prompt we can put variables: the email text, the member's name, the question we want it to answer.

The prompt is the instruction. A good instruction for AI is clear and specific: "Summarise the following text in three lines: [email text]". The better we explain what we want, the better it will reply. It's like giving an assistant precise instructions in the kitchen: "chop the onions into small cubes", not "do something with the onions".

AI can also classify. We can ask it: "Tell me if this message is urgent, normal or advertising. Reply with only one word: urgent, normal or advertising". The reply is a single word the flow can use in a condition. That way we combine AI's intelligence with the if-then logic from level 10.

Summaries are another great use. A sheet with a hundred comments can be summarised by AI: "Tell me the three topics that come up most". The automation gathers the comments, the AI analyses them and delivers the result. We save hours of reading and keep the essence.

But here comes the most important lesson: AI makes mistakes. It can invent data, misinterpret a tone or reply with something absurd. That's why what AI produces is always reviewed before sending it to other people or making decisions. AI is an assistant, not the boss. The final judgement is human.

Our flows should treat the AI's reply as just another variable, one that's stored, shown and reviewed. We can put the reply in an email so we read it before publishing, or use it in a condition. But we should never let the flow send an AI reply to everyone without passing through a review.

It's best to start with simple, low-risk uses. A summary for yourself, a classification for sorting, a message draft you then review. Don't start sending AI replies to hundreds of people without control. Prudence is earned through practice.

Integration tools offer AI with free limits. To start, the free plan is usually enough. AI consumes a little "fuel" with each prompt, so it's wise not to ask it for unnecessary summaries. Every prompt costs something, however small.

When you finish this level you'll have an automation that thinks: it reads a text, summarises or classifies it and delivers it to you. It's the first step towards the AI agents we'll see in the Canopy band. Always remember: the machine suggests, the person decides.

## 💡 Practical examples
1. **The daily summary.** Every morning, the flow gathers the new emails, the AI summarises them in five lines and the summary arrives on the coordinator's phone.
2. **The incident classification.** The AI reads each incident and replies "urgent", "normal" or "advertising". The flow's condition sends the urgent ones to the person in charge.
3. **The reply draft.** When an information request arrives, the AI writes a reply draft and the flow saves it in a document for human review.

## 🛠️ Guided activity
Step 1: Open your integration tool and create a new scenario called "Daily summary" (or your topic).
Step 2: Add the trigger: for example, in Gmail, the "New email" event or in Google Sheets "Watch rows" with a comments sheet.
Step 3: Add the AI step: look for "OpenAI" or "Artificial intelligence" in the connectors, choose the "Create text" or "Complete" event and connect with your account (it will ask for a key or sign you in).
Step 4: In the prompt field, write: "Summarise the following text in three lines: [insert the variable with the text]".
Step 5: In the reply or model field, leave the recommended option or choose a simple, cheap model.
Step 6: Add a message action (Telegram): "Summary: [variable with the AI's reply]".
Step 7: Test with a real text (a test email or a comment). Look at the summary that arrives.
Step 8: Review the reply with a critical eye: is it correct? did it invent something? Write down what you'd ask differently.
Step 9: Activate the scenario and decide how you'll use it: maybe only for yourself, maybe with review before sharing.

## ✍️ Self-assessment exercises
1. What does AI do inside a flow? a) It reads and generates texts when we ask it to. b) It repairs the cables. c) It turns on the computer.
2. What is the prompt? a) The automation's name. b) The clear instruction we give the AI. c) A type of button.
3. Can the AI's reply be used in a condition? a) No, it's only text. b) Yes, for example if it replies "urgent" or "normal". c) Only in Make.
4. Does AI always get it right? a) Yes, it never fails. b) Sometimes it's wrong or invents data. c) It only fails on Mondays.
5. What do we do with the AI's reply before sending it to others? a) We send it as is. b) We always review it. c) We delete it.

Answers: 1-a, 2-b, 3-b, 4-b, 5-b.

## ⚖️ Ethical dimension
- AI can invent data or reply with false confidence: never use it to make decisions about people without human review.
- Don't send unnecessary personal data to AI: send only what's needed for the task.
- The texts AI generates can contain biases or errors: review them, especially if they go to many people.
- Don't pass off an AI text as written by a real person without saying so, if the context demands it.
- AI is your tool: you decide what you ask it, when you use it and how you review its work.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| OpenAI (in Make/Zapier) | Asking AI for summaries and texts | openai.com (with free limits) |
| Google Gemini | AI model with free accounts | gemini.google.com |
| Ollama | Local, free AI, without internet | ollama.com (free) |
| Hugging Face | Open AI models | huggingface.co |

## 🧠 Summary and bridge
AI integrates into the flow as one more step: it receives a prompt with variables, returns a reply we store and use. It summarises, classifies and writes, but its work always has to be reviewed. We already read, decide and think with the automation. In the next level we'll learn error handling: what the flow does when something fails.
