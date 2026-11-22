// SPDX-License-Identifier: MIT
// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text (1-280 Unicode code points) to /output/entry.txt.
// Select a variant with the VARIANT env var or the first CLI argument
// (1, 2 or 3). Default: 1 (the local A/B winner, "The Logbook on the
// Third Step").
//
// Usage:
//   node main.ts            -> writes variant 1
//   VARIANT=2 node main.ts  -> writes variant 2
//   node main.ts 3          -> writes variant 3
//
// Note: this file uses only plain JavaScript syntax (no TypeScript-only
// annotations) so it runs under any Node 22+ with type stripping, and
// even as plain .js.

import { mkdirSync, writeFileSync } from "node:fs";

const VARIANTS = {
  1: "On the third step of the lighthouse, the logbook lies open. Last night\u2019s entry is in my handwriting. I have never climbed past the second step. The ink is still wet.",
  2: "The phone box on Mill Road has been dead for years. At midnight it rings once. Then stops. Tonight it rang twice, and when I lifted the receiver I heard the sea \u2014 and, underneath it, a voice I almost knew, waiting for me to say my name first.",
  3: "Every dawn, the garden gate at number nine swings open on its own. No wind, no hand. This morning a small brown dog sat on the step, waiting, as if it had been let in by someone who knew its name. The house has been empty for years.",
};

const DEFAULT_VARIANT = "1";

function main() {
  const selected = process.argv[2] ?? process.env.VARIANT ?? DEFAULT_VARIANT;
  const text = VARIANTS[selected];
  if (text === undefined) {
    console.error(
      `Unknown variant "${selected}". Use 1, 2 or 3 (default ${DEFAULT_VARIANT}).`,
    );
    process.exit(1);
  }

  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    console.error(
      `Variant ${selected} is ${codePoints} code points, outside the 1-280 range.`,
    );
    process.exit(1);
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(
    `Wrote variant ${selected} (${codePoints} code points) to /output/entry.txt`,
  );
}

main();
