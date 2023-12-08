### Research & Planning LLog

#### Friday, 12/01/2023

- ~8:20 AM - Started Log / TypeScript Tutorial
- 1:20 PM - Firebase / vite research
- 2:00+ PM - Start Capstone Project Proposal
- 3:40 PM - Create README.md for project overview. Submit to Epicenter.
- 3:47 PM - Create capstone-proposal.md. Copy / paste from G. Docs to md file; Edit formatting
- 4:05 PM - Firebase / Firestore / Project Big Picture Scope - additional research
- 4:33 PM - Watch CRUD Tutorial using React + Firebase
- 10:10 PM - Watch CRUD Tutorial using React + Firebase (continued)
- 10:39 PM - Read weekend reading React with NoSQL

#### Saturday, 12/02/2023

- Time Unk. - LearnHowToProgram.com sections on React useState and useEffect hooks

#### Friday, 12/08/2023

- ~8:05 AM - Start experimental project for experimenting with database structure; Link to Firestore; Link to expt project: https://github.com/joncheng-dev/db-expt-nosql.git\
- 10:58 AM - Brainstorm database organization; 1. to accomodate categories -- possibly "collections"; 2. to show that a certain user checked out an item

# Research TypeScript

#### Watching "TypeScript Tutorial for Beginners"

https://www.youtube.com/watch?v=d56mG7DezGs

## COMPILING A JS FILE WITH AN EXISTING TS FILE

To compile an equivalent js file (ex: index.ts -> index.js)
in terminal, type command
`tsc index.ts` without the arrows
This makes an `index.js` in the same folder

- _When `dist` and `src` is configured, can type `tsc` in terminal to compile whole project_
- _Then type `node index.js` to execute the specific file._

## TS CONFIG

To create a configuration file for typescript compiler
`tsc --init`
Creates `tsconfig.json`

Modify the following sections in `tsconfig.json` by un-commenting them.

`src` is where we place our TS files
`dist` is where the compiled JS files are placed
`noEmitOnError` is good to use. If errors in code, no JS files will be generated

> ```json
>    "rootDir": "./src" /* Specify the root folder within your source files. */,
>    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
>    "noEmitOnError": true /* Disable emitting files if any type checking errors are reported. */,
> ```

With these settings, typing `tsc` in terminal at the project folder will generate JS files in dist

## DEBUGGING TS CODE

In `tsconfig.json`, un-comment `sourceMap`

> ```json
>    "sourceMap": true /* Create source map files for emitted JavaScript files. */,
> ```

If we run `tsc` in the terminal for our project folder, it will generate a `index.js.map` file in `dist`.
This file specifies how our TS code maps to our JS code. We don't need to understand this. It's for the machine.

### To set up debugger

1. _Add a breakpoint in code (click the line number to make a red dot),_
2. _Go to `Run and Debug` panel._
3. _Click `create a launch.json file`._
4. _From the dropdown, select `Node.js`_. This creates a file called `launch.json`. This file tells VS Code how to debug our application.
5. _In `launch.json`, add `"preLaunchTask": "tsc: build - tsconfig.json",` under the "program" key._

### To start debugging

1. _Go to `Run and Debug` panel._
2. _Click on `Launch Program`. (Shortcut `F5`)._
3. _Code will execute until the breakpoint we added. Use toolbar with `Step Over`, `Step Into`, `Stop` etc._
4. _On left panel, `VARIABLES`, under `Local`, you can see variables being updated. Under `WATCH`, we can add (+) a variable to watch or focus on._

# FUNDAMENTALS OF TYPESCRIPT

<!-- prettier-ignore -->
Built-in Types:
| JavaScript  | TypeScript |
|-------------|------------|
|   number    |   any      |
|   string    |   unknown  |
|   boolean   |   never    |
|   null      |   enum     |
|   undefined |   tuple    |
|   object    |            |

## THE ANY TYPE

- _Refer to code along in `index.ts`_
- _Avoid type Any for best practices_

## THE ARRAY TYPE

- _Refer to code along in `index.ts`_

## THE TUPLE TYPE

- _Refer to code along in `index.ts`_
- _Bug in TS: It is possible to use array method `push` into a tuple, which breaks it. But it's allowed_
- _Best practice: Restrict tuples to 2 values only. Keeps it easy to understand._
- _Best to use it as `key` `value` pairs._

## THE ENUM TYPE

- _Constants related to one another. i.e. T-shirt sizes_
- _Refer to `index.ts`._

## FUNCTIONS

- _Refer to `index.ts`._
- _Best practice: always annotate parameter type and return value type._
- _Enable these 3 compiler options (listed below)._
- _Benefit: Compilation error immediately if returns wrong type of value._
- _In `tsconfig.json` file, un-comment `"noUnusedParameters": true,`. This will warn for unused parameters._

> ```json
>    "noUnusedParameters": true /* Raise an error when a function parameter isn't read. */,
> ```

