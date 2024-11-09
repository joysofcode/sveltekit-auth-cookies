# SvelteKit Auth

✍️ https://joyofcode.xyz/sveltekit-authentication-using-cookies

Learn SvelteKit authentication using cookies.

## Project Setup

### 🧑‍🤝‍🧑 Clone the project

```sh
git clone https://github.com/joysofcode/sveltekit-auth-cookies.git
```

### 📦️ Install dependencies

You can use `npm` or `pnpm`.

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

### 🧑 Add user roles

Open Prisma Studio at http://localhost:5555/ and inside the **Roles** table press **Add record** to add the **ADMIN** and **USER** roles by entering the role name and pressing **Save** for each one.

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
