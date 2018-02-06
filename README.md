React Native Boilerplate 
============
A react-native project can be used as a boilerplate for any new project. This project contains a base architecture to support redux with a structured codebase. This will save your valuable time which is needed to structure your code as part of initial setup.

### Step to customise this project as your base application

* [Step1](#Step1)
* [Step2](#Step2)
* [Step3](#Step3)

### Information about project files

* [Project Settings Information](#Project Settings)

### Contributor

* [Contributor](#contributors)


### Step1
Download the project from the repository.

### Step2
Rename the downloaded project with the name of your choice. You will need [react-native-rename](https://www.npmjs.com/package/react-native-rename) to rename react-native project.

Use following command to rename the project:

react-native-rename "YOUR PROJECT NAME"



### Step3
run followng commands inside your project directory
1. npm update npm -g
2. npm install
3. react-native link
4. npm start

### Project Settings
1. Home.js: File contains the navigation stack.
2. Utils: Folder contains all files needed for utility purpose.
3. Components: Folder contains all files needed for UI rendering.
4. Actions: Folder contains all files which are responsible for different actions.
5. Reducers: Folder contains all files which holds different reducers.
6. Services: Folder contains all files which is used to call all services needed for the application.
7. utils/config.js file contains BASE_URL for the application.


### Contributors

* [Tushar S](mailto:tushar@systango.com)
