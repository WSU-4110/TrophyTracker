# Installation

1. Clone the repository

```bash
git clone https://github.com/wsU-4110/TrophyTracker
cd TrophyTracker
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env.local` file in the root of the project with the following content:

```bash
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="value from `openssl rand -base64 32`"

DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""

GITHUB_ID=""
GITHUB_SECRET=""
```

Fill out the contents of the `.env.local` file with the appropriate values or just ask a team member for the values or just use the copy and paste the file from a team member.

[![Netlify Status](https://api.netlify.com/api/v1/badges/dfd55312-f061-440b-b78b-d9d712454fc9/deploy-status)](https://app.netlify.com/sites/trophytracker/deploys)

---

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Tailwind CSS](https://tailwindcss.com)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
