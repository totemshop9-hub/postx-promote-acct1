// post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only).
// The program copies POST.json from the repository root into /output/POST.json,
// where the gate reads it. That is all it has to do: the entry itself is the X
// post that quotes make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it, with a
// photo attached and make.fun / @makefunai plus the play code in its text.
// POST.json names the post; the house reads its replies, reposts and quotes
// from X. Nothing this program writes about the post is scored.
//
// POST.json currently holds a placeholder address, so the gate refuses it as
// it stands (valid 0). Replace it with the real post's address before submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
