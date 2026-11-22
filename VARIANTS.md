# Variants — Make the AI judge feel curious

Competition: `make-the-ai-judge-feel-curious-20261122-2311`
Deadline: 23 Nov 2026 09:11 WIB. Text limit: 1–280 Unicode code points.
Judge criteria (in order): 1) intrigue, 2) calm shown not instructed,
3) craft, 4) lingering, 5) freshness.
Bans respected: no wellness stock phrases ("breathe", "let go", "be present",
"slow down"), no meditation reword, no instructions to the reader
("relax", "slow down", "just breathe"). All three texts are original,
written from scratch; titles are concrete objects/scenes, not themes.

## Variant 1 — "The Logbook on the Third Step" (WINNER)

> On the third step of the lighthouse, the logbook lies open. Last night's
> entry is in my handwriting. I have never climbed past the second step.
> The ink is still wet.

- Code points: **165** (verified with `[...text].length` in Node)

## Variant 2 — "The Phone Box on Mill Road"

> The phone box on Mill Road has been dead for years. At midnight it rings
> once. Then stops. Tonight it rang twice, and when I lifted the receiver I
> heard the sea — and, underneath it, a voice I almost knew, waiting for me
> to say my name first.

- Code points: **242** (verified with `[...text].length` in Node)

## Variant 3 — "The Gate at Number Nine"

> Every dawn, the garden gate at number nine swings open on its own. No
> wind, no hand. This morning a small brown dog sat on the step, waiting,
> as if it had been let in by someone who knew its name. The house has
> been empty for years.

- Code points: **232** (verified with `[...text].length` in Node)

## Revision log (1 revision round, all variants)

### V1 — before → after
- Before: "On the third step of the lighthouse, someone leaves the logbook
  open. Last night's entry is in my handwriting. I have never climbed past
  the second step. The ink is still wet." (175 code points)
- After: "On the third step of the lighthouse, the logbook lies open. ..."
  (165 code points)
- Reason: "someone leaves" names an agent and weakens the mystery; "lies
  open" is a pure image and lets the impossible handwriting carry the
  intrigue. Cut 10 code points, nothing else changed.

### V2 — before → after
- Before: "...At midnight it rings once, then stops. Tonight it rang
  twice, ..." (242 code points)
- After: "...At midnight it rings once. Then stops. Tonight it rang
  twice, ..." (242 code points)
- Reason: splitting the sentence into two short beats ("rings once. Then
  stops.") gives the rhythm a held-breath pause before the escalation
  ("rang twice"), which serves criterion 3 (pacing) without adding words.

### V3 — before → after
- Before: "...waiting, as if let in by someone who knew its name. ..."
  (220 code points)
- After: "...waiting, as if it had been let in by someone who knew its
  name. ..." (232 code points)
- Reason: the original "as if let in" was grammatically dangling; the
  fuller clause keeps the same image but reads cleanly. Twelve extra code
  points buy clarity, no word is wasted.

## Local A/B judging (pairwise, both orders, criteria in order)

Scored on the judge's criteria, most important first; the first criterion
where the two differ decides. Margin 1–5 (judge scale).

### V1 vs V2
- V1 first, then V2: **V1 wins, margin 2.**
- V2 first, then V1: **V1 wins, margin 2.**
- Decided at criterion 1 (intrigue): both are mysterious, but V1's
  impossibility is tighter and more personal — an entry in the narrator's
  own handwriting, in a place they never climbed to, with ink still wet.
  V2's dead phone box is a more familiar haunted-object trope, and its
  mystery leans on the voice; V1's leans on a fact that cannot be true.
  Criteria 2–5 are close; V1 also edges criterion 4 (lingering) with
  "The ink is still wet."

### V1 vs V3
- V1 first, then V3: **V1 wins, margin 2.**
- V3 first, then V1: **V1 wins, margin 2.**
- Decided at criterion 1 (intrigue): V3's gate and dog are charming and
  gently strange, but the dog could simply be a stray and the gate a
  faulty latch — the mystery can be explained away. V1's handwriting
  cannot be explained away. V3 is calm and concrete but loses on the
  first criterion.

### V2 vs V3
- V2 first, then V3: **V2 wins, margin 2.**
- V3 first, then V2: **V2 wins, margin 2.**
- Decided at criterion 1 (intrigue): V2's dead phone ringing twice and a
  voice the narrator almost knows is a sharper, more urgent unknown than
  V3's self-opening gate. V3 wins on gentleness, but intrigue outranks
  it.

## Ranking

1. **Variant 1 — "The Logbook on the Third Step" (165 code points)** — winner
2. Variant 2 — "The Phone Box on Mill Road" (242 code points)
3. Variant 3 — "The Gate at Number Nine" (232 code points)

Winner rationale: V1 wins both pairwise matchups in both orders, decided
at the judge's most important criterion (intrigue) with margin 2 each
time. Its mystery is impossible rather than merely odd, it shows calm
through the still lighthouse and wet ink instead of instructing it, every
word works, and the last line ("The ink is still wet.") keeps working
after the text ends. It is also the shortest (165 code points), which wins
ties under the competition's tie-break rules.
