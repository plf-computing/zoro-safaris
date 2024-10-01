import { Component } from '@angular/core';
import { ExcursionPageComponent } from "./excursion-page/excursion-page.component";


@Component({
  selector: 'app-excursions',
  standalone: true,
  imports: [ExcursionPageComponent,],
  templateUrl: './excursions.component.html',
  styleUrl: './excursions.component.css'
})
export class ExcursionsComponent {

}
