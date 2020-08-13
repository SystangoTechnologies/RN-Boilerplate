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

## Dependencies Used

* react-native-fbsdk                                - ^2.0.0
* react-native-sentry                               - ^0.43.2
* react-navigation                                  - 4.0.10
* redux                                             - ^2.3.2
* react-native-image-picker                         - ^0.2.1
* @react-native-community/google-signin             - ^4.0.3
* @react-native-firebase/analytics                  - ^7.3.1
* @react-native-firebase/app                        - 8.7.2
* @react-native-firebase/messaging                  - ^7.5.0
* react-native-google-places-autocomplete           - ^1.8.0

## Features

* Generic API structure.
* Generic Folder structure.
* Social login.

## Folder Structure

```
assets/
|- Home
|- images
App/
|- Actions
    |- LanguageActions.js 
    |- startUpActions.js
    |- userActions.js
|- Component
    |- FBAuth
    |- GoogleAuth
    |- LoginScreen
    |- SignupScreen
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
    |- index.
    |- LangaugeReducer.js
    |- StartUpReducer.js
    |- UserLoginReducer.js
|- Sagas
    |- index.
    |- LangaugeSaga.js
    |- StartUpSaga.js
    |- UserLoginSaga.js
|- Services
    |- googleAuth.js
    |- NavigationService.js
    |- UserService.js
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