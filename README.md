# Getting Started with Create React App
download the current project folder and run command. 
## yarn install

## Available Scripts
In the project directory, you have to run:
### `yarn start`
Runs the app in the development mode.
Open (http://localhost:3000) to view it in the browser.
### `yarn test`

we are using msw library to mock data in test suite. Jest , react test library for testing,
axios for making http request. 
bootstrap for designing purpose.

there is some issue with record label as some time recode Label is not available under response. so, the required 
label is not available under view.

for error handling, I used useState Hook which is populated whenever the API response through an Error. 
and one error message "Something went wrong" is available on user Screen.