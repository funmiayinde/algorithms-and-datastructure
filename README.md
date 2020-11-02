# TypeScript Server

Simple TypeScript Server.

## Setting Up TypeScript Project

```
$ mkdir typscript-server
$ cd typescript-server
$ npm init -y
$ npm install --save-dev typescript nodemon ts-node @types/express @types/es6-shim
$ npm install --save express
```

Add script `tsc` to `package.json`:

```
"scripts": {
  "tsc": "tsc"
}
```

Initialize `tsconfig.json`:

```
$ npm run tsc -- --init
```

## Create source layout

```
$ mkdir src && cd src
$ touch server.ts
$ mkdir controllers && cd controllers
$ touch index.ts welcome.controller.ts
```

## Add source contents

src/server.ts

```
import * as express from 'express';


const app: express.Application = express.default();

const port = process.env.PORT || 3000;

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
```


## Add auto restart and debug support

Create `nodemon.json` with the following content:

```
{
    "ignore": ["**/*.test.ts", "**/*.spec.ts", ".git", "node_modules"],
    "watch": ["src"],
    "exec": "npm start",
    "ext": "ts"
}
```

Add the following scripts to `package.json`:

```
scripts: {
    "start": "node --inspect=5858 -r ts-node/register src/server.ts",
    "dev": "./node_modules/nodemon/bin/nodemon.js"
}
```

Create a .vscode/launch.json file with the following content:

```
{
    // Use IntelliSense para saber los atributos posibles.
    // Mantenga el puntero para ver las descripciones de los existentes atributos 
    // Para más información, visite: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Attach",
            "port": 5858,
            "restart": true,
            "protocol": "inspector"
        }
    ]
}
```

## Running with auto restart and debug support

```
$ npm install
$ npm run dev
```

From VS Code attach to process Node and debug.