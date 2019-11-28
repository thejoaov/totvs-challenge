<div align="center">
  <h1>Instructions - Mobile app</h1>
</div>

---

## Run locally

To run the app locally, first install dependencies. I personally recomend [yarn](https://yarnpkg.com), but you probably can use npm without any problem.
To install dependencies, run the comand `yarn` or `npm install` inside mobile folder.
Set up the server, with [this instructions](https://github.com/thejoaov/totvs-challenge/blob/master/docs/server.md), then, with the server up and running, get the _ip_ of your machine, and, the [src/constants.js](https://github.com/thejoaov/totvs-challenge/blob/master/mobile/src/constants.js) file, put the adress with the port in the `apiUrl.dev`, like this:

```javascript
export const apiUrl = {
  dev: "http://<your ip here>:3333", // 3333 or the port you defined in the server
  prod: "https://thejoaov.tech"
};
```

**Note:** the `prod` address, is the "production" server. The application only uses it when you run the application in production mode, or when you open the mobile generated application (apk or via playstore).

To start the app, just run `yarn start` or `npm start`, and follow the Expo instructions to run the app in the emulator or in any device.

---

## About

The app is built in [React native](https://facebook.github.io/react-native/), using [Expo](https://expo.io/), and [yarn](https://yarnpkg.com).

---

## Screenshots

<div align="center">
  <img src="https://raw.githubusercontent.com/thejoaov/totvs-challenge/master/docs/assets/mobile1.png" height="300"/>
  <img src="https://raw.githubusercontent.com/thejoaov/totvs-challenge/master/docs/assets/mobile6.png" height="300"/>
  <img src="https://raw.githubusercontent.com/thejoaov/totvs-challenge/master/docs/assets/mobile3.png" height="300"/>
  <img src="https://raw.githubusercontent.com/thejoaov/totvs-challenge/master/docs/assets/mobile4.png" height="300"/>
  <img src="https://raw.githubusercontent.com/thejoaov/totvs-challenge/master/docs/assets/mobile5.png" height="300"/>
  <img src="https://raw.githubusercontent.com/thejoaov/totvs-challenge/master/docs/assets/mobile7.png" height="300"/>
  <img src="https://raw.githubusercontent.com/thejoaov/totvs-challenge/master/docs/assets/mobile8.png" height="300"/>
  <img src="https://raw.githubusercontent.com/thejoaov/totvs-challenge/master/docs/assets/mobile9.png" height="300"/>
</div>
