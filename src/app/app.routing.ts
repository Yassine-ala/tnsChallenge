import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "~/app/pages/home/home.component";
import { MenuComponent } from "~/app/pages/menu/menu.component";

const routes: Routes = [
    { path: "", redirectTo: "/menu", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "menu", component: MenuComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }