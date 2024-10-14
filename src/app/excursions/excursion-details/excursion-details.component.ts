import {  Component, OnInit } from '@angular/core';
import { ExcursionService } from '../excursion.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { ExcursionQuotationComponent } from "../../quotation/excursion-quotation/excursion-quotation.component";



@Component({
  selector: 'app-excursion-details',
  standalone: true,
  imports: [NgIf, ExcursionQuotationComponent],
  templateUrl: './excursion-details.component.html',
  styleUrl: './excursion-details.component.css'
})


export class ExcursionDetailsComponent implements OnInit {

  
  constructor(private excService: ExcursionService,private route: ActivatedRoute ) {}
  excursions: any
  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the route
    if (id) {
      this.excursions= this.excService.getExcursions().find(e => e.id === +id); 
    }
    if (!this.excursions) {
      console.error('Excursion not found for id:', id);
    }
   
    window.scrollTo(0, 0);
  }
 

 
}
