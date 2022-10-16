import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-login-form",
    templateUrl: "./login-form.component.html",
    styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
    showLogin: boolean = false;
    showRegister: boolean = false;
    constructor() {}

    ngOnInit(): void {
        this.showLogin = true;
    }

    onLogin() {
        this.showLogin = true;
        this.showRegister = false;
    }

    onRegister() {
        this.showRegister = true;
        this.showLogin = false;
    }
}
