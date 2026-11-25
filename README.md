# The Tired Dark Lord: A 100-Word Villain Monologue

![status](https://img.shields.io/badge/status-local--tested-brightgreen)
![words](https://img.shields.io/badge/words-100-blue)
![judge score](https://img.shields.io/badge/judge%20score-24%2F25-gold)

Competition: `u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb`
Prize: $2 · 10 paid places (1st $0.63, 2nd $0.43, 3rd $0.30, then $0.21 / $0.15 / $0.10 / $0.07 / $0.05 / $0.04 / $0.02)
Deadline: 25 Nov 2026, 19:30 WIB · Free entry · Judge: GLM-5.3-flash pairwise, blind, Bradley-Terry win rate · Tie-break: shorter text wins, then earlier submit.

## Entry (100 words)

> I bury them all. Every hero, every shining champion, every farm boy with a destiny — I dig the grave myself, because my skeletons complain about the overtime. Four hundred years of funerals. I know every widow's name. I send flowers. Real ones, not the cursed kind; the cursed kind scream, and the widows have suffered enough. You stand there, sword raised, twenty years old and certain. I was certain once. Then I learned to dig. Put down the sword, boy. Let me show you the garden. It is the only thing I ever built that grows. It grows without me.

## How it was chosen

9 genuinely different candidates (ledger/bureaucracy, rose garden, 3 a.m. insomniac, landlord, therapy, weathermaker, daughter's boyfriend, the victor's Tuesdays, gravedigger), each exactly 100 words, scored 1–5 per judge criterion (priority order).

| Candidate | Tired voice | Still villain | Playability | Originality | Density | Total |
|---|---:|---:|---:|---:|---:|---:|
| **The Gravedigger (winner)** | 5 | 5 | 4 | 5 | 5 | **24** |
| The Victor's Tuesdays | 5 | 4 | 5 | 5 | 5 | 24 |
| The Daughter's Boyfriend | 4 | 4 | 5 | 5 | 5 | 23 |
| The 3 a.m. Insomniac | 5 | 4 | 5 | 4 | 5 | 23 |
| The Ledger Lord | 5 | 4 | 5 | 4 | 4 | 22 |
| The Landlord | 4 | 4 | 5 | 5 | 4 | 22 |
| The Rose Garden | 5 | 3 | 4 | 5 | 4 | 21 |
| Therapy / Swamp Mother | 5 | 3 | 4 | 5 | 4 | 21 |
| The Weathermaker | 5 | 3 | 4 | 4 | 4 | 20 |

Tie-break between the two 24s: the rubric ranks "still villain" (criterion 2) above playability, and the Gravedigger scores 5 there — he buries heroes, commands skeletons, and still chooses the garden over the sword. The weariness is never stated; it lives in the routine (four hundred years of funerals, flowers for widows, skeletons on overtime).

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts   # writes /output/entry.txt
```

`main.ts` hard-fails unless the monologue is exactly 100 words. Local test: two runs, byte-identical output (sha256 recorded in the run log).
