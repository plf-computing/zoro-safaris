import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SafarisToursComponent } from './safaris-tours/safaris-tours.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ExcursionDetailsComponent } from './excursions/excursion-details/excursion-details.component';


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
        path:'excursions', component:ExcursionsComponent
    },
    { 
        path: 'excursion/:id', component: ExcursionDetailsComponent }, 
    {
        path:'about-us',component:AboutUsComponent
    },
    {
        path:'book',component:BookNowComponent
    }
    
    
];
