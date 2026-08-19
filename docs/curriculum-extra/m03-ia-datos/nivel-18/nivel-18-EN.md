# Module 3: AI Applied to Data — Level 18
## Language: EN · Difficulty: Branch
## Estimated time: 4 hours

## 🎯 Level objective
- Understand what AutoML is: the technique that automates model creation.
- Get to know AutoML platforms: Teachable Machine, Google Vertex AI and similar.
- Train a complete classification model with your own images.
- Upload a model to the cloud and understand what is at stake there (data, costs, responsibility).

## 📖 Essential vocabulary
| Term | Plain-language explanation |
|---|---|
| AutoML | Automated machine learning: the machine chooses the best model for us. |
| Dataset | The complete group of examples we use to train. |
| Hyperparameters | The settings that AutoML tests and fine-tunes by itself. |
| Cloud | Remote servers that do the computing instead of your computer. |
| API | The "door" through which other programs ask the model for predictions. |

## 📚 Main lesson
So far we have seen the ideas: predicting numbers, predicting categories, training, evaluating. But you may have thought: "and how do I do this without knowing how to program?" The answer is one of the biggest revolutions in AI of recent years: AutoML. It is short for "automated machine learning". In plain words: the machine that trains the machine.

What exactly does AutoML do? Remember that training a model meant teaching it with examples. It turns out that training has many settings to choose: how many layers the network has, how fast it learns, how many times it goes over the data. Choosing those settings used to be a craft for experts with doctorates. AutoML makes the system itself try thousands of setting combinations, keep the best one and return the winning model to us. You just provide the labelled data and AutoML does the rest.

AutoML tools come in two flavours. The first, for learning and small projects: visual free platforms like Teachable Machine, where we already trained in level 17. The second, for companies and serious projects: professional cloud platforms like Google Vertex AI, which let you train models with millions of examples, store them and ask them for predictions through an "API" (a door through which other programs ask the model questions). This course uses the first flavour; we will get to know the second to understand the real world.

In this level we are going to do something very concrete: train a model with Teachable Machine that distinguishes between two or three objects in your home. It is the same procedure as level 17, but now with a difference: we will do it with more classes, more photos, and check the quality of the model the way a professional would. Because training is easy; evaluating well is the craft.

The first step of a good AutoML project is planning the dataset. The golden rule: more variety, not more repetition. If you take 100 photos of the mug always the same, from the same angle and with the same light, the model learns by heart and fails at the first change. Better 30 varied photos: close up, far away, turned, with the mug full and empty, with daylight and night light. Variety is the model's food: without variety, the machine does not learn "mug", it learns "that exact mug, exactly like that".

The second step is balancing the classes. If we train with 100 photos of the mug and 5 of the remote, the model will be an expert on mugs and clumsy with remotes. The number of examples per class should be similar. This is the same "rare class" lesson from level 17, but now applied at the source: injustice is avoided at collection, not fixed later.

The third step, the professional one, is setting aside part of the data for evaluation. When you press "Train Model" in Teachable Machine, the tool already does this for you internally: it keeps some photos of each class that the model never sees, and uses only the others to learn. Then it tests with the reserved ones and tells you how much it gets right. If you yourself separate 10 photos of each class before training, you could do the evaluation by hand: train without those photos and then test with them. That is the professionals' ritual, and you already understand it.

Now the question everyone worries about in the cloud: what happens to my data when I train on a platform? Simple rule: in free learning tools like Teachable Machine, your photos are used to train your model; in professional platforms like Vertex AI, you sign a contract that says who owns what and where the data is stored. Before uploading anything, read where your data is stored and who can see it. People's data — photos, voices, names — deserves the same care as an important document.

Another thing at stake in the cloud is money. Training small models in Teachable Machine is free; training in Vertex AI costs money per hour of computing. The cloud is not a favour from the universe: it is renting the muscle of other people's computers. For learning projects, the free version is enough. The management lesson: always start with the free option, and when the project becomes serious, budget the cloud cost as just another expense.

