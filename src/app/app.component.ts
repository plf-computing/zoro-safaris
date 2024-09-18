import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./homePage/navbar/navbar.component";
import { initFlowbite } from 'flowbite';
import { HeroComponent } from './homePage/hero/hero.component';
import { DiscoverComponent } from "./homePage/discover/discover.component";
import { PictureComponent } from './homePage/picture/picture.component';
import { WhyComponent } from './homePage/why/why.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, DiscoverComponent,PictureComponent,WhyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'zoro-safaris';

  ngOnInit(): void {
    initFlowbite();
  }
}
