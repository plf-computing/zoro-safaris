import { Component } from '@angular/core';
import { SafarisPageComponent } from "./safaris-page/safaris-page.component";

@Component({
  selector: 'app-safaris-tours',
  standalone: true,
  imports: [SafarisPageComponent],
  templateUrl: './safaris-tours.component.html',
  styleUrl: './safaris-tours.component.css'
})
export class SafarisToursComponent {

}
