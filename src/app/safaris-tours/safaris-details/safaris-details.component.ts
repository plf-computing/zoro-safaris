import { Component, OnInit } from '@angular/core';
import { SafarisService } from '../safaris.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-safaris-details',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './safaris-details.component.html',
  styleUrl: './safaris-details.component.css'
})
export class SafarisDetailsComponent implements OnInit {


  constructor(private safariService:SafarisService,private route: ActivatedRoute){}

  safaris:any;
  safariItenaries:any
  images:string[]=[
    '../../../assets/safari/IMG-20241004-WA0025.jpg',
    '../../../assets/safari/IMG-20241004-WA0033.jpg',
    '../../../assets/safari/IMG-20241004-WA0016.jpg'
  ]

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the route
    if (id) {
      this.safaris= this.safariService.getSafaris().find(e => e.id === +id); 
      this.loadItinerary();
      // console.log('Itinerary:', this.safariItenaries)
      
      
    }
  
  }
  loadItinerary():void{
    if(this.safaris){
      this.safariItenaries = this.safariService.getAllSafarisItenaries().find(i =>i.name === this.safaris.title)
    }
  }

  getNumberOfImages() {
    const duration = this.safariItenaries?.duration;
    if (duration === 3 || duration === 4) {
      return 1; 
    } else if (duration === 6) {
      return 2; 
    } else if (duration === 7) {
      return 3; 
    }
    return 0; 
  }
   
  }
  


