import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SafarisService } from '../safaris-tours/safaris.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.css'
})
export class QuotationComponent implements OnInit {
  quoteForm : FormGroup;
  allSafaris:any

constructor(private fb: FormBuilder,private safariService:SafarisService,){
  this.quoteForm = this.fb.group({
    adults: ['', Validators.required],
    children: ['', Validators.required], 
    safari: ['', Validators.required],
    departure: ['', Validators.required],
    phone: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });


}

ngOnInit():void{
  this.allSafaris = this.safariService.getSafaris()

}

onSubmit() {
  if (this.quoteForm.valid) {
    console.log(this.quoteForm.value);  // Handle form submission
  }
}


}
