import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./modules/home-page/home-page.component";
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
    declarations: [AppComponent, HomePageComponent, LoginFormComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
