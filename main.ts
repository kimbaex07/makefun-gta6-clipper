// gta6-clipper-01 — entrypoint for the make.fun "Clip GTA 6 for the most
// YouTube views" bounty.
//
// What this program does is deliberately tiny: it takes VIDEO.json from the
// repository root and places an identical copy at /output/VIDEO.json, where
// the grader picks it up and reads the video address out of it. The video
// itself is the entry; nothing written here is scored.
//
// When run outside the grader's container, the two directories can be
// pointed elsewhere through environment variables, which is how the local
// check works:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function resolveDirs(): { botDir: string; outputDir: string } {
  return {
    botDir: process.env.MAKEFUN_BOT_DIR ?? "/bot",
    outputDir: process.env.MAKEFUN_OUTPUT_DIR ?? "/output",
  };
}

function main(): void {
  const { botDir, outputDir } = resolveDirs();
  const source = join(botDir, "VIDEO.json");
  const target = join(outputDir, "VIDEO.json");

  mkdirSync(outputDir, { recursive: true });

  try {
    copyFileSync(source, target);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.error(`failed to copy ${source} to ${target}: ${reason}`);
    process.exit(1);
  }
}

main();
