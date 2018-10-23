import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Color } from "tns-core-modules/color/color";
import {AnimationCurve} from "tns-core-modules/ui/enums";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class HomeComponent implements OnInit {

    @ViewChild('animatedBtn1') animatedBtn1: ElementRef;
    @ViewChild('animatedBtn2') animatedBtn2: ElementRef;
    @ViewChild('nangular') nangular: ElementRef;

    constructor(
    ) { }

    ngOnInit(): void {  }

    colorInstantChange() {
        console.log('Requesting immediate color change');
        this.animatedBtn1.nativeElement.backgroundColor = new Color("blue");
    }

    colorGradualChange() {
        console.log('Requesting gradual color change');
        this.animatedBtn2.nativeElement.animate({ backgroundColor: new Color("green"), duration: 2000 });
    }

    slidingAnimation() {
        console.log('Requesting a sliding animmation');
        this.nangular.nativeElement.animate({
            translate: { x: 0, y: 100},    
            duration: 1000,
            curve: AnimationCurve.easeIn
        });
    }

    rotationAnimation() {
        console.log('Requesting a sliding animmation');
        this.nangular.nativeElement.animate({
            translate: { x: 100, y: 100},  
            rotationAnimation: 360,  
            duration: 3000,
        });
    }
}
