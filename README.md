# SvelteKit Auth

Learn SvelteKit authentication using cookies.

## Project Setup

🧑‍🤝‍🧑 Clone the project

```sh
git clone https://github.com/joysofcode/sveltekit-auth-cookies.git
```

📦️ Install dependencies

```sh
npm i
```

## Database

✏️ Rename `.env.example` to `.env`

```
DATABASE_URL="file:./dev.db"
```

🔨 Create the database from the Prisma schema

```sh
npx prisma db push
```

🔎 Inspect your database with Prisma Studio

```
pnpx prisma studio
```

## Development

🦄 Start the project and open http://localhost:3000/

```sh
npm run dev
```

## Production

🔨 Build and preview

```sh
npm run build && npm run preview
```
