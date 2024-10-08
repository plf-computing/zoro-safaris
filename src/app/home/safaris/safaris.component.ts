import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-safaris',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './safaris.component.html',
  styleUrl: './safaris.component.css'
})
export class SafarisComponent {
  constructor(private router: Router) { }

  
  goToSafari(id: number) {
    this.router.navigate([`/safaris/${id}`]);
  }

}
