import { Component, OnInit } from '@angular/core';
import {   RouterLink, RouterLinkActive } from '@angular/router';
import { ExcursionService } from '../excursion.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-excursion-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './excursion-page.component.html',
  styleUrl: './excursion-page.component.css'
})
export class ExcursionPageComponent implements OnInit {
  
  constructor(private excService:ExcursionService){}
  excursions: any[] = [];
  
  

  ngOnInit(): void {  
    this.excursions = this.excService.getExcursions(); 
    
   
   
  }
}

