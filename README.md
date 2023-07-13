# DeezerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Project Instructions: 

Deezer is an internet-based music streaming service. You are required to implement an Angular app to explore its database.

Users should be able to search for artists. For every artist found show the artist's picture and the number of fans they have. On bigger screens, with more available space, also include the total number of albums.

Clicking/tapping the artist must allow users to see basic information about them, like its total number of fans. Also show its top 5 tracks along with a list of all their albums. For every album include the year in which it was released.

IMPORTANT
Most browsers enforce the same-origin restriction which may prevent HTTP calls to the Deezer API. To circumvent this problem and to enable CORS (Cross-origin resource sharing) in your app, you can use this two solutions:


Simply forward requests through a public CORS proxy that adds the Access-Control-Allow-Origin header to any OPTIONS pre-flight response. For example, when using the https://cors-anywhere.herokuapp.com/ proxy, then a call intended to https://api.deezer.com/search?q=eminem must become a call to https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem in your code. Do not forget to activate Heroku permission to use the proxy by clicking on the button Request temporary access to the demo server from this URL https://cors-anywhere.herokuapp.com/corsdemo

You can also use the Angular proxy configuration to circumvent CORS issue https://angular.io/guide/build#proxying-to-a-backend-server.