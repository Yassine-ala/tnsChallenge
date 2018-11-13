"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.screenInformation = new ScreenInfo(platform_1.screen.mainScreen.heightDIPs, platform_1.screen.mainScreen.heightPixels, platform_1.screen.mainScreen.scale, platform_1.screen.mainScreen.widthDIPs, platform_1.screen.mainScreen.widthPixels);
        console.log(this.screenInformation);
    }
    MenuComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: "ns-menu",
            moduleId: module.id,
            templateUrl: "./menu.component.html",
            styleUrls: ['./menu.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
var ScreenInfo = /** @class */ (function () {
    function ScreenInfo(heightDIPs, heightPixels, scale, widthDIPs, widthPixels) {
        this.heightDIPs = heightDIPs;
        this.heightPixels = heightPixels;
        this.scale = scale;
        this.widthDIPs = widthDIPs;
        this.widthPixels = widthPixels;
    }
    return ScreenInfo;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxzREFBNkU7QUFRN0U7SUFJSTtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLFVBQVUsQ0FDbkMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUM1QixpQkFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQzlCLGlCQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFDdkIsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUMzQixpQkFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksaUdBQWlHO1FBQ2pHLHVDQUF1QztJQUMzQyxDQUFDO0lBakJRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7O09BQ1csYUFBYSxDQW9CekI7SUFBRCxvQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHNDQUFhO0FBc0IxQjtJQUNJLG9CQUNXLFVBQWtCLEVBQ2xCLFlBQW9CLEVBQ3BCLEtBQWEsRUFDYixTQUFpQixFQUNqQixXQUFtQjtRQUpuQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQzFCLENBQUM7SUFDVCxpQkFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtbWVudVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWVudS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgc2NyZWVuSW5mb3JtYXRpb246IFNjcmVlbkluZm87XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbiA9IG5ldyBTY3JlZW5JbmZvKFxyXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzLFxyXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMsXHJcbiAgICAgICAgICAgIHNjcmVlbi5tYWluU2NyZWVuLnNjYWxlLFxyXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMsXHJcbiAgICAgICAgICAgIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zY3JlZW5JbmZvcm1hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxyXG4gICAgICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmNsYXNzIFNjcmVlbkluZm8ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGhlaWdodERJUHM6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgaGVpZ2h0UGl4ZWxzOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHNjYWxlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHdpZHRoRElQczogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB3aWR0aFBpeGVsczogbnVtYmVyXHJcbiAgICApIHsgfVxyXG59Il19