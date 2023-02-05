# Development

This package is consist fo three parts. JQL Parser, SQL Transpiler and Extended Function.

## JQL Parser

We implement our own JQL parser by using [nearley](https://nearley.js.org/).
It parses jql text to AST(Abstracted Syntax Tree) for transpiler.

- To build JQL Parser
```
npm run build:parser
```

- To test JQL Parser
```
npm run test:parser
```

## SQL Transpiler

From AST, we transpile the tree to SQL.

```
npm run test:transpiler
```

## Extended Function

**Will be supported**, **Not supported yet**.

You can define our own function to extend your searching like below.

```
field = myfunction(arg1, arg2) and date < now()
```
