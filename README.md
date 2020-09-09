# RN Boilerplate

## Introduction

A boilerplate project for react native.

## How to use

**Step 1:**

Download or clone this repo by using the link below:

```
https://github.com/SystangoTechnologies/RN-Boilerplate.git
```

**Step 2:**

Go to project root and execute the following command in console to get the required dependencies: 

```
npm install 
```

**Step 3:**

**For iOS only:**

```
cd ios && pod install
```

**Step 4:**

To run the app on device or simulator, execute the following command.

For android:
```
react-native run-android
```

For iOS:
```
react-native run-ios
```

## Commit & push ``

husky added in the package, To push the code on the repo you need execute the following command.

```
yarn validate
eslint --fix .
```

## Dependencies Used

* react-native                                      - 0.63.2
* react-navigation                                  - 4.0.10
* redux                                             - ^2.3.2

## Features

* Generic API structure.
* Generic Folder structure.

## Folder Structure

```
assets/
|- Home
|- images
App/
|- Actions
    |- startUpActions.js
|- Component
    |- LandingScreen
    |- SplashScreen
    |- Root
|- Config
    |- index.js
|- i18n
    |- locales
    |- index.js
|- Navigators
    |- AppNavigator.js
|- Reducers
    |- index.js
    |- StartUpReducer.js
|- Sagas
    |- index.js
    |- StartUpSaga.js
|- Services
    |- NavigationService.js
|- Stores
    |- CreateStore.js
|- Theme
    |- ApplicationStyles.js
    |- Colors.js
    |- Fonts.js
    |- Helpers.js
    |- Images.js
    |- index.js
    |- Metrics.js
|- Utils
    |- asyncStorage.js
    |- Constants.js
    |- scale.js
    |- sendJson.js
    |- showToast.js
    |- Validators.js
|- App.js


```

## Conclusion

This is a boilerplate project made in react native. Supported on all iOS and android devices.