import { Component, OnInit } from '@angular/core';
import { SafarisService } from '../safaris.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-safaris-details',
  standalone: true,
  imports: [NgIf,NgFor,ReactiveFormsModule],
  templateUrl: './safaris-details.component.html',
  styleUrl: './safaris-details.component.css'
})
export class SafarisDetailsComponent implements OnInit {
 quoteForm : FormGroup;
 safaris:any
 allSafaris:any
 safariItenaries:any
  images:string[]=[
    '../../../assets/safari/IMG-20241004-WA0025.jpg',
    '../../../assets/safari/IMG-20241004-WA0033.jpg',
    '../../../assets/safari/IMG-20241004-WA0016.jpg'
  ]

  constructor(private fb: FormBuilder,private safariService:SafarisService,private route: ActivatedRoute){
    this.quoteForm = this.fb.group({
      adults: ['', Validators.required],
      children: [''],
      safari: ['', Validators.required],
      departure: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  
  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
  this.allSafaris = this.safariService.getSafaris();
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

    onSubmit() {
    if (this.quoteForm.valid) {
      console.log(this.quoteForm.value);  // Handle form submission
    }
  }
   
  }
  


