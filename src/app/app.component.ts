import { Component, OnInit } from "@angular/core";
var Themes = require("nativescript-themes");

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit{
    
    constructor() { 
        // application.setCssFileName("dark.css");
    }
    
    ngOnInit() {
        console.log(Themes.applyTheme(Themes.getAppliedTheme()));
    }

    switchTheme(obscure: boolean) {
        obscure ? Themes.applyTheme("dark.css") : Themes.applyTheme("light.css");
    }

 }
