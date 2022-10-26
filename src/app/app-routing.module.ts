import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./modules/home-page/home-page.component";
import { LandingPageComponent } from "./modules/landing-page/landing-page.component";

const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "home-page", component: HomePageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
