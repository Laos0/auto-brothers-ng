import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent }
];

// this is the standalone router setup using bootstrapApplication call
bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
});