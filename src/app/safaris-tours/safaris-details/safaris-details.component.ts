import { Component, OnInit } from '@angular/core';
import { SafarisService } from '../safaris.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-safaris-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './safaris-details.component.html',
  styleUrl: './safaris-details.component.css'
})
export class SafarisDetailsComponent implements OnInit {

  constructor(private safariService:SafarisService,private route: ActivatedRoute){}

  safaris:any

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the route
    if (id) {
      this.safaris= this.safariService.getSafaris().find(e => e.id === +id); 
    }
    if (!this.safaris) {
      console.error('Safari not found for id:', id);
    }
   
    window.scrollTo(0, 0);
  }

}
