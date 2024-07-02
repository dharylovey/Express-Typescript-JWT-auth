# Setting up an Express TypeScript Project

1. Install Express:  npm i express

2. Install TypeScript: npm i -D typescript

3. Install dotenv for environment variables: npm i dotenv

# Environment Variables

The following environment variables are required for the project:

- `PORT`: The port number on which the server will listen.
- `MONGODB_URI`: The MongoDB connection string.
- `JWT_SECRET`: The secret key for JSON Web Tokens.

To set these environment variables, create a `.env` file in the root directory of your project and add the following lines:


4. Install types for Express: npm i -D @types/express

5. Create a .gitignore file.

6. Initialize TypeScript configuration: npx tsc --init

7. Update tsconfig.json:
Uncomment the following configurations:
- "rootDir": "./src"
- "outDir": "dist"
- "noImplicitAny": true
- "strictNullChecks": true
- "strictFunctionTypes": true

8. Build TypeScript project: npx tsc --build
   
9. Install nodemon for development: npm i -D nodemon

10. Update package.json scripts:
 ```
 "build": "tsc --build",
 "start": "node ./dist/server.js",
 "dev": "nodemon ./src/server.ts"
 ```

11. Install ts-node:
 ```
 npm i -D ts-node
 ```

12. Add ESLint for linting:
 ```
 npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
 ```

 Create .eslintrc.cjs with the following content:
 ```
 /* eslint-env node */
 module.exports = {
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   root: true,
 };
 ```

 Create .eslintignore with content "dist" to ignore linting for compiled output.

 Run ESLint:
 ```
 npx eslint
 ```

13. Add Prettier for code formatting:
 ```
 npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
 ```

 Create .prettierrc with the following content:
 ```
 {
   "printWidth": 120,
   "singleQuote": true,
   "prettier.singleQuote": true,
   "trailingComma": "all",
   "tabWidth": 2
 }
 ```

 Update .eslintrc.cjs with Prettier configuration:
 ```
 /* eslint-env node */
 module.exports = {
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   root: true,
 };
 ```

 Run Prettier:
 ```
 npx prettier --write src
 ```

14. Install MongoDB:
 ```
 npm i mongodb
 ```

15. Install Mongoose for MongoDB object modeling:
 ```
 npm i mongoose
 ```
