import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initFlowbite } from 'flowbite';
import { HeroComponent } from './home/hero/hero.component';
import { DiscoverComponent } from "./home/discover/discover.component";
import { PictureComponent } from './home/picture/picture.component';
import { WhyComponent } from './home/why/why.component';
import { SafarisComponent } from './home/safaris/safaris.component';
import { SafariBluComponent } from './home/safari-blu/safari-blu.component';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from "./home/slider/slider.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HeroComponent, DiscoverComponent, PictureComponent, WhyComponent, SafarisComponent, SafariBluComponent, FooterComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'zoro-safaris';

  ngOnInit(): void {
    initFlowbite();
  }
}