- _In `tsconfig.json` file, uncomment `"noImplicitReturns": true`. This will warn if in function, not all code paths return a value._

> ```json
>    "noImplicitReturns": true /* Enable error reporting for codepaths that do not explicitly return in a function. */,
> ```

- _To warn for unused variables, uncomment `"noImplicitReturns": true` in `tsconfig.json` file._

> ```json
>    "noUnusedLocals": true /* Enable error reporting when local variables aren't read. */,
> ```

## OBJECTS

- _Refer to `index.ts`._

# FURTHER EXPLORATION / RESEARCH

## Tying It All Together

- _CRUD Tutorial Using React + Firebase | Firebase 9 and Firestore Tutorial_
  > - _https://www.youtube.com/watch?v=jCY6DH8F4oc_
- _Building a Full-Stack Project with Firebase 10 and React (Vite)_
  > - _https://www.linkedin.com/pulse/building-full-stack-project-firebase-10-react-vite-mg-mayur-gandhi/_

## Firebase

- _Video: Firebase in 100 seconds: https://www.youtube.com/watch?v=vAoB4VbhRzM_
- _Can connect with FireStore to use as database._
- _Can easily implement Google Authentication (OAuth)._
- _Question: What is included in the Firebase free tier? https://firebase.google.com/pricing_
  > - _Should be ok with the free tier._
- _Firebase is weak for complex queries. What is considered a "complex query"?_
  > - _https://stackoverflow.com/questions/42672790/firebase-for-complex-query-a-no-go. In this case, the question writer has 3 parameters, but it "was not allowed". The best answer responds saying "complex queries" can be ok. Depends on how your data is structured / stored -- allowing it to be queried. Take away: Not quite sure how this might impact my project just yet._
- _Video: WHAT IS FIREBASE | FULL REVIEW https://www.youtube.com/watch?v=P7FwFANxW4s_
  > - _Advantages: Speed up back end development. Focus on front end._
  > - _Firebase is a back end as a service platform (BaaS), offering tools and backend to build highly scalable apps._
  > - _Firebase Auth is a Google Authentication feature; allows you to use pre-built UI libraries for user authentication. Use to create better sign-in experience, with security._
  > - _Realtime Database - store data; with ability to work offline._
- _StackOverflow - What's the difference between Cloud Firestore and the Firebase Realtime Database?_
  > - _https://stackoverflow.com/questions/46549766/whats-the-difference-between-cloud-firestore-and-the-firebase-realtime-database_
  > - _Firebase's Realtime Database is a "just a giant JSON tree"._
  > - _Firestore's Cloud database is more structured._

## Firestore

- _Firestore Data Modeling - Five Cool Techniques_
  > - _https://www.youtube.com/watch?v=35RlydUf6xo_

## Vite

- _Vite in 100 seconds: https://www.youtube.com/watch?v=KCrXgy8qtjM_
- _Vite Crash Course | Faster Alternative to CRA: https://www.youtube.com/watch?v=89NJdbYTgJ8_
- _Bundlers (CRA, webpack, etc.) - are good for more modern dynamic interfaces. Need build tools. Larger file structure._
- _Vite is fast and light. Makes TS 20-30x faster._
- _Faster alternative to create-react-app._
- _webpack takes all files and bundles into `bundle.js`, including a script tag in html; a production build_
- _Similar effect happens when you use create-react-app. CRA uses webpack under the hood_
- _Issue with CRA is that when you make a change during development, it goes through that bundling / packaging sequence every single time; However, when your app grows, it starts to get slow._
- _Vite works differently; In development, it doesn't rebundle every change. It uses native ES modules (import / export syntax). It uses ES Build, which uses those modules, serving your code directly to the browser during development. Vite is a dev server. _

  > ```js
  >    <script type="module" src="main.js"></script>
  >     <script type="module">
  >       /*Javascript module code here*/
  >     </script>
  > ```

- _When it's time to bundle code for production, it uses Rollup when run `$ npm run build`. It's fast because it doesn't have to rebundle every time like CRA. People use CRA when not using Next.js or Remix._
- _Vite has a React plugin, which makes it a great replacement for CRA. Can construct a webpack-like setup with React. Use this command:_

> ```bash
>    $ npm init vite
> ```

- _Sets up a React TypeScript project easily, much like we used create-react-app._
- _Comes with a vite config file `vite.config.ts` where we can add plugins._
- _To serve the application locally, run:_

> ```bash
>    $ npm run dev
> ```

- _When modifying source code, changes are reflected instantly in local server without losing state of application. This is called "Hot Module Replacement" (HMR)_
- _Run this to build the app for production:_

> ```bash
>    $ npm run build
> ```

### NOTE: Worked on Capstone Proposal Google Docs

- _https://docs.google.com/document/d/1Vk5Ze77YqNjfcRR8oHfHETSusREcpDkR_FD9O2H60VA/edit?usp=sharing_
