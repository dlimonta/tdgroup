import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./modules/home-page/home-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { HeaderComponent } from "./components/header/header.component";
import { EventCardComponent } from './components/event-card/event-card.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        LoginFormComponent,
        HeaderComponent,
        EventCardComponent,
        LandingPageComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
    exports: [HeaderComponent],
})
export class AppModule {}
