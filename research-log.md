2023/12/01 - Log Started Writing at 8:20 AM

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

```json
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "noEmitOnError": true /* Disable emitting files if any type checking errors are reported. */,
```

With these settings, typing `tsc` in terminal at the project folder will generate JS files in dist

## DEBUGGING TS CODE

In `tsconfig.json`, un-comment `sourceMap`

```json
    "sourceMap": true /* Create source map files for emitted JavaScript files. */,
```

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

```json
    "noUnusedParameters": true /* Raise an error when a function parameter isn't read. */,
```

- _In `tsconfig.json` file, uncomment `"noImplicitReturns": true`. This will warn if in function, not all code paths return a value._

```json
    "noImplicitReturns": true /* Enable error reporting for codepaths that do not explicitly return in a function. */,
```

- _To warn for unused variables, uncomment `"noImplicitReturns": true` in `tsconfig.json` file._

```json
    "noUnusedLocals": true /* Enable error reporting when local variables aren't read. */,
```

## OBJECTS

- _Refer to `index.ts`._

# FURTHER EXPLORATION / RESEARCH

2023/12/01 - Start around 1:20 PM

## Firebase

- _Firebase in 100 seconds: https://www.youtube.com/watch?v=vAoB4VbhRzM_
- _Can connect with FireStore to use as database._
- _Can easily implement Google Authentication (OAuth)._

## Vite

- _Vite in 100 seconds: https://www.youtube.com/watch?v=KCrXgy8qtjM_
- _Fast and light. Makes TS 20-30x faster._
- _Can be used to React to construct a webpack-like setup. Use this command:_

```json
    $ npm init vite
```

- _Can set up a React TypeScript project easily, much like we used create-react-app._
- _Comes with a vite config file `vite.config.ts` where we can add cool plugins._
- _To serve the application locally, run:_

```json
    $ npm run dev
```

- _When modifying source code, changes are reflected instantly in local server without losing state of application. This is called "Hot Module Replacement" (HMR)_
- _Run this to build the app for production:_

```json
    $ npm run build
```
