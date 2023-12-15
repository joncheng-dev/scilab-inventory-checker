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

- ~8:05 AM - Start experimental project for experimenting with database structure; Link to Firestore; Link to expt project: https://github.com/joncheng-dev/db-expt-nosql.git
- 10:58 AM - Brainstorm database organization; 1. to accomodate categories -- possibly "collections"; 2. to show that a certain user checked out an item
- ~1:00 PM - Try to use ideas from brainstorm in experiment project.
- ~2:40 PM - Research grabbing user information such as account email from Firebase/Firestore. Next step would be to use this information to save into checkedOutBy field in an item entry.
- ~3:30 PM - Try to use user info in checkedOutBy property in items. First, make a "Check Out" button, which then stores the current user's information into a checkedOutBy property.
- ~4:00 PM - Approach from video does not seem to grab user info on account creation. Continuing research by reading other sources including Firebase/Firestore documentation.
- ~4:20 PM - Firebase/Firestore documentation: Found that the approach I was using is an outdated version. Works with new implementation.
- ~4:25 PM - Now proceeding with next step: Have a check-out button shown in item details that collects the user's id upon clicking.

#### Saturday, 12/09/2023

- ~9:00 AM - Work on adding 'available' field to items. This value starts as true, and becomes false when user clicks to check out the item. Also researching how to simultaneously add this item to user's profile of items they currently are in possession of -- leading me to "batch writes" and "transactions".

#### Friday, 12/15/2023

- ~8:07 AM - Log Note: Been working on a new repository. Before, I've experimented with using React to connect to Firebase/Firestore. I've been able to CRUD the correct collections and logs in the database in Firestore. Decided to start my actual repo, creating a TypeScript react app using vite. I've been refactoring, adding the TS typing to the components. https://github.com/joncheng-dev/lab-inventory-tracker

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
- _Research finding user account information -- for purpose of saving into checkedOutBy field._
  > - _Firebase Auth Tutorial #14 - Showing User Info: https://www.youtube.com/watch?v=N5-veJg7ktk_
  > - _Firebase Auth Tutorial #13 - Firestore Realtime Listener: https://www.youtube.com/watch?v=-FbJaAztM_k_
  > - _Firebase Auth Tutorial #15 - Firestore Users Collection: https://www.youtube.com/watch?v=qWy9ylc3f9U_
  > - _https://stackoverflow.com/questions/38352772/is-there-any-way-to-get-firebase-auth-user-uid_
  >   > - _Can get current user email with `userCredential.user.email`_
  >   > - _Can get current user id with `userCredential.user.uid`_
  > - _Next question is, how can I access this information outside of the SignIn component?_
  >   > - _At this timestamp, the video creator discusses how to grab the user's credentials from the SignIn page at moment of creating account: https://youtu.be/qWy9ylc3f9U?si=M4aC3WcnyuDhcc3v&t=259_
  - _Research "batch writes" and "transactions" in firebase._
    > - _How do Transactions Work? | Get to know Cloud Firestore #8: https://www.youtube.com/watch?v=dOVSr0OsAoU_

## Firestore

- _Firestore Data Modeling - Five Cool Techniques_
  > - _https://www.youtube.com/watch?v=35RlydUf6xo_

#### _Database structure brainstorm_

- _Objective: To record in the database who has currently checked out an item from the laboratory inventory._
  > - _All entries in database have a "checked out by" field. Starts null. Field can be updated by a user name._
  > - _This user name is initially a string._
  > - _Later, change it to a link, which goes to a user's profile page._
- _Objective: Authentication. Have accounts to keep track of multiple users and their checked out items._
  > - _When user views an item's details, and clicks check out, save the user's name (and Id) into the "checked out by" field._
  >   > - _One user should be able to "check out" multiple items in database (user's name is in "checked out by" field)._
  >   > - _Clicking an item's details should show the user who has currently checked out the item._
  >   > - _For now, follow the lesson on authentication using email / password. For capstone, try Google Authentication._
- _Objective: Availability Status_
  > - _Show availability. When checked-out field is null, the item's status is "available". When someone has the item, the item's status should be "unavailable"._
  >   > - _1. Update doc in database to have this field._
  >   > - _2. Have hooks to handle this state change(?)._
  >   > - _3. Update business logic & UI._
  > - _Display a Profile for the user._
  >   > - _Here, show what the user currently has in their possession._
  >   > - _You are logged in as: "name@email.com"._
  > - _Return button should reverse the property fields._
  >   > - _In the specified item, the available property should return to "true"._
  >   > - _In the user's profile, the item's id should be removed from the checkedOutItems array._
  > - _Check to see that multiple users can concurrently coexist._
  >   > - _Users should be able to check out multiple items without clashing with the other users._
- _Objective: Profiles_
  > - _Make a profile for each user._
  >   > - _Would this be its own "collection" in the database with each user being its own doc?_
  >   > - _Upon clicking a user's profile, display all items currently checked out by this user._
  >   > - _Any user can view another user's profile._
- _Objective: Quantities_
  > - _Update initial form to have a quantity field._
  >   > - _A user may check out some (not necessarily all counts) of an item. I.e. Jon has checked out 5 of 10 slinkies. This means 5 are still available._
- _Objective: Categories_
  > - _Each item can have its own category tags. Similar to Many to Many relationships. How would this look like in a NoSQL database?_
- _Objective: Searches/Queries_
  > - _Users would be able to search for items by category, by name in string, etc._
- _Objective: Authorization for Roles_
  > - _Admin roles have the addition ability to CRUD the items in inventory._
  > - _Standard roles can only Read, check out, and return items._

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
