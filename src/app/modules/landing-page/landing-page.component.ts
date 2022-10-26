import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
    navList: string[] = ["About", "Contatti"];

    constructor(private _router: Router) {}

    ngOnInit(): void {}

    navigateTo(path: string) {
        this._router.navigate([path]);
    }
}
