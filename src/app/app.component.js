"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Themes = require("nativescript-themes");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // application.setCssFileName("dark.css");
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(Themes.applyTheme(Themes.getAppliedTheme()));
    };
    AppComponent.prototype.switchTheme = function (obscure) {
        obscure ? Themes.applyTheme("dark.css") : Themes.applyTheme("light.css");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFPNUM7SUFFSTtRQUNJLDBDQUEwQztJQUM5QyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksT0FBZ0I7UUFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFaUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDOztPQUNXLFlBQVksQ0FjdkI7SUFBRCxtQkFBQztDQUFBLEFBZEYsSUFjRTtBQWRXLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIFRoZW1lcyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWVzXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIC8vIGFwcGxpY2F0aW9uLnNldENzc0ZpbGVOYW1lKFwiZGFyay5jc3NcIik7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhUaGVtZXMuYXBwbHlUaGVtZShUaGVtZXMuZ2V0QXBwbGllZFRoZW1lKCkpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUaGVtZShvYnNjdXJlOiBib29sZWFuKSB7XG4gICAgICAgIG9ic2N1cmUgPyBUaGVtZXMuYXBwbHlUaGVtZShcImRhcmsuY3NzXCIpIDogVGhlbWVzLmFwcGx5VGhlbWUoXCJsaWdodC5jc3NcIik7XG4gICAgfVxuXG4gfVxuIl19