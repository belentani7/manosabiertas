# Module 3: AI Applied to Data — Level 19
## Language: EN · Difficulty: Branch
## Estimated time: 3 hours

## 🎯 Level objective
- Understand why ethics is not a separate chapter but a central part of working with data.
- Learn the five principles: privacy, consent, fairness, transparency and accountability.
- Recognise bias and know where it comes from.
- Know what the law (GDPR) says in plain words.

## 📖 Essential vocabulary
| Term | Plain-language explanation |
|---|---|
| Privacy | The right that certain personal data is not known or shared. |
| Consent | A person's clear, voluntary permission to use their data. |
| Bias | The prejudice that enters the data or the model and distorts its results. |
| Transparency | Being able to explain how and why a decision was made. |
| GDPR | General Data Protection Regulation, the European privacy law. |

## 📚 Main lesson
Throughout this module we have learned to collect, clean, analyse, visualise and predict. Today we learn the most important subject of all, the one technical courses usually forget: data ethics. It is not a decorative chapter. It is the difference between a tool that serves people and one that harms them while seeming useful.

Let's start with privacy. Privacy means that some data belongs to one person and no one else: their health, their money, their home, their family. When we work with people's data, we are handling someone's most intimate things. The golden ethical question is: "would I like my data to be used this way?" If the answer is no, don't do it with others' data. Empathy is the first tool of data ethics.

The second principle is consent. Using a person's data without them knowing or accepting is like entering their home without knocking. European law (the GDPR) says it clearly: to process personal data you need clear, free, informed consent that can be withdrawn. Translation: the person must understand what is done with their data, must be able to say no without fear, and must be able to change their mind. Fine-print "consent" buried in a page of a thousand clicks is not consent.

The third principle is fairness, and here is the most important concept of the course: bias. Bias is a prejudice that enters the data and makes AI unfair without meaning to. Remember level 16: regression inherits the truth or the prejudice of its data. If a company has granted fewer loans to women for years, its historical data reflects that, and an AI trained on that data will keep denying loans to women. The machine is not racist or sexist out of malice: it is racist and sexist because we taught it data that is.

Where does bias come from? From three places. First, unfair historical data, like the loan example. Second, collection: if we only survey those who have internet, we leave out those who do not, and the result does not represent everyone. Third, labels: if in level 17 we labelled the photos with prejudices, the model learns prejudices. Bias is sown at collection and reaped at prediction. The good news: we already know how to avoid it (levels 11, 17 and 18: clean data, variety and balance).

The fourth principle is transparency. A decision that affects a person should be explainable. If the bank denies you a loan, can it tell you why? If an algorithm rejects a CV, do you know why it rejected it? European law recognises the "right to explanation": people have the right to know how the decisions that affect them were made. Distrust systems that even their creators cannot explain. Transparency is not a luxury: it is a demand of justice.

The fifth principle is accountability. Behind every machine decision there are people who decided what data to give it, how to train it and what to do with its answers. When something goes wrong — an unfair loan, a misdiagnosis — the fault is not the machine's: it is the human decisions that created it. Asking "who is accountable?" is the ultimate test of an ethical system. If no one answers, the system should not run.

Ethics is not only avoiding harm: it is building good. Data can discriminate or it can repair. A hospital can use data to detect early the diseases that most affect poor neighbourhoods; a council can use data to distribute services better. The difference is not in the technique: it is in the question asked before starting. "Who is this project for?" is the most ethical question that exists.

With this level we close the Branch band. You now know the complete map of AI applied to data: knowing, predicting and judging. In the Copa band you will become the owner of the project: bringing everything you have learned together in a complete data analysis project, from start to finish. The ethics we saw today will not be a chapter of the project: it will be its backbone.

## 💡 Practical examples
### Example 1: The recipe app
A recipe app collects what dishes you cook and when. With that data, a health insurer could guess your habits and raise your premium. Privacy and consent at stake.

### Example 2: The CV
A company uses AI to filter CVs and discards 70%. One candidate discovered the AI penalised women's names. Historical bias in action.

### Example 3: The neighbourhood shop
A neighbourhood co-operative uses its neighbours' purchase data to decide which products to restock. Here consent is clear, the purpose is good and everyone wins: ethics well applied.

## 🛠️ Guided activity
Step 1. Think of an app that uses your data and that you know (it could be your bank, a social network or a game).
Step 2. Open that app's privacy settings and locate the "data" section.
Step 3. Write in a Google Sheets sheet a table with columns: data it collects, what it uses it for, who it shares it with.
Step 4. Fill in the table with what you discovered. If you cannot find the information, note that down: that itself is data (lack of transparency).
Step 5. Below, write the three ethical questions: "could this use harm anyone?", "is the consent clear?", "who is accountable if something goes wrong?".
Step 6. Answer the three questions honestly for that app.
Step 7. Now reverse the point of view: imagine you are the one holding that data about another person.
Step 8. Write what you would do the same and what you would do differently to be fair.
Step 9. Search the internet for "GDPR" or "data protection" and write in one line which citizens' right seems most important to you.
Step 10. Save the sheet as "My ethical audit". Conclude: "ethics is reviewed with questions, not with faith".

## ✍️ Self-assessment exercises
1. Name the five principles of data ethics.
2. What is bias and where does it come from?
3. What does the GDPR require to use a person's data?
4. What is the right to explanation?
5. Who is accountable when a machine makes a bad decision?

Answers: 1. Privacy, consent, fairness, transparency and accountability. 2. A prejudice that enters the data and distorts the result; it comes from unfair historical data, partial collection or prejudiced labels. 3. Clear, free, informed and withdrawable consent. 4. The right to know how and why a decision that affects us was made. 5. The people: those who chose the data, trained the model and decided to use it.

## ⚖️ Ethical dimension
This whole level is an ethical dimension, so let's close with the central idea: data is not neutral. It is the mirror of the society that produces it, with its lights and its shadows. People who work with data choose which mirror to hold up. You can use data to exclude or to include, to surveil or to care, to enrich a few or to serve everyone. Technique is learned in an afternoon; ethics is practised every day, decision by decision. And you now have both.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| GDPR (European Commission) | The European data protection law in plain language | https://commission.europa.eu/law/law-topic/data-protection |
| Have I Been Pwned | See if your data appeared in breaches | https://haveibeenpwned.com |
| Lumen Database | See how companies use and remove content | https://lumendatabase.org |
| Terms of Service; Didn't Read | Summaries of the contracts we accept without reading | https://tosdr.org |

## 🧠 Summary and bridge
- Five principles: privacy, consent, fairness, transparency and accountability.
- Bias is born from the data and reaped at prediction; it is avoided at collection.
- The GDPR requires clear consent and the right to explanation.
- The question "who is accountable?" is the test of an ethical system.
With Level 19 we close the Branch band. In the Copa band you will become the owner of the project: you will build a complete analysis from start to finish.
