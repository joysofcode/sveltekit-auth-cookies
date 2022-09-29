# SvelteKit Auth

Learn SvelteKit authentication using cookies.

## Project Setup

### 🧑‍🤝‍🧑 Clone the project

```sh
git clone https://github.com/joysofcode/sveltekit-auth-cookies.git
```

### 📦️ Install dependencies

You can use `npm` or `yarn`.

```sh
pnpm i
```

## Database

### ✏️ Rename `.env.example` to `.env`

```
DATABASE_URL="file:./dev.db"
```

### 🔨 Create the database from the Prisma schema

```sh
pnpx prisma db push
```

### 🔎 Inspect your database with Prisma Studio

```
pnpx prisma studio
```

## Development

### 🦄 Start the project and open http://localhost:5173/

```sh
pnpm run dev
```

## Production

### 🔨 Build and preview

```sh
pnpm run build && pnpm run preview
```
