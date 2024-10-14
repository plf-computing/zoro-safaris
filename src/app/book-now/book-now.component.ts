import { Component } from '@angular/core';
import { ExcursionQuotationComponent } from "../quotation/excursion-quotation/excursion-quotation.component";
import { QuotationComponent } from "../quotation/quotation.component";

@Component({
  selector: 'app-book-now',
  standalone: true,
  imports: [ExcursionQuotationComponent, QuotationComponent],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css'
})
export class BookNowComponent {

}
