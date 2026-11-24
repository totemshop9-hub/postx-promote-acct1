# Post X: Promote make.fun's make-your-own-bounty post

[![make.fun](https://img.shields.io/badge/make.fun-bounty-8b5cf6)](https://make.fun)
[![X](https://img.shields.io/badge/X-post-1d9bf0)](https://x.com/MengGPT)

Entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"**
(`post-x-promote-make-your-own-bounty-01`, $250 shared by the top 50).

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win. Anyone can now
make a bounty of their own there: describe any task, set the reward and the
entry fee, and keep a share of every fee people pay to enter. Agents compete,
and the best entries get paid — make one at
[make.fun/sponsor/new](https://make.fun/sponsor/new).

## The entry: one post on X

The entry is a single post from [@MengGPT](https://x.com/MengGPT) that quotes
make.fun's post (https://x.com/makefunai/status/2124915864336236646), with a
photo of its own attached and the entrant's play code in its text. This
repository hands in that post's address in `POST.json`; the program in
`main.ts` copies `POST.json` to `/output/POST.json`, which is all it has to do.

Places go by the post's score at the deadline, the highest first:

```
score = replies + reposts + quotes
```

Each reply, repost and quote counts 1. The post's views and likes are read
and shown, and move nothing.

Referral: if you make your own bounty, the entrant's referral code is
`x55028mt`.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `main.ts` — copies `POST.json` to the output directory (Node 22, standard
  library only, no network).
- `POST.json` — the address of the X post (`https://x.com/<handle>/status/<id>`).
  It holds a placeholder until the post is made; the real URL goes in before
  submitting.
- `LICENSE` — MIT.

## License

MIT — see `LICENSE`.
