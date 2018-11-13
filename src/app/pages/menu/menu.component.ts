import { OnInit, Component } from "@angular/core"
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

@Component({
    selector: "ns-menu",
    moduleId: module.id,
    templateUrl: "./menu.component.html",
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

    public screenInformation: ScreenInfo;

    constructor() {
        this.screenInformation = new ScreenInfo(
            screen.mainScreen.heightDIPs,
            screen.mainScreen.heightPixels,
            screen.mainScreen.scale,
            screen.mainScreen.widthDIPs,
            screen.mainScreen.widthPixels);
            console.log(this.screenInformation);
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }


}

class ScreenInfo {
    constructor(
        public heightDIPs: number,
        public heightPixels: number,
        public scale: number,
        public widthDIPs: number,
        public widthPixels: number
    ) { }
}