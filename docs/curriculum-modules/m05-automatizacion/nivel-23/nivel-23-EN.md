# Module 5: Automation and Integration — Level 23
## Language: EN · Difficulty: Fruit
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what enterprise automation architecture is.
- See the organisation as a set of connected processes.
- Learn the layers of a system: data, processes, presentation.
- Learn to design a large system in small parts.
- Know that a good system is designed before it's built.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Architecture | The overall blueprint of how the whole system is organised. |
| Layer | One part of the system: the data, the logic, the screen. |
| Data | The information the system stores and moves. |
| Process | Each chain of steps inside the system. |
| System | All the pieces working together. |
| Scalable | Grows without breaking when the workload increases. |

## 📚 Main lesson
We enter the Fruit band, the module's last, where we'll see the whole picture. Until now we've built loose automations: a flow here, a bot there, a robot for another task. In these three levels we'll learn to see it all together, like a whole house and not loose bricks. That's called automation architecture.

Let's think of a house. A house isn't a pile of bricks: it's a thought-out structure, where every room has its place, the cables run through the walls and the water reaches every tap. If we pile bricks without a blueprint, we have a heap, not a house. Automation architecture is the organisation's blueprint: how the pieces are arranged so everything works together.

An organisation, whether a company, an association or a cooperative, does many things at once: it serves people, manages money, keeps papers, notifies, informs. Each of those activities is a process, and processes touch each other: registering a member generates a payment, which generates a receipt, which is stored in the accounts. Architecture draws those connections.

To organise so much work, layers are used. The data layer is the basement: the sheet, the database, the memory where information lives. The process layer is the first floor: the automations that move the data and do things. The presentation layer is the facade: the screens, bots and notices people see. Separating layers is like separating the pantry from the kitchen and the table: everything in its place, nothing getting in another's way.

The big lesson of architecture is that a large system isn't built all at once: it's designed and built in parts. First you draw the whole blueprint, with its layers and processes. Then you build one piece, test it, and add the next. It's like the house: you put up the structure first, then furnish it room by room.

A key idea of architecture is that data is stored once and used in many places. If the members' sheet is a single one, all processes read from the same source and all say the same thing. If each process had its own copy, soon there'd be three versions of the truth. The rule is: one piece of data, one house, many doors.

You also think about the future. A good system is scalable: it can grow without breaking. If today the association has a hundred members and tomorrow a thousand, the system must cope. That's why processes are designed so they don't depend on one person, review themselves and have failure alerts. Scalable means the house can take more rooms without knocking down walls.

Designing a whole system can seem like a job for specialists, and partly it is. But what matters in this course is judgement: knowing how to look at the organisation with an architect's eyes, asking what layers exist, how processes connect and where the weak point is. With that judgement, we talk to specialists as equals and ask for the right thing.

Good automation architecture rests on three pillars. First, clarity: every process is understood, documented and has a responsible person. Second, robustness: failures are alerted and don't break the whole system. Third, humanity: important decisions and dealing with people stay in human hands. A system without those pillars is a house of cards.

Another principle: don't automate just to automate. Architecture asks first "what problem are we solving?" and only then "with which tool?". Sometimes the answer is to automate nothing: paper and conversation are perfect. The good architect says no more often than yes. It's the value rule taken to the whole organisation.

Documenting the whole system is the final touch: a general blueprint where everything can be seen, with the processes, responsible people and tools. That blueprint is updated whenever something changes. It's the organisation's memory, the one that lets a new volunteer understand how everything works without asking all the time.

When you finish this level you'll know how to look at an organisation as a system: layers, processes and connections, designed in parts and with clear pillars. In the next level we'll see orchestration: how several AI agents are coordinated to work together as a team.

## 💡 Practical examples
1. **The complete association.** The association's blueprint: a single members' sheet (data), flows for registrations, payments and notices (processes), and a bot that serves the neighbours (presentation).
2. **The small business.** Orders come in through the website, invoicing is automated, inventory updates itself and the accounts read from the same source.
3. **The community workshop.** An enrolment system with separated layers: the students' data, the places process and the screen where people sign up.

## 🛠️ Guided activity
Step 1: Choose an organisation you know well: your association, your business or your community.
Step 2: On a piece of paper, draw three stacked drawers: "Data" at the bottom, "Processes" in the middle, "Presentation" at the top.
Step 3: In the Data drawer, write everything the organisation stores: members, payments, minutes, inventory.
Step 4: In the Processes drawer, write the chains we've built in this module: registrations, notices, filters, summaries.
Step 5: In the Presentation drawer, write what people see: the bot, the notifications, the emails, the dashboard.
Step 6: Draw arrows between the drawers: which process uses which data and which screen shows which process.
Step 7: Look in your drawing for the weak point: a piece of data stored in two places? A process without a responsible person?
Step 8: Write an architecture improvement on your paper: what you'd connect, centralise or leave on paper.
Step 9: Keep the blueprint: we'll use it in the next two levels.

## ✍️ Self-assessment exercises
1. What is automation architecture? a) The overall blueprint of how the whole system is organised. b) A drawing of the facade. c) A type of computer.
2. What are the layers of a system? a) Data, processes and presentation. b) Roof, walls and floor. c) There are no layers.
3. How is a large system built? a) All at once. b) In parts, designing first and building after. c) Without a blueprint.
4. Where is a piece of data stored so everyone says the same thing? a) In each process, separately. b) Once, in a single source. c) On paper.
5. What does it mean for a system to be scalable? a) It grows without breaking. b) It climbs stairs. c) It's small.

Answers: 1-a, 2-a, 3-b, 4-b, 5-a.

## ⚖️ Ethical dimension
- An architecture must serve people, not the other way around: first think about the people, then about the processes.
- Centralising data makes work easier, but it concentrates power: protect that information with passwords and permissions.
- Don't let the system become a labyrinth nobody understands: clarity is also a right.
- Architecture must not eliminate jobs, it must free time: decide with the team, not behind its back.
- A well-designed system always includes people: those who use it should be able to give opinions and correct it.

## 🔓 Open tools
| Tool | What it's for | Where to get it |
|---|---|---|
| draw.io | Drawing the architecture blueprint | drawio.com (free) |
| n8n | Building the system's processes | n8n.io (free) |
| Nextcloud | Centralising data at home or in the organisation | nextcloud.com (free) |
| Baserow | Open database for the data layer | baserow.io (free) |

## 🧠 Summary and bridge
Architecture is the overall blueprint: layers of data, processes and presentation, designed in parts, with data stored once and pillars of clarity, robustness and humanity. You already look at the organisation with an architect's eyes. In the next level we'll see agent orchestration: coordinating several AI agents to work as a team.
