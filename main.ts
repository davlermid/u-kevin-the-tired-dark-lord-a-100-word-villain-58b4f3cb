// The Tired Dark Lord: A 100-Word Villain Monologue
// Competition: u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
// Account: davlermid — free entry, no entry fee.
//
// Winner (of 9 candidates, scored 1-5 per judge criterion — see README.md):
// "The Gravedigger" — the Dark Lord who buries every hero he kills and is
// tired of digging. Weariness lives in the routine (funerals, flowers,
// overtime, the garden), never in the word "tired".
//
// Hard gate: the monologue MUST be exactly 100 words. Anything else fails
// loudly instead of producing a bad entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `I bury them all. Every hero, every shining champion, every farm boy with a destiny — I dig the grave myself, because my skeletons complain about the overtime. Four hundred years of funerals. I know every widow's name. I send flowers. Real ones, not the cursed kind; the cursed kind scream, and the widows have suffered enough. You stand there, sword raised, twenty years old and certain. I was certain once. Then I learned the shovel. Put down the sword, boy. Let me show you my garden. It is the only thing I ever built that grows. It grows without me.`;

/**
 * Count words the way a human judge does: whitespace-separated tokens that
 * contain at least one letter or digit. Standalone punctuation (the em-dash
 * in "destiny — I") is not a word.
 */
export function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((token) => /[A-Za-z0-9]/.test(token)).length;
}

function main(): void {
  const words = countWords(ENTRY);
  if (words !== 100) {
    console.error(`WORD COUNT GATE FAILED: expected 100 words, got ${words}.`);
    process.exit(1);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY + "\n", "utf8");
  console.log(`OK: wrote ${words}-word entry to ${outPath}`);
}

main();
