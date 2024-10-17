import { Injectable } from '@angular/core';


interface Excursion{
  id: number;
  image: string;
  title: string;
  duration: string;
  description: string;
  type: string;
  
}

interface Itenary{
  name:string;
  description:string;

}

@Injectable({
  providedIn: 'root'
})


export class ExcursionService {

  excursions:Excursion[]= [
    {
      id:1,
      image:'../../../assets/safaris/golden-beach.jpg',
      title:'CHE SHALE - ROBINSON - MARAFA',
      duration:'ONE DAY TOUR',
      description:'Explore golden beach with its brilliant gold and bronze reflections, due to the abundance of pyrite,Robinson Islands and the marafa canyons.',
      type:'Beach | Cuisine | Nature'
    },
    {
      id:2,
      image:'../../../assets/safaris/gede.jpg',
      title:'GEDE RUINS -CRAB SHACK',
      duration:'ONE DAY TOUR',
      description:'Gede ruins are the remains of a Swahili town, typical of most towns along the East African Coast. It traces its origin in the twelfth century.<br><br>Visit The Crab Shackrun by Mida Creek Conservation Community. The ideal place for a romantic meal, a meal with friends and family, or just come to sit and ...',
      type:'Cuisine | Nature'
    },
    {
      id:3,
      image:'../../../assets/safaris/loveisland.jpg',
      title:'SARDEGNA 2',
      duration:'ONE DAY TOUR',
      description:'Malindi Marine Park & Sardegna 2 Island Excursion. Book now. Spend a day exploring the white sands and crystal clear waters of Kenya.',
      type:'Beach | Cuisine'
    },
   
    {
      id:4,
      image:'../../../assets/safaris/loveisland2.jpg',
      title:'LOVE ISLAND',
      duration:'HALF DAY TOUR',
      description:'Its famous bays known as Blue Lagoon, Watamu Beach, Ocean Breeze beach .In most auspicious days one can walk to the island of love.',
      type:'Beach'
    },
    {
      id:5,
      image:'../../../assets/safaris/mida.jpg',
      title:'MIDA CREEK',
      duration:'ONE DAY TOUR',
      description:'Excursion recommended to those who want to pass a day between sea and uncontaminated landscapes in a protected marine reserve, of which its characteristics',
      type:'Beach | Cuisine'
    },
    {
      id:6,
      image:'../../../assets/safaris/vascodagama.jpg',
      title:'MALINDI TOUR',
      duration:'ONE DAY TOUR',
      description:'Visit Malindi on this day tour to experience the hidden towns . Visit the Palace, shops, mosque and much more.',
      type:'Culture'
    },
    {
      id:7,
      image:'../../../assets/safaris/lamu.jpg',
      title:'LAMU ISLAND',
      duration:'OPTIONAL',
      description:'Lamu is a place like no other, a peaceful tropical island where life is lived at its own relaxed rhythm, but a place whose history is as mysterious and fascinating .',
      type:'Culture | Beach | Cuisine'
    },
    {
      id:8,
      image:'../../../assets/safaris/mombasa.jpg',
      title:'MOMBASA TOUR',
      duration:'OPTIONAL',
      description:'Visit Fort Jesus, Portuguese fort built in 1593, being the second most important museum of Kenya. A walk through the old town will take you to the old port, still used by fishermen.',
      type:'Culture | Cuisine'
    },
    {
      id:9,
      image:'../../../assets/safaris/mambrui.jpg',
      title:'MAMBRUI TOUR',
      duration:'OPTIONAL',
      description:'Along the characteristic road that takes you to Mambrui lined with numerous and huge baobabs, opens a view to the outfall of the Sabaki River, The beautiful sand dunes and ocean views.',
      type:'Nature'
    },
  
    // {
    //   id:10,
    //   image:'../../../assets/safaris/Diani.jpg',
    //   title:'DIANI (SOUTH COAST)',
    //   duration:'ONE DAY TOUR',
    //   description:'Diani is the third tourist town on the Kenyan coast. Destination especially prefered by the British people, located south of Mombasa, you can reach by air or by land through the channel connecting the island',
    //   type:'Beach'
    // },
 

  
  
  
   
    
  ]
  getExcursions() {
    return this.excursions;
  }

excursionItenary:Itenary[]=[
  {
    name:'CHE SHALE - ROBINSON - MARAFA',
    description:'Departure after breakfast from your accommodation.<br><br>After a short journey through sand dunes and palm trees we reach the suggestive golden beach, with brilliant gold and bronze reflections, due to the abundance of pyrite. Here you can spend some time relaxing or enjoy a refreshing swim. We then set off towards Robinson Island, crossing the salt flats and then a short stretch of mangroves, we reach a wild and uncontaminated beach; after a short visit to the school and the fishing village, we enjoy a lunch of fresh fish and shellfish in a typical restaurant on the beach.<br><br> After lunch we spend a few hours relaxing on the ocean shore and then back on the road, along a stretch of road between clearings, villages and acacia forests we reach Marafa; here it is possible to go down into the canyon and walk along it until you come back up on the other side in time to watch the African sunset which, seen from here, is very suggestive.<br><br>After sunset we return to your accommodation.'
  },
  {
    name:'GEDE RUINS -CRAB SHACK',
    description:'We leave from your accommodation in the afternoon.<br><br>We arrive at the ruins of Gede and, with a guided tour, we go to discover this site full of history and mystery surrounded by thick vegetation, where hundreds of monkeys live ready to throw themselves at you if you show them a banana.<br><br>The program continues with a visit to Crab Shack, a place located on the Mida Creek lagoon, where you can enjoy a local aperitif on stilts among the mangroves, while waiting for a romantic sunset.<br><br>We return to your accommodation in the evening.'
  },
  {
    name:'SARDEGNA 2',
    description:'Departure after breakfast from your accommodation.<br><br>We arrive at the dock and on a glass-bottom boat we head towards the marine park, here we stop long enough to snorkel and admire the myriad of colorful fish that invade this stretch of ocean. We continue to Sardinia 2, once we arrive we could walk on the beautiful white sand atolls that emerge at low tide, here we prepare a brazier in the middle of the water to cook freshly caught fish, shrimp and lobsters, after lunch we relax in this corner of paradise.<br><br>In the late afternoon we return to your accommodation'
  },
  {
    name:'LOVE ISLAND',
    description:'Departure after breakfast from your accommodation.<br><br>We reach the beach in front of the island, after a short walk between islets and strips of fine white sand we reach the island, which is actually the union of two large rocks, here it is possible to bask in the sun and enjoy a bit of relaxation admiring the landscape and also take a refreshing bath in the crystal clear water populated by colorful fish and starfish; on request, tide permitting, it is possible to organize a large grill of fish and lobster.<br><br>In the afternoon we return to your accommodation.'
  },
  {
    name:'MIDA CREEK',
    description:'Departure after breakfast from your accommodation.<br><br>We arrive at the pier and on a glass-bottom boat we head towards the marine park, here we stop long enough to snorkel and admire the myriad of colorful fish that invade this stretch of ocean, then we go down to the famous Garoda beach for a bit of relaxation where in case of low tide, tongues of very white sand emerge. We then set off again for the mangrove forest where, on a wild and uncontaminated beach, we enjoy an excellent lunch of very fresh fish and lobsters, then we enjoy a bit of relaxation.<br><br>In the late afternoon we return to your accommodation.'
  },
  {
    name:'MALINDI TOUR',
    description:'We can organize a visit to Malindi during the day in the city center to do some shopping in its typical clubs, shops and markets or simply to discover the local reality; or at night, to taste some typical dishes in the various local restaurants, for a trip to the casino, to drink a drink or a cocktail in pubs and discos.'
  },
  {
    name:'LAMU TOUR',
    description:'We can organize a two or more day excursion to Lamu Island, the program will be agreed between us and will vary according to the period of the year, the number of days and the number of participants in the tour.'

  },
  {
    name:'MOMBASA TOUR',
    description:'We can organize a tour of Mombasa, visit the city center and its famous beach.<br><br>In addition, for fishing enthusiasts, I can organize an excursion on a boat equipped for deep-sea fishing.'
  },
  {
    name:'MAMBRUI TOUR',
    description:'We can organize a tour to Mambrui to see the breathtaking sand dunes, enjoy ocean view and taking deeps in the ocean.'
  }
]
getItenaries():Itenary[]{
  return this.excursionItenary;
}
 
}
