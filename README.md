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
|- images
app/
|- actions
    |- StartUpActions.js
|- Component
    |- LandingScreen
    |- SplashScreen
    |- Root
|- config
    |- index.js
|- i18n
    |- locales
    |- index.js
|- navigators
    |- AppNavigator.js
|- reducers
    |- index.js
    |- StartUpReducer.js
|- sagas
    |- index.js
    |- StartUpSaga.js
|- services
    |- NavigationService.js
|- stores
    |- CreateStore.js
|- theme
    |- ApplicationStyles.js
    |- Colors.js
    |- Fonts.js
    |- Helpers.js
    |- Images.js
    |- index.js
    |- Metrics.js
|- utils
    |- AsyncStorage.js
    |- Constants.js
    |- Scale.js
    |- SendJson.js
    |- ShowToast.js
    |- Validators.js
|- App.js


```

## Conclusion

This is a boilerplate project made in react native. Supported on all iOS and android devices.