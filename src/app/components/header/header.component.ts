import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    sectionList: string[] = ["blog", "eventi", "contatti"];

    constructor() {}

    ngOnInit(): void {}
}
