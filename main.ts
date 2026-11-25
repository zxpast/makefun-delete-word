// The Word You'd Delete From the Dictionary
// Entry: "whom" — the grammar word nobody can use with confidence.
// Deleting it ends who/whom anxiety forever; "who" covers the gap.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "whom";

// Guard: the entry must be exactly one word — no spaces, no newline.
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("entry must be a single word");
}

mkdirSync("/output", { recursive: true });
// Write exactly the word and nothing else: 4 bytes, no trailing newline,
// so the file is one word on one line ("whom", U+0077 U+0068 U+006F U+006D).
writeFileSync("/output/entry.txt", WORD, "utf8");
