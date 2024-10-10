import { Injectable } from '@angular/core';


interface Excursion{
  id: number;
  image: string;
  title: string;
  duration: string;
  description: string;
  type: string;
  
}
@Injectable({
  providedIn: 'root'
})


export class ExcursionService {

  excursions:Excursion[]= [
    {
      id:1,
      image:'../../../assets/safaris/lamu.jpg',
      title:'LAMU ISLAND',
      duration:'TWO NIGHTS ONE NIGHT TOUR',
      description:'Lamu is a place like no other, a peaceful tropical island where life is lived at its own relaxed rhythm, but a place whose history is as mysterious and fascinating ...',
      type:'Culture | Beach | Cuisine'
    },
    {
      id:2,
      image:'../../../assets/safaris/mombasa.jpg',
      title:'MOMBASA TOUR',
      duration:'ONE DAY TOUR',
      description:'Visit Fort Jesus, Portuguese fort built in 1593, being the second most important museum of Kenya. A walk through the old town will take you to the old port, still used by fishermen, meeting stylish Arabian...',
      type:'Culture | Cuisine'
    },
    {
      id:3,
      image:'../../../assets/safaris/mambrui.jpg',
      title:'MAMBRUI',
      duration:'HALF DAY TOUR',
      description:'Along the characteristic road that takes you to Mambrui lined with numerous and huge baobabs, opens a view to the outfall of the Sabaki River, The beautiful sand dunes...',
      type:'Nature'
    },
    {
      id:4,
      image:'../../../assets/safaris/golden-beach.jpg',
      title:'GOLDEN BEACH (CHE SHALE)',
      duration:'ONE DAY TOUR',
      description:'This endless beach of Che Shale offers unusual spectacle, its small nuggets of pyrite gives the illusion of walking on a golden carpet.It is at this location overlooking the Indian Ocean',
      type:'Beach | Cuisine | Sport'
    },
    {
      id:5,
      image:'../../../assets/safaris/Diani.jpg',
      title:'DIANI (SOUTH COAST)',
      duration:'ONE DAY TOUR',
      description:'Diani is the third tourist town on the Kenyan coast. Destination especially prefered by the British people, located south of Mombasa, you can reach by air or by land through the channel connecting the island',
      type:'Beach'
    },
    {
      id:6,
      image:'../../../assets/safaris/crab-shack.jpg',
      title:'CRAB SHACK',
      duration:'ONE DAY TOUR',
      description:'Visit The Crab Shackrun by Mida Creek Conservation Community. The ideal place for a romantic meal, a meal with friends and family, or just come to sit and ...',
      type:'Cuisine | Nature'
    },
    {
      id:7,
      image:'../../../assets/safaris/marafa.jpg',
      title:'MARAFA',
      duration:'ONE DAY TOUR',
      description:'The Marafa Depression, also known as Hells Kitchen, is an odd sandstone canyon outside of Malindi, Kenya.',
      type:'Nature'
    },
    {
      id:8,
      image:'../../../assets/safaris/gede.jpg',
      title:'GEDE RUINS',
      duration:'ONE DAY TOUR',
      description:'Gede ruins are the remains of a Swahili town, typical of most towns along the East African Coast. It traces its origin in the twelfth century.',
      type:'Nature'
    },
    {
      id:9,
      image:'../../../assets/safaris/vascodagama.jpg',
      title:'MALINDI TOUR',
      duration:'ONE DAY TOUR',
      description:'Visit Malindi on this day tour to experience the hidden towns . Visit the Palace, shops, mosque and much more. Walk through the ...',
      type:'Culture'
    },
    {
      id:10,
      image:'../../../assets/safaris/sardegna2.jpg',
      title:'SARDEGNA 2',
      duration:'ONE DAY TOUR',
      description:'Malindi Marine Park & Sardegna 2 Island Excursion. Book now. Spend a day exploring the white sands and crystal clear waters of Kenyas Northern ...',
      type:'Beach | Cuisine'
    },
    {
      id:11,
      image:'../../../assets/safaris/lamu.jpg',
      title:'LOVE ISLAND',
      duration:'HALF DAY TOUR',
      description:'Its famous bays known as Blue Lagoon, Watamu Beach, Ocean Breeze beach ... In most auspicious days one can walk to the island of love that emerges only at ....',
      type:'Beach'
    },
    {
      id:12,
      image:'../../../assets/safaris/mida.jpg',
      title:'MIDA CREEK',
      duration:'ONE DAY TOUR',
      description:'Excursion recommended to those who want to pass a day between sea and uncontaminated landscapes in a protected marine reserve, of which its characteristics',
      type:'Beach | Cuisine'
    }
  ]
  getExcursions() {
    return this.excursions;
  }


 
}
