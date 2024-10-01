import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { DiscoverComponent } from "./discover/discover.component";
import { PictureComponent } from "./picture/picture.component";
import { WhyComponent } from "./why/why.component";
import { SafarisComponent } from "./safaris/safaris.component";
import { SafariBluComponent } from "./safari-blu/safari-blu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, DiscoverComponent, PictureComponent, WhyComponent, SafarisComponent, SafariBluComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
