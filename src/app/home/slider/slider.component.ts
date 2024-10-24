import { NgFor, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnDestroy {
  images: string[] = [
    '../../../assets/safari/IMG-20241004-WA0035.jpg',
    '../../../assets/safari/IMG-20241004-WA0003.jpg',
    '../../../assets/safaris/Diani.jpg',
    '../../../assets/safaris/marafa.jpg',
    '../../../assets/safaris/crab-shack.jpg',
    '../../../assets/safaris/gede.jpg',
    '../../../assets/safaris/mida.jpg',
    '../../../assets/safari/IMG-20241004-WA0025.jpg',
    '../../../assets/safari/IMG-20241004-WA0016.jpg',
   
  ];

  currentIndex: number = 0;
  translateX: number = 0;
  autoSlideInterval: any;
  isTransitioning: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateTranslateX();
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  next() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;

    // Update index and wrap around if necessary
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateTranslateX();

    setTimeout(() => {
      this.isTransitioning = false; // Allow transition again
    }, 500); // Adjust timeout to match transition duration
  }

  prev() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;

    // Update index and wrap around if necessary
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;

    this.updateTranslateX();

    setTimeout(() => {
      this.isTransitioning = false; // Allow transition again
    }, 500); // Adjust timeout to match transition duration
  }

  private updateTranslateX() {
    const visibleCount = this.getVisibleImagesCount();
    this.translateX = -this.currentIndex * (100 / visibleCount);
  }

  private getVisibleImagesCount(): number {
    if (window.innerWidth >= 1024) {
      return 3; // For larger screens (e.g., desktop), show 3 images
    } else if (window.innerWidth >= 768) {
      return 2; // For medium screens (e.g., tablet), show 2 images
    } else {
      return 1; // For small screens (e.g., mobile), show 1 image
    }
  }

  // Auto Slide Feature
  private startAutoSlide() {
    // Auto-slide every 3 seconds (adjustable)
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 2000); // Change 3000ms to whatever duration you prefer
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
