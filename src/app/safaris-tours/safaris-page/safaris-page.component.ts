import { Component, OnInit } from '@angular/core';
import { SafarisService } from '../safaris.service';
import { RouterLink, RouterLinkActive,  } from '@angular/router';

@Component({
  selector: 'app-safaris-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './safaris-page.component.html',
  styleUrl: './safaris-page.component.css'
})
export class SafarisPageComponent implements OnInit {
  constructor(private safariService:SafarisService){}

  safaris:any[]=[];

  ngOnInit(): void {
    this.safaris = this.safariService.getSafaris();
  }

}
