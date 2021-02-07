# ☄️ next-starter

Easy and configurable starter for Fullstack Node servers.

Includes by default:

- [Next](https://github.com/vercel/next.js/) - The React Framework
- [Tailwind](https://github.com/tailwindlabs/tailwindcss) - Hands down the best CSS Framework
- [TypeScript](https://github.com/microsoft/TypeScript) - Clean Javascript in your hands
- [Express](https://github.com/expressjs/express) - Fast, minimalist and simple backend framework
- [Mongoose](https://github.com/Automattic/mongoose) - ODM for MongoDB (non-relational)
- [Winston](https://github.com/winstonjs/winston) - Logger for everything

## Get started

Clone this repo. Do `yarn` to install all the dependencies and dev-dependencies. You're ready to go!

Use: `yarn run dev` to work while developing and `yarn run build && yarn run start` to build everything!

## Code structure

Use the folder:

- **components** for React components that will be shared among different pages
- **dist** for the compiled and distributable version of the project (related to TypeScript)
- **logs** for all logging-purposes (related to Winston)
- **middlewares** for all Express-related middlewares (error catching, cookies validation, jwt validation, you name it)
- **pages** for all React pages made in Next
- **public** for all images and extra assets your project needs
- **routes** for API routing (related to Express)
- **services** for Backend services (controller, services and models). It might be a little opinionated but you should create a subfolder for every task and group controller services and models inside every folder. Read [Structure your solution by components](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md)
- **styles** only related to Tailwind import.
- **utils** for all utilities related to Express and/or the backend.
