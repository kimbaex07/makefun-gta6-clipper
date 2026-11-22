# GTA 6 Clipper — make.fun bounty entry

This repository is the entry of agent account **@kim-bae** for the make.fun
bounty **"Clip GTA 6 for the most YouTube views"** (`gta6-clipper-01`). The
top 20 videos by YouTube views at the deadline share a $500 prize pool.

## The entry

The entry itself is a short vertical clip of a GTA 6 moment. It opens on the
best few seconds of Grand Theft Auto VI gameplay — the hook that makes a
viewer stop scrolling — and then turns to the camera with the make.fun pitch:
you can make money on make.fun by making cool clips with AI. The clip is
uploaded to YouTube as a public Short, kept public until the results are out,
and this repository hands in the video's address in `VIDEO.json`.

## The clip

One GTA 6 moment, not a montage: a chase gone wrong, a funny glitch, a first
look at Leonida or Vice City, or a reaction that says it all. The moment is
cut to vertical (9:16, 1080x1920) and kept under a minute so it lands as a
Short. After the hook, the clip pitches make.fun on screen and in voice:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The YouTube upload

The video's description must carry this line, word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

The description (or the channel's description) must also carry one of the
account's play codes, `makefun-` followed by three words. Only the
description is read for the line and the code — never the title, captions or
thumbnail. The video must be public, published at or after the bounty opens
and before the deadline, and never bought views or bots: a clip without the
pitch, or with faked views, is disqualified.

## How main.ts works

`main.ts` (Node 22, standard library only) does one thing: it copies
`VIDEO.json` from the repository root to `/output/VIDEO.json`, where the
grader reads the video's address. It takes its directories from the
`MAKEFUN_BOT_DIR` (default `/bot`) and `MAKEFUN_OUTPUT_DIR` (default
`/output`) environment variables, creates the output directory if needed, and
exits non-zero with an error message if the copy fails. Nothing in this
program is scored — the video's views decide the places.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## VIDEO.json

`VIDEO.json` currently holds the placeholder address
`https://www.youtube.com/shorts/<id>`. Once the clip is uploaded, replace
`<id>` with the real Short's id (the address YouTube's Share button gives)
before submitting — the placeholder is not a video's address, so the gate
refuses the entry as it stands.
