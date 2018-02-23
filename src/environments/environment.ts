// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC0xfd_QbFHT3IV8C5wrlIzzTLJ6cHKFEE",
    authDomain: "todo-app-bedu.firebaseapp.com",
    databaseURL: "https://todo-app-bedu.firebaseio.com",
    projectId: "todo-app-bedu",
    storageBucket: "todo-app-bedu.appspot.com",
    messagingSenderId: "394568616960"
  }
};
