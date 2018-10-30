import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {Page} from 'tns-core-modules/ui/page';
import { Color } from "tns-core-modules/color/color";
import {AnimationCurve} from "tns-core-modules/ui/enums";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    @ViewChild('nativescript') nativescript: ElementRef;
    @ViewChild('angular') angular: ElementRef;
    @ViewChild('nangular') nangular: ElementRef;
    @ViewChild('title') title: ElementRef;

    constructor(private page: Page) { this.page.actionBarHidden = true; }

    ngOnInit(): void { 
        let me = this;
        setTimeout(function(){ me.start() }, 1000);
        
     }

    start() {
        this.nativescriptAnimation();
        this.angularAnimation(); 
        this.nangular.nativeElement.animate({ translate: { x: 170, y: 250 }}).catch(e=>console.log(e));
        this.title.nativeElement.animate({ translate: { x: 80, y: 350 }}).catch(e=>console.log(e));
    }

    nativescriptAnimation() {
        console.log('Entered!');
        //left
        this.nativescript.nativeElement.animate({ translate: { x: 75, y: 250 } })
        .then(() => this.nativescript.nativeElement.animate({ opacity: 1}))
        //top
        .then(() => this.nativescript.nativeElement.animate({ translate: { x: 150, y: 50 } }))
        //right
        .then(() => this.nativescript.nativeElement.animate({ translate: { x: 300, y: 250 } }))
        //bottom
        .then(() => this.nativescript.nativeElement.animate({ translate: { x: 150, y: 450 } }))
        //left
        .then(() => this.nativescript.nativeElement.animate({ translate: { x: 75, y: 250 } }))
        //center
        .then(() => this.nativescript.nativeElement.animate({ translate: { x: 170, y: 250 } }))
        .then(() => this.nativescript.nativeElement.animate({ opacity: 0}))
        .then(() => this.title.nativeElement.animate({ translate: { x: 80, y: 400 } }))
        .then(() => {
        console.log("Nativescript finished");
      })
        .catch((e) => {
        console.log(e.message);
      });
    }

    angularAnimation() {
        this.angular.nativeElement.animate({ translate: { x: 300, y: 250 } })
        .then(() => this.angular.nativeElement.animate({ opacity: 1}))
        .then(() => this.angular.nativeElement.animate({ translate: { x: 150, y: 450 } }))
        .then(() => this.angular.nativeElement.animate({ translate: { x: 75, y: 250 } }))
        .then(() => this.angular.nativeElement.animate({ translate: { x: 150, y: 50 } }))
        .then(() => this.angular.nativeElement.animate({ translate: { x: 300, y: 250 } }))
        .then(() => this.angular.nativeElement.animate({ translate: { x: 170, y: 250 } }))
        .then(() => this.angular.nativeElement.animate({ opacity: 0}))
        .then(() => this.nangular.nativeElement.animate({ opacity: 1}))
        .then(() => this.nangular.nativeElement.animate({ scale: { x: 2, y: 2 } }))
        .then(() => {
        console.log("NAngular finished");
      })
        .catch((e) => {
        console.log(e.message);
      });
    }

    nangularAnimation() {
        this.nangular.nativeElement.animate
    }
}
