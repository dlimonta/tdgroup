import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./modules/home-page/home-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        LoginFormComponent,
        HeaderComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
    exports: [HeaderComponent],
})
export class AppModule {}
