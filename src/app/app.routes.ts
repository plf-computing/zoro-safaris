import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SafarisToursComponent } from './safaris-tours/safaris-tours.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ExcursionDetailsComponent } from './excursions/excursion-details/excursion-details.component';
import { SafarisDetailsComponent } from './safaris-tours/safaris-details/safaris-details.component';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';
import { Tip1Component } from './travel-tips/tip-1/tip-1.component';


export const routes: Routes = [
    {
        path: '', redirectTo:'home' ,pathMatch:'full'
    },
    {
        path:'home', component:HomeComponent, 
    },
    {
        path:'safaris',component:SafarisToursComponent
    },
    { 
        path: 'safaris/:id', component: SafarisDetailsComponent }, 
    
    {
        path:'excursions', component:ExcursionsComponent
    },
    { 
        path: 'excursion/:id', component: ExcursionDetailsComponent }, 
    {
        path:'about-us',component:AboutUsComponent
    },
    {
        path:'book',component:BookNowComponent
    },
    {
        path:'tips',component:TravelTipsComponent
    },
    {
        path:'leaving',component:Tip1Component
    }

    
    
];
