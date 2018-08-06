// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
  apiKey: "AIzaSyDoPLQblg17h8h_tnwokDJwcWV9KAN5UqY",
      authDomain: "pizzashop-dc853.firebaseapp.com",
      databaseURL: "https://pizzashop-dc853.firebaseio.com",
      projectId: "pizzashop-dc853",
      storageBucket: "pizzashop-dc853.appspot.com",
      messagingSenderId: "569054004036"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
