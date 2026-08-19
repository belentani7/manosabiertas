# Module 5: Automation and Integration — Level 22
## Language: EN · Difficulty: Canopy
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what RPA is: robots that repeat the on-screen tasks we do.
- Recognise when a manual task can be handed to a robot.
- Learn about simple, free RPA tools.
- Record a repetitive task and leave it in the robot's hands.
- Learn the limits and risks of RPA.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| RPA | Robotic Process Automation: robots that imitate clicks and keys. |
| Robot | A program that moves around the screen like us. |
| Record | Teach the robot the task by recording our clicks and keys. |
| Replay | Have the robot repeat the recorded task. |
| Interface | The program screen where we make clicks. |
| Exception | A rare case the robot doesn't know how to handle and needs a person. |

## 📚 Main lesson
We close the Canopy band with a very concrete and very useful tool: RPA. The acronym stands for "Robotic Process Automation". In simple words: a robot that imitates what we do with our hands on the computer screen: opening an application, typing in a field, pressing a button, copying a piece of data, saving a file. All that routine we do by hand, a robot can do.

Let's think of how we used to fill in paper forms: grab the pen, write, move to the next field. On screen, filling in forms is the same: click a field, type, move to the next. It's a repetitive task with your fingers. RPA turns it automatic: the robot clicks the same fields, types the same letters and presses the same button, at the same speed and without getting tired.

The big difference of RPA from everything before is that it doesn't need the applications to be connected. The integrations from the previous levels (Make, Zapier) need applications to "talk" to each other. RPA doesn't: it imitates a person. If we can do the task with clicks and keys, the robot can too. It's like the difference between having a waiter who understands all the cooks (integration) or a robot that copies the dishes as they're made (RPA).

RPA shines in tasks that are: repetitive, the same every time, slow to do by hand and needing no decision-making. Copying data from one sheet to another, filling in a form, renaming many files, moving numbers from one screen to another, downloading reports and saving them in folders. These are "copy and paste" tasks the robot does a thousand times better than us.

RPA tools work in two stages. First, the robot watches us do the task once: that's called recording. While we click and type, the program notes everything. Second, the robot replays the task: it repeats exactly what we recorded, at its own speed, when we tell it or at a fixed time. Record and replay, like a video.

Getting started with RPA is easy because there are free tools that record tasks without programming. On screen you press "record", do the task once, press "stop", and the robot has its recipe. Then you press the replay button and the robot runs it. It's like teaching someone the task by showing them once.

But RPA has an important weakness: the robot does exactly what we taught it, and if the screen changes, it gets lost. If the button moved, if the application was updated or if the field has a different name, the robot fails. That's why RPA tasks must be well defined and robots are reviewed when something changes. It's a rigid robot: good at its thing, clumsy with surprises.

Exceptions are RPA's big limit. When the case isn't the usual one, when the form has a strange field or the data doesn't exist, the robot doesn't know what to do. The right thing is for the robot to stop and notify a person. A good robot doesn't make up solutions: it stops and calls. The person decides the rare case; the robot does the normal one.

RPA also isn't for tasks that change or require understanding. A robot doesn't understand, it imitates. If the task requires interpreting a text, understanding a situation or making a decision, better to use an AI agent or a person. Each tool for its task: integration to connect, RPA to imitate, AI to think, the person to decide.

In daily work, RPA is a great ally of the office workers who do repetitive tasks: it turns hours of copy and paste into minutes of coffee. But it's wise to start with a small task that's done often, not the perfect task. A small task that works gives you confidence to take on bigger ones.

You have to be careful about one danger: letting a robot do delicate tasks without supervision. If the robot handles people's data or money, it needs supervision, alerts and review. A robot that sends an email with personal data by mistake is a quick problem. RPA doesn't remove responsibility: it moves it.

When you finish this level, you close the Canopy band. You know how to connect applications, build AI agents, automate processes and now imitate manual tasks with robots. In the Fruit band, the module's last levels, we'll learn to design large systems: the architecture of enterprise automation.

## 💡 Practical examples
1. **The data dump.** Every day, Luis copies the morning orders from the supplier's website to the control sheet. The RPA robot does it alone at three o'clock.
2. **Renaming files.** Carmen downloads fifty invoices and renames them with the order number. The robot replays the task in one minute.
3. **The closing report.** The robot enters the bank app, downloads the day's statement, saves it in the folder and notifies the manager.

## 🛠️ Guided activity
Step 1: Choose one of your computer tasks that you do often and that's always the same: copying some data, renaming files, filling in a form.
Step 2: Download a free RPA tool (for example, Microsoft's Power Automate Desktop, or a free alternative like tagUI).
Step 3: Open the tool and look for the record button or "Record actions".
Step 4: Press record and do your task once, slowly and in order, without long pauses. Don't do anything strange: the robot will copy every gesture.
Step 5: Press stop when done. The tool will show you the list of recorded steps.
Step 6: Review the list: does it make sense? Are there extra steps? If there's a strange step, delete it or redo the recording.
Step 7: Press replay and watch: the robot will do the task. Check the result with your own eyes.
Step 8: If something fails, look at which step it stopped at and fix it. Repeat until it works.
Step 9: Write on your paper the automated task, how often you'd use it and what you'd do if the screen changes.

## ✍️ Self-assessment exercises
1. What does RPA mean? a) Robots that imitate the tasks we do on screen. b) Appliance repair. c) A coffee brand.
2. What does the RPA robot do? a) It imitates clicks and keys like a person. b) It connects applications to each other. c) It thinks like a person.
3. How do you teach a task to the robot? a) Explaining it in words. b) Recording it: doing the task once while the robot takes notes. c) You don't teach it.
4. What happens if the screen changes? a) The robot adapts on its own. b) The robot may fail because it repeats what was recorded. c) Nothing, it stays the same.
5. What does the robot do with a rare case? a) It makes it up. b) It stops and notifies a person. c) It ignores it.

Answers: 1-a, 2-a, 3-b, 4-b, 5-b.

## ⚖️ Ethical dimension
- Don't let a robot handle personal data or money without supervision: the robot's errors are your responsibility.
- Tell the team that a task is now done by a robot: transparency avoids confusion.
- RPA removes the repetitive, but not the person: make sure nobody is left unattended.
- Always test the robot with test data before real tasks.
- If the robot makes a mistake with third-party data, notify and fix it right away, without hiding it.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| Power Automate Desktop | Microsoft's free RPA | powerautomate.microsoft.com |
| tagUI | Open-source RPA | github.com/kelaberetiv |
| SikuliX | Image-based RPA, free and open | sikulix.com |
| OpenRPA | Open RPA platform | openrpa.openrpa.dk |

## 🧠 Summary and bridge
RPA teaches a robot to imitate our on-screen tasks: record once, replay forever. It's ideal for repetitive tasks, but rigid when things change, and exceptions are left for people. We close the Canopy band. In the next level we start the Fruit: enterprise automation architecture, how large systems are designed.
