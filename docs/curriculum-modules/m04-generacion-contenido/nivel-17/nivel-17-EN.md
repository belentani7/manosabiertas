# Module 4: Content Generation — Level 17
## Language: EN · Difficulty: Branch
## Estimated time: 4 hours

## 🎯 Level objective
- Understand what a production pipeline is: the steps in order to make a video.
- Get to know FFmpeg, a free tool that joins audio and video.
- Combine Piper (voice) and FFmpeg (joining) in a complete workflow.
- Create a video with narrated voice and subtitles using open-source tools.
- Repeat the process for other videos quickly.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Production pipeline | The list of steps in order to create something, like a recipe. |
| FFmpeg | A free program that mixes, cuts and converts audio and video. |
| Workflow | The fixed order in which we do the tasks so none is forgotten. |
| Command | A written order we give to the program to do something. |
| Command line | The dark window where orders are written to the program. |
| Automation | That the computer does the repetitive steps for us. |

## 📚 Main lesson
Until now we have edited videos with programs that have windows and buttons (CapCut, Canva). There is another way, more technical but very powerful: using the command line with FFmpeg. It is like the difference between ordering in a restaurant or cooking ourselves: it takes more to learn, but we can repeat the recipe whenever we want.

FFmpeg is a free and open program that has been helping mix, cut and convert audio and video for years. It works with "commands": written orders. For example, a command can join an audio file (Piper's voice) with an image or video file to create a final video. All without windows, just text.

The command line is scary at first, but it is like learning to use the new dishwasher: by the third day we do it without thinking. We write an order, press the key to run it and the program works. The key is to copy the commands carefully, without mistakes, like copying a recipe.

Our production pipeline with open tools has clear steps. First we write the script (we saw that in level 15). Second, we generate the voice with Piper (level 10). Third, we create or choose the images. Fourth, we use FFmpeg to join the voice with the images and create the video. Fifth, we add the subtitles (level 13). Six simple steps that, in order, produce a complete video.

The FFmpeg command is a sentence with parts: the program (ffmpeg), the input (the audio file and the image file), the orders (how long it lasts, what format) and the output (the name of the new video). It is like giving kitchen instructions: "take the rice, add water, cook ten minutes, serve".

A great advantage of this pipeline is automation. Once we have the command that works, we save it in a document and only change the file names for each video. The computer does the repetitive work; we bring the idea and the review. It is like bread dough: the same recipe, a thousand loaves.

And subtitles? FFmpeg can also embed them in the video. We give it the video and the SRT file (level 13) and it draws them on top at the exact moment. So the final video already carries its text. The whole process, from start to finish, with free programs and at no cost.

The review is still human. The computer joins the files, but we check that the voice sounds good, that the images are the right ones and that the subtitles say what is heard. The machine speeds things up; the judgement is ours. Like in sewing: the machine stitches, but the good eye decides.

This way of working also has limits. If we need complicated effects or many fine cuts, windowed programs are more comfortable. The command line shines when we repeat the same type of video many times: recipe videos, greetings, club newsletters. Knowing both ways makes us freer.

Patience is important. The first commands will fail or come out odd. No problem: it is fixed and tried again. Learning something new always has that first step. And when the video comes out well for the first time, the satisfaction is huge: we have mastered a tool of the "experts".

By the end of this level, we will know how to create a complete video with Piper's voice and subtitles using FFmpeg and other free tools, and repeat the recipe whenever we want. Content production is already in our hands.

## 💡 Practical examples
1. **The club newsletter.** Pedro prepares a weekly video: he writes the script, generates the voice with Piper and joins the voice with the poster photo using FFmpeg. Every week, the same command.
2. **The birthday greetings.** Rosa creates personalised congratulation videos for her family: each one with a different name, generated and joined automatically.
3. **Carmen's recipes.** Carmen photographs each step and adds the narrated voice with Piper. FFmpeg joins photos and voice into a recipe video ready to share.

## 🛠️ Guided activity
Step 1: Write a short script of 4 sentences about a simple topic (for example, "the benefits of walking").
Step 2: Generate the voice with Piper and save the audio file (for example, voice.mp3).
Step 3: Choose or create an image to accompany the text (for example, a photo of a park).
Step 4: Open the command line (the terminal) of the computer.
Step 5: Write the FFmpeg command to join the image and the audio: ffmpeg -loop 1 -i photo.jpg -i voice.mp3 -c:v libx264 -tune stillimage -c:a aac -b:a 192k -pix_fmt yuv420p -shortest video.mp4
Step 6: Press the key to run it (Enter) and wait for it to finish.
Step 7: Open the resulting video and check that the image and the voice last the same time.
Step 8: Add the subtitles with FFmpeg using your SRT file (ffmpeg -i video.mp4 -vf subtitles=subtitles.srt final_video.mp4) and share the result.

## ✍️ Self-assessment exercises
1. What is a production pipeline? a) The steps in order to create something. b) A car factory. c) A drawing program.
2. What is FFmpeg? a) A free program that mixes, cuts and converts audio and video. b) A camera. c) A type of font.
3. What is a command? a) A written order to the program. b) A green button. c) A song.
4. What is the advantage of automation? a) That the computer repeats the repetitive steps. b) That nothing needs reviewing. c) That it cannot be used twice.
5. Who does the final review? a) The computer, alone. b) The person, with judgement. c) Nobody.

Answers: 1-a, 2-a, 3-a, 4-a, 5-b.

## ⚖️ Ethical dimension
- Free tools allow anyone to produce: share what you learn with your community.
- Respect the licences: use free or own images, voices and music.
- Do not use the technique to deceive: an edited video must be faithful to what happened.
- If you publish the command or the recipe, explain the process clearly.
- Remember privacy: do not generate videos with other people's data without permission.

## 🔓 Open tools
| Tool | What it is for | Where to get it |
|---|---|---|
| FFmpeg | Join, cut and convert audio and video | ffmpeg.org (free) |
| Piper | Generate the narrated voice | github.com/rhasspy/piper (free) |
| Whisper | Transcribe to create the subtitles | github.com/openai/whisper (free) |
| Audacity | Prepare and clean the audios | audacityteam.org (free) |

## 🧠 Summary and bridge
With FFmpeg and Piper we have a complete production pipeline with free tools: script, voice, images, joining and subtitles. Commands are scary at first, but automation repeats the recipe whenever we want. In the next level we will master voice and dubbing to bring any text to life.
