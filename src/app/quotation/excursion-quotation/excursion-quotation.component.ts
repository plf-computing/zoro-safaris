import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExcursionService } from '../../excursions/excursion.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-excursion-quotation',
  standalone: true,
  imports: [NgFor,NgIf,ReactiveFormsModule],
  templateUrl: './excursion-quotation.component.html',
  styleUrl: './excursion-quotation.component.css'
})
export class ExcursionQuotationComponent implements OnInit {
exForm:FormGroup;
allExcursions:any;

constructor(private fbb: FormBuilder,private excuService:ExcursionService,){
    this.exForm = this.fbb.group({
      adults: ['', Validators.required],
      children: ['', Validators.required], 
      excursion: ['', Validators.required],
      departure: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  
  }
  ngOnInit():void{
    this.allExcursions = this.excuService.getExcursions();

  }

  onSubmit() {
    if (this.exForm.valid) {
      console.log(this.exForm.value);  // Handle form submission
    }
  }

}