When you finish training, Teachable Machine offers you a wonderful button: "Export Model". You can download the model, or ask for a link to share. Once exported, that model works without internet: it lives on your computer. You can even put it on a web page or a phone. What you have trained no longer needs the platform: it is a model, a small machine that lives wherever you take it.

With this level we close the practical part of the Branch band. You already know: what predicting is, how to predict a number, how to predict a category and how to train a model without writing a line of code. In the next level comes the part that puts the heart into the matter: data ethics. Because you now have the power to create models, and power without responsibility is dangerous.

## 💡 Practical examples
### Example 1: Grandma's bag
Grandma trains a model to distinguish "keys", "glasses" and "nothing". With 40 photos of each, the model tells her instantly where what she is looking for is. AutoML at home.

### Example 2: The factory
A factory uses Vertex AI AutoML to classify parts as "good" and "defective" from photos on the production line. The model is trained on 10,000 photos labelled by technicians.

### Example 3: The NGO
An NGO trains a model to count cars in satellite photos of a camp and estimate how many families need help. Free AutoML serving a cause.

## 🛠️ Guided activity
Step 1. Gather two objects from your home (for example, a mug and a remote) and choose a place with good light.
Step 2. Open https://teachablemachine.withgoogle.com and create an image project with 3 classes: mug, remote and "nothing".
Step 3. Capture 40 varied photos of the mug: close up, far away, turned, with light and without light. Move the camera between shots.
Step 4. Capture 40 varied photos of the remote, just as varied.
Step 5. Capture 40 photos of the background without an object for the "nothing" class.
Step 6. Press "Train Model" and wait for it to finish.
Step 7. Check the quality: test each object from new angles. Note how many hits out of 10.
Step 8. Do the "exam test": show the object with different light or an odd position. Does the model hold up or waver?
Step 9. Reflect and write: if you add only 5 photos of the remote, what do you think will happen to its accuracy? Try it if you like.
Step 10. Press "Export Model" and save whichever option you prefer. Write a conclusion: "AutoML lets me train models without coding, but quality depends on the variety of my photos".

## ✍️ Self-assessment exercises
1. What does AutoML mean?
2. What two flavours of AutoML tools exist?
3. What is the golden rule of the dataset?
4. Why should classes be balanced?
5. What should you check before uploading data to a cloud platform?

Answers: 1. Automated machine learning: the machine chooses and fine-tunes the best model for us. 2. Visual and free (Teachable Machine) and professional in the cloud (Vertex AI AutoML). 3. More variety, not more repetition: varied photos so the model generalises. 4. Because if one class has many more examples, the model learns it better and neglects the others. 5. Where the data is stored, who can see it and how much the computing costs.

## ⚖️ Ethical dimension
AutoML lowers the barrier to AI: today anyone can train models that recognise faces, voices or gestures. That power comes with two duties. First, consent: if you train a model with other people's photos or voices, they must know and accept it. Second, proportionality: you do not need to recognise every neighbour to count the cars on a street. Always ask: what is the minimum data I need to achieve my goal without invading anyone? AutoML is a magnificent tool; the responsibility for how it is used remains ours.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Teachable Machine | Free AutoML with photos, sounds and poses | https://teachablemachine.withgoogle.com |
| Google Vertex AI | Professional AutoML in the cloud | https://cloud.google.com/vertex-ai |
| Machine Learning for Kids | Guided educational AutoML projects | https://machinelearningforkids.co.uk |
| Hugging Face | Pre-trained models to try and use | https://huggingface.co |

## 🧠 Summary and bridge
- AutoML automates model creation: you provide the data, the machine provides the craft.
- Quality depends on the variety and balance of your data, not on repeated quantity.
- Your data and your money are at stake in the cloud: read before pressing the button.
- A trained model is exported and lives wherever you want.
In the next level comes data ethics: because you now have the power to create models, and power without responsibility is dangerous.
