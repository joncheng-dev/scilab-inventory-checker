2023/12/01 - Log Started Writing at 8:20 AM
Research TypeScript
Watching "TypeScript Tutorial for Beginners"
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

## ENUMS

Constants related to one another. i.e. T-shirt sizes
Refer to `index.ts`.

## FUNCTION
