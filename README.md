# Aphotic Studios Landing page

Landing Page, built with **bun** + **vite** + **tailwind**, enough said

## Setup

Make sure you have [bun](https://bun.sh/) installed for this process.
To run locally run the following:

1. `bun install`
2. `bun dev`
**Its that [easy](https://youtu.be/GuEDsVoh8OA?si=PSKCM0wC1rRe72f9)!!**

## Other Stuff

It makes sense that if we want to host our SPA we would want to build it so this comes with the handy `bun run build` that will make a dist build that we can then host **WHERE EVER WE WANT**.

I setup the following server if we plan on deploying to AWS -> [server.js](/server.js) that can be ran using `bun run serve`.
We may need to add a script that will install [bun](https://bun.sh/) on our server then run the server to deploy our assets.

## Authors

- [James](https://github.com/ANewModern)
- [The Avatar](https://github.com/ornitorrincco)
  