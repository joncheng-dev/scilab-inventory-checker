2023/12/01 - Log Started Writing at 8:20 AM

# Research TypeScript

#### Watching "TypeScript Tutorial for Beginners"

https://www.youtube.com/watch?v=d56mG7DezGs

## COMPILING A JS FILE WITH AN EXISTING TS FILE

To compile an equivalent js file (ex: index.ts -> index.js)
in terminal, type command
`tsc index.ts` without the arrows
This makes an `index.js` in the same folder

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
| JavaScript | TypeScript |
|------------|------------|
|   number   |     any    |
|    string  |    unknown |
|  boolean   |   never    |
|    null    |    enum    |
| undefined  |    tuple   |
|   object   |            |

## THE ANY TYPE

## ENUMS

Constants related to one another. i.e. T-shirt sizes
Refer to `index.ts`.

## FUNCTION
