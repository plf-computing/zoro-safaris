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
import { Tip2Component } from './travel-tips/tip-2/tip-2.component';
import { Tip3Component } from './travel-tips/tip-3/tip-3.component';
import { Tip4Component } from './travel-tips/tip-4/tip-4.component';
import { Tip5Component } from './travel-tips/tip-5/tip-5.component';
import { Tip6Component } from './travel-tips/tip-6/tip-6.component';


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
    },
    {
        path:'packing',component:Tip2Component
    },
    {
        path:'safari-rules',component:Tip3Component
    },
    {
        path:'visa-kenya',component:Tip4Component
    },
    {
        path:'food-in-kenya',component:Tip5Component
    },
    {
        path:'when-to-go',component:Tip6Component
    }

    
    
];
