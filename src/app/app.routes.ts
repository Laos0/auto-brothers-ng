import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OurServiceComponent } from './views/our-service/our-service.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'service', component: OurServiceComponent},
    { path: 'contact', component: ContactUsComponent}
    
];

// this is the standalone router setup using bootstrapApplication call
bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
});