# first-simple-typescript
TypeScript Documentation https://www.typescriptlang.org/docs/

## How to setup typescript project
### Open your cmd to run these commands
1. mkdir new-dir 
2. cd new-dir 

### Open your directory in editor to run these commands
1. npm init
2. npm install -D typescript
3. npx tsc -- init

### Add these 2 lines in tsconfig.json file
"include": ["src/**/*"], <br/>
"exclude": ["test"]

### Unhide these commands in tsconfig.json file
"allowJs", "declaration", "sourceMap", "outDir", "rootDir"

### Create directory and file to run typescript
create new directory and name it "src". <br/>
create a file call "main.ts" inside that src dir.

### Run main.ts file
1. npx tsc
2. node .






