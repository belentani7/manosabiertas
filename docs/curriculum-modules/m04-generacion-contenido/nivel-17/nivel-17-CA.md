# Mòdul 4: Generació de Contingut — Nivell 17
## Idioma: CA · Dificultat: Branca
## Temps estimat: 4 hores

## 🎯 Objectiu del nivell
- Entendre què és una cadena de producció: els passos en ordre per fer un vídeo.
- Conèixer el FFmpeg, una eina lliure que uneix àudio i vídeo.
- Combinar el Piper (veu) i el FFmpeg (unió) en un flux de treball complet.
- Crear un vídeo amb veu narrada i subtítols fent servir eines de codi obert.
- Repetir el procés per a altres vídeos de manera ràpida.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Cadena de producció | La llista de passos en ordre per crear alguna cosa, com una recepta. |
| FFmpeg | Un programa lliure que barreja, talla i converteix àudio i vídeo. |
| Flux de treball | L'ordre fix en què fem les tasques per no oblidar-ne cap. |
| Comanda | Una ordre escrita que diem al programa perquè faci alguna cosa. |
| Línia d'ordres | La finestra fosca on s'escriuen les ordres al programa. |
| Automatització | Que l'ordinador faci els passos repetitius per nosaltres. |

## 📚 Lliçó principal
Fins ara hem muntat vídeos amb programes amb finestres i botons (CapCut, Canva). Hi ha una altra manera, més tècnica però molt poderosa: fer servir la línia d'ordres amb el FFmpeg. És com la diferència entre demanar al restaurant o cuinar nosaltres: costa més aprendre, però repetim la recepta quan volem.

El FFmpeg és un programa lliure i gratuït que fa anys que ajuda a barrejar, tallar i convertir àudio i vídeo. Funciona amb "comandes": ordres escrites. Per exemple, una comanda pot unir un fitxer d'àudio (la veu del Piper) amb un fitxer d'imatge o vídeo per crear un vídeo final. Tot sense finestres, només text.

La línia d'ordres espanta al principi, però és com aprendre a fer servir el rentavaixelles nou: al tercer dia ho fem sense pensar. Escrivim una ordre, premem la tecla per executar-la i el programa treballa. La clau és copiar les comandes amb cura, sense errors, com es copia una recepta.

La nostra cadena de producció amb eines obertes té passos clars. Primer escrivim el guió (ho vam veure al nivell 15). Segon, generem la veu amb el Piper (nivell 10). Tercer, creem o triem les imatges. Quart, fem servir el FFmpeg per unir la veu amb les imatges i crear el vídeo. Cinquè, afegim els subtítols (nivell 13). Sis passos senzills que, en ordre, produeixen un vídeo complet.

La comanda del FFmpeg és una frase amb parts: el programa (ffmpeg), l'entrada (input: el fitxer d'àudio i el d'imatge), les ordres (quant dura, quin format) i la sortida (output: el nom del vídeo nou). És com donar instruccions a la cuina: "agafa l'arròs, afegeix aigua, cou deu minuts, serveix".

Un gran avantatge d'aquesta cadena és l'automatització. Un cop tenim la comanda que funciona, la desem en un document i només canviem els noms dels fitxers per a cada vídeo. L'ordinador fa la feina repetitiva; nosaltres hi posem la idea i la revisió. És com la massa del pa: la mateixa recepta, mil pans.

I els subtítols? El FFmpeg també els pot incrustar al vídeo. Li donem el vídeo i el fitxer SRT (nivell 13) i ell els dibuixa a sobre al moment exacte. Així el vídeo final ja porta el seu text. Tot el procés, de principi a fi, amb programes lliures i sense cost.

La revisió continua sent humana. L'ordinador uneix els fitxers, però nosaltres comprovem que la veu sona bé, que les imatges són les correctes i que els subtítols diuen el que se sent. La màquina accelera; el criteri és nostre. Com a la costura: la màquina cos, però el bon ull decideix.

Aquesta manera de treballar també té límits. Si necessitem efectes complicats o molts talls fins, els programes amb finestres són més còmodes. La línia d'ordres brilla quan repetim el mateix tipus de vídeo moltes vegades: vídeos de receptes, salutacions, butlletins del club. Saber les dues maneres ens fa més lliures.

