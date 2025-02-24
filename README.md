# My Next.js App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and built using TypeScript.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Key Features

### 1. TypeScript
The app is written in TypeScript, ensuring type safety and better developer experience.

### 2. Redux Toolkit
We manage state using [Redux Toolkit](https://redux-toolkit.js.org/), a powerful library that simplifies writing Redux logic.

- **Redux Toolkit Query (RTK Query)** is used to handle server-side state and data fetching.
- The store configuration is located in `src/redux/store.ts`, and slices are managed in `src/redux/slices`.

### 3. SCSS for Styling
This project uses SCSS for styling. You can customize and organize your styles in the `src/styles/` directory.

### 4. Context Provider
We use React's Context API to manage shared state across components that do not require Redux.

### 5. App Routing (Next.js 13+)
The app uses [Next.js App Router](https://nextjs.org/docs/app) introduced in Next.js 13+ for better layouts, data fetching, and nested routing. All pages are located in the `src/app/` directory.

### 6. Internationalization (i18n)
Internationalization is managed using [`next-i18n`](https://nextjs.org/docs/advanced-features/i18n-routing), providing support for multiple languages.

### 7. Dynamic Pages
Dynamic routes are implemented using square brackets (`[]`) in the `src/app` directory, allowing for pages such as `[id].tsx` for dynamic content.

### 8. Axios
We handle HTTP requests using [Axios](https://axios-http.com/), which is integrated with RTK Query to fetch and manage data from APIs.

## Folder Structure

The app follows a clean `src` folder structure:

```
/src
  /app            # Next.js pages and routing
  /components     # Reusable React components
  /redux          # Redux slices and store
  /styles         # SCSS styles
  /utils          # Helper functions and utilities
```

## Learn More

To learn more about the technologies used in this app, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/) - simplify your state management.
- [RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview) - manage server state.
- [SCSS Documentation](https://sass-lang.com/documentation) - learn about SCSS syntax and features.
- [Axios Documentation](https://axios-http.com/docs/intro) - HTTP client for fetching data.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn how to use TypeScript in your project.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
