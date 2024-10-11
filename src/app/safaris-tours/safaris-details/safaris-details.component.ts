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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the route
    if (id) {
      this.safaris= this.safariService.getSafaris().find(e => e.id === +id); 
      this.loadItinerary();
      console.log('Itinerary:', this.safariItenaries)
      // this.safariItenaries = this.safariService.getAllSafarisItenaries();
      // console.log('irenary',this.safariItenaries)
      
    }
    // if (this.safaris) {
    //   this.safariItenaries = this.safariService.getAllSafarisItenaries().find(i => i.name === this.safaris.title);
    // }

    // console.log('Itinerary:', this.safariItenaries); // Make sure this shows the right data
  }
  loadItinerary():void{
    if(this.safaris){
      this.safariItenaries = this.safariService.getAllSafarisItenaries().find(i =>i.name === this.safaris.title)
    }
  }
    // if (!this.safaris) {
    //   console.error('Safari not found for id:', id);
    // }
   
    // window.scrollTo(0, 0);
  }
  