La paciència és important. Les primeres comandes fallaran o sortiran estranyes. No passa res: es corregeix i es torna a provar. Aprendre alguna cosa nova sempre té aquest primer esglaó. I quan el vídeo surt bé per primera vegada, la satisfacció és enorme: hem dominat una eina dels "experts".

En acabar aquest nivell, sabrem crear un vídeo complet amb veu del Piper i subtítols fent servir el FFmpeg i altres eines lliures, i repetir la recepta quan vulguem. La producció de continguts ja és a les nostres mans.

## 💡 Exemples pràctics
1. **El butlletí del club.** Pere prepara un vídeo setmanal: escriu el guió, genera la veu amb el Piper i uneix la veu amb la foto del cartell fent servir el FFmpeg. Cada setmana, la mateixa comanda.
2. **Les salutacions d'aniversari.** Rosa crea vídeos de felicitació personalitzats per a la seva família: cadascun amb el nom diferent, generat i unit automàticament.
3. **Les receptes de Carme.** Carme grava les fotos de cada pas i afegeix la veu narrada amb el Piper. El FFmpeg uneix fotos i veu en un vídeo de recepta a punt per compartir.

## 🛠️ Activitat guiada
Pas 1: Escriu un guió curt de 4 frases sobre un tema senzill (per exemple, "els beneficis de passejar").
Pas 2: Genera la veu amb el Piper i desa el fitxer d'àudio (per exemple, veu.mp3).
Pas 3: Tria o crea una imatge que acompanyi el text (per exemple, una foto d'un parc).
Pas 4: Obre la línia d'ordres (la terminal) de l'ordinador.
Pas 5: Escriu la comanda del FFmpeg per unir la imatge i l'àudio: ffmpeg -loop 1 -i foto.jpg -i veu.mp3 -c:v libx264 -tune stillimage -c:a aac -b:a 192k -pix_fmt yuv420p -shortest video.mp4
Pas 6: Prem la tecla per executar (Enter) i espera que acabi.
Pas 7: Obre el vídeo resultant i comprova que la imatge i la veu duren el mateix.
Pas 8: Afegeix els subtítols amb el FFmpeg fent servir el teu fitxer SRT (ffmpeg -i video.mp4 -vf subtitles=subtitols.srt video_final.mp4) i comparteix el resultat.

## ✍️ Exercicis d'autoavaluació
1. Què és una cadena de producció? a) Els passos en ordre per crear alguna cosa. b) Una fàbrica de cotxes. c) Un programa de dibuix.
2. Què és el FFmpeg? a) Un programa lliure que barreja, talla i converteix àudio i vídeo. b) Una càmera. c) Un tipus de lletra.
3. Què és una comanda? a) Una ordre escrita al programa. b) Un botó verd. c) Una cançó.
4. Quin és l'avantatge de l'automatització? a) Que l'ordinador repeteixi els passos repetitius. b) Que no calgui revisar res. c) Que no es pugui fer servir dues vegades.
5. Qui fa la revisió final? a) L'ordinador, només. b) La persona, amb criteri. c) Ningú.

Respostes: 1-a, 2-a, 3-a, 4-a, 5-b.

## ⚖️ Dimensió ètica
- Les eines lliures permeten que qualsevol persona produeixi: comparteix el que aprenguis amb la teva comunitat.
- Respecta les llicències: fes servir imatges, veus i músiques lliures o pròpies.
- No facis servir la tècnica per enganyar: un vídeo editat ha de ser fidel al que va passar.
- Si publiques la comanda o la recepta, explica el procés amb claredat.
- Recorda la privacitat: no generis vídeos amb dades d'altres sense permís.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| FFmpeg | Unir, tallar i convertir àudio i vídeo | ffmpeg.org (gratuït) |
| Piper | Generar la veu narrada | github.com/rhasspy/piper (gratuït) |
| Whisper | Transcriure per crear els subtítols | github.com/openai/whisper (gratuït) |
| Audacity | Preparar i netejar els àudios | audacityteam.org (gratuït) |

## 🧠 Resum i pont
Amb el FFmpeg i el Piper tenim una cadena de producció completa amb eines lliures: guió, veu, imatges, unió i subtítols. Les comandes espanten al principi, però l'automatització repeteix la recepta quan volem. En el següent nivell dominarem la veu i el doblatge per donar vida a qualsevol text.
