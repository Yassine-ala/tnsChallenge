import { Component } from "@angular/core";
var Themes = require("nativescript-themes");

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {

    constructor() { 
      //  Themes.applyTheme(Themes.getAppliedTheme("app-light.css"));
    }

   /*  switchTheme(obscure: boolean) {
        obscure ? Themes.applyTheme("app-dark.css") : Themes.applyTheme("app-light.css");
    } */

 }
