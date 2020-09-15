# Updates App - 2020

**A responsive App where employees can login and add/remove company updates.**

![Preview Image](src/images/updates-preview.png)

## Description:

Updates App built with React ^16.13.1 which includes user authentication and allows user to see all company updates with different filters.
All updates and tags are stored in Firebase.
For user auth is using a fake database which can be found in /src/database.js .
Username for test: test@email.com pass: test1
Username for test 2: test2@email.com pass: test2

**I used:**

- React JS
- React Router
- React Hooks and custom hooks
- Node Sass
- Firebase

### Setup Firebase:

1. Create a new app.
2. Create a new Cloud Firestore database.
3. Create a local env file(.env.local) with following credentials:
   FIREBASE_API_KEY = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   FIREBASE_AUTH_DOMAIN = xxxxxxxxxx.firebaseapp.com
4. Update databaseURL and projectID from firebase.js which can be found in src folder.

#### Installation Npm - npm install

```
`npm start` - Runs the app in the development mode.
`npm build` - Builds the app for production to the `build` folder.
`npm test` - Launches the test runner in the interactive watch mode.
```

#### Installation Yarn - yarn install

```
`yarn start` - Runs the app in the development mode.
`yarn build` - Builds the app for production to the `build` folder.
`yarn test` - Launches the test runner in the interactive watch mode.
```

**_Enjoy, Stefan 🚀🚀🚀_**

##### Other Images:

![Preview Image](src/images/updates-preview-2.png)
![Preview Image](src/images/updates-preview-3.png)
