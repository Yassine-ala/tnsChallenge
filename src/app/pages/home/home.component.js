"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page) {
        this.page = page;
        this.exploreClicked = false;
        this.darkTheme = false;
        this.page.actionBarHidden = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var me = this;
        setTimeout(function () { me.accelerate(); }, 500);
    };
    HomeComponent.prototype.accelerate = function () {
        var _this = this;
        this.nangular.nativeElement.animate({ translate: { x: 170, y: 250 } })
            .then(function () { return _this.title.nativeElement.animate({ translate: { x: 80, y: 400 } }); })
            .then(function () { return _this.nangular.nativeElement.animate({ opacity: 1 }); })
            .then(function () { return _this.nangular.nativeElement.animate({ scale: { x: 2, y: 2 } }); })
            .then(function () { return _this.startButton.nativeElement.animate({ translate: { x: 164, y: 450 } }); })
            .then(function () { return _this.startButton.nativeElement.animate({ opacity: 1 }); })
            .then(function () { return _this.aureola.nativeElement.animate({ translate: { x: 132, y: 130 } }); })
            .then(function () { return _this.horns.nativeElement.animate({ translate: { x: 145, y: 130 } }); })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    HomeComponent.prototype.start = function () {
        this.nativescriptAnimation();
        this.angularAnimation();
        this.startButton.nativeElement.animate({ translate: { x: 164, y: 450 } }).catch(function (e) { return console.log(e); });
        this.nangular.nativeElement.animate({ translate: { x: 170, y: 250 } }).catch(function (e) { return console.log(e); });
        this.title.nativeElement.animate({ translate: { x: 80, y: 350 } }).catch(function (e) { return console.log(e); });
    };
    HomeComponent.prototype.nativescriptAnimation = function () {
        var _this = this;
        //left
        this.nativescript.nativeElement.animate({ translate: { x: 75, y: 250 } })
            .then(function () { return _this.nativescript.nativeElement.animate({ opacity: 1 }); })
            .then(function () { return _this.nativescript.nativeElement.animate({ translate: { x: 150, y: 50 } }); })
            .then(function () { return _this.nativescript.nativeElement.animate({ translate: { x: 300, y: 250 } }); })
            .then(function () { return _this.nativescript.nativeElement.animate({ translate: { x: 150, y: 450 } }); })
            .then(function () { return _this.nativescript.nativeElement.animate({ translate: { x: 75, y: 250 } }); })
            .then(function () { return _this.nativescript.nativeElement.animate({ translate: { x: 170, y: 250 } }); })
            .then(function () { return _this.nativescript.nativeElement.animate({ opacity: 0 }); })
            .then(function () { return _this.title.nativeElement.animate({ translate: { x: 80, y: 400 } }); })
            .then(function () {
            console.log("Nativescript finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    HomeComponent.prototype.angularAnimation = function () {
        var _this = this;
        this.angular.nativeElement.animate({ translate: { x: 300, y: 250 } })
            .then(function () { return _this.angular.nativeElement.animate({ opacity: 1 }); })
            .then(function () { return _this.angular.nativeElement.animate({ translate: { x: 150, y: 450 } }); })
            .then(function () { return _this.angular.nativeElement.animate({ translate: { x: 75, y: 250 } }); })
            .then(function () { return _this.angular.nativeElement.animate({ translate: { x: 150, y: 50 } }); })
            .then(function () { return _this.angular.nativeElement.animate({ translate: { x: 300, y: 250 } }); })
            .then(function () { return _this.angular.nativeElement.animate({ translate: { x: 170, y: 250 } }); })
            .then(function () { return _this.angular.nativeElement.animate({ opacity: 0 }); })
            .then(function () { return _this.nangular.nativeElement.animate({ opacity: 1 }); })
            .then(function () { return _this.nangular.nativeElement.animate({ scale: { x: 2, y: 2 } }); })
            .then(function () { return _this.startButton.nativeElement.animate({ opacity: 1 }); })
            .then(function () {
            console.log("NAngular finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    HomeComponent.prototype.explore = function () {
        var _this = this;
        this.startButton.nativeElement.animate({ translate: { x: 164, y: 600 } })
            .then(function () {
            _this.startButton.nativeElement.text = "Login";
            _this.exploreClicked = true;
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    __decorate([
        core_1.ViewChild('nativescript'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "nativescript", void 0);
    __decorate([
        core_1.ViewChild('angular'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "angular", void 0);
    __decorate([
        core_1.ViewChild('nangular'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "nangular", void 0);
    __decorate([
        core_1.ViewChild('title'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "title", void 0);
    __decorate([
        core_1.ViewChild('startButton'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "startButton", void 0);
    __decorate([
        core_1.ViewChild('horns'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "horns", void 0);
    __decorate([
        core_1.ViewChild('aureola'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "aureola", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css'],
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxpREFBOEM7QUFROUM7SUFZSSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFWOUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVV2QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxVQUFVLENBQUMsY0FBWSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVGLGtDQUFVLEdBQVY7UUFBQSxpQkFZRTtRQVhFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDckUsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQWpFLENBQWlFLENBQUM7YUFDN0UsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQzthQUM5RCxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FB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QUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUF6RSxDQUF5RSxDQUFDO2FBRXJGLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUExRSxDQUEwRSxDQUFDO2FBRXRGLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUExRSxDQUEwRSxDQUFDO2FBRXRGLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUF6RSxDQUF5RSxDQUFDO2FBRXJGLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUExRSxDQUEwRSxDQUFDO2FBQ3RGLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQXRELENBQXNELENBQUM7YUFDbEUsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFD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UUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FhNEIsV0FBSTtPQVpyQixhQUFhLENBaUd6QjtJQUFELG9CQUFDO0NBQUEsQUFqR0QsSUFpR0M7QUFqR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGV4cGxvcmVDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBkYXJrVGhlbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBWaWV3Q2hpbGQoJ25hdGl2ZXNjcmlwdCcpIG5hdGl2ZXNjcmlwdDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2FuZ3VsYXInKSBhbmd1bGFyOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnbmFuZ3VsYXInKSBuYW5ndWxhcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3RpdGxlJykgdGl0bGU6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdzdGFydEJ1dHRvbicpIHN0YXJ0QnV0dG9uOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnaG9ybnMnKSBob3JuczogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2F1cmVvbGEnKSBhdXJlb2xhOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyBcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IFxyXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBtZS5hY2NlbGVyYXRlKCkgfSwgNTAwKTtcclxuICAgICB9XHJcblxyXG4gICAgYWNjZWxlcmF0ZSgpIHtcclxuICAgICAgICB0aGlzLm5hbmd1bGFyLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAxNzAsIHk6IDI1MCB9IH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy50aXRsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogODAsIHk6IDQwMCB9fSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5uYW5ndWxhci5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyBvcGFjaXR5OiAxfSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5uYW5ndWxhci5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyBzY2FsZTogeyB4OiAyLCB5OiAyIH0gfSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zdGFydEJ1dHRvbi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMTY0LCB5OiA0NTAgfSB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLnN0YXJ0QnV0dG9uLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IG9wYWNpdHk6IDF9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmF1cmVvbGEubmF0aXZlRWxlbWVudC5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDEzMiwgeTogMTMwIH19KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmhvcm5zLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAxNDUsIHk6IDEzMCB9fSkpXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEFuaW1hdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYW5ndWxhckFuaW1hdGlvbigpOyBcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAxNjQsIHk6IDQ1MCB9IH0pLmNhdGNoKGU9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgdGhpcy5uYW5ndWxhci5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMTcwLCB5OiAyNTAgfX0pLmNhdGNoKGU9PmNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB0aGlzLnRpdGxlLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiA4MCwgeTogMzUwIH19KS5jYXRjaChlPT5jb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF0aXZlc2NyaXB0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIC8vbGVmdFxyXG4gICAgICAgIHRoaXMubmF0aXZlc2NyaXB0Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiA3NSwgeTogMjUwIH0gfSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLm5hdGl2ZXNjcmlwdC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyBvcGFjaXR5OiAxfSkpXHJcbiAgICAgICAgLy90b3BcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLm5hdGl2ZXNjcmlwdC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMTUwLCB5OiA1MCB9IH0pKVxyXG4gICAgICAgIC8vcmlnaHRcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLm5hdGl2ZXNjcmlwdC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMzAwLCB5OiAyNTAgfSB9KSlcclxuICAgICAgICAvL2JvdHRvbVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMubmF0aXZlc2NyaXB0Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAxNTAsIHk6IDQ1MCB9IH0pKVxyXG4gICAgICAgIC8vbGVmdFxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMubmF0aXZlc2NyaXB0Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiA3NSwgeTogMjUwIH0gfSkpXHJcbiAgICAgICAgLy9jZW50ZXJcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLm5hdGl2ZXNjcmlwdC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMTcwLCB5OiAyNTAgfSB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLm5hdGl2ZXNjcmlwdC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyBvcGFjaXR5OiAwfSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy50aXRsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogODAsIHk6IDQwMCB9IH0pKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdGl2ZXNjcmlwdCBmaW5pc2hlZFwiKTtcclxuICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmd1bGFyQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYW5ndWxhci5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMzAwLCB5OiAyNTAgfSB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuYW5ndWxhci5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyBvcGFjaXR5OiAxfSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5hbmd1bGFyLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAxNTAsIHk6IDQ1MCB9IH0pKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuYW5ndWxhci5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogNzUsIHk6IDI1MCB9IH0pKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuYW5ndWxhci5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMTUwLCB5OiA1MCB9IH0pKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuYW5ndWxhci5uYXRpdmVFbGVtZW50LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMzAwLCB5OiAyNTAgfSB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmFuZ3VsYXIubmF0aXZlRWxlbWVudC5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDE3MCwgeTogMjUwIH0gfSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5hbmd1bGFyLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IG9wYWNpdHk6IDB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLm5hbmd1bGFyLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IG9wYWNpdHk6IDF9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLm5hbmd1bGFyLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IHNjYWxlOiB7IHg6IDIsIHk6IDIgfSB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLnN0YXJ0QnV0dG9uLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7IG9wYWNpdHk6IDF9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOQW5ndWxhciBmaW5pc2hlZFwiKTtcclxuICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBsb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubmF0aXZlRWxlbWVudC5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDE2NCwgeTogNjAwIH19KVxyXG4gICAgICAgIC50aGVuKCgpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5hdGl2ZUVsZW1lbnQudGV4dD1cIkxvZ2luXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9yZUNsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=