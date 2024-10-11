import { Injectable } from '@angular/core';

interface Safari{
  id:number;
  image:string;
  title:string;
  title2:string;
  description:string;
  description2:string
}
interface SafariDay{
  day:string;
  location:string;
  description:string;
}
interface SafariItenary{
  name:string;
  duration:number;
  days:SafariDay[];
}

@Injectable({
  providedIn: 'root'
})
export class SafarisService {

  safaris:Safari[]=[
    {
      id:1,
      image:'../../../assets/safari/IMG-20241004-WA0021.jpg',
      title:'2 DAY SAFARI',
      title2:'TSAVO EAST',
      description:'Explore one of the largest animal sanctuaries in the world on Kenyan safari holiday: Tsavo National Park. Visit Kenyas largest game reserve!',
      description2:'Tsavo East includes several types of habitats: it is mainly flat, with large areas of savannah crossed by the Galana River , the union of Tsavo and Athi. The main relief is the Yatta Plateau, which with its 190 km of length represents the largest lava surface in the world.Due to its exceptional biodiversity, the park is considered one of the most valuable nature reserves in the world.'
    },
    {
      id:2,
      image:'../../../assets/safari/mara.jpg',
      title:'2 DAY SAFARI',
      title2:'MASAAI MARA',
      description:'Masai Mara National Reserve is one of the most popular tourism destinations in Kenya- Africa. The reserve is located in the Great Rift Valley',
      description2:'The park is home to all the so-called Big Five (lions, leopards, elephants, rhinos and buffalo) but the main inhabitants are the wildebeest (millions of them). They migrate from the Serengeti to the Masai Mara in spring and vice versa in autumn. There are also numerous other species of antelope, in particular the Thomsons gazelle and Grants gazelle, the impala, and others. Large herds of zebras are found throughout the reserve. The plains also inhabit the Masai giraffes. The birdlife includes hundreds of species.'
    },
    {
      id:3,
      image:'../../../assets/safari/IMG-20241004-WA0038.jpg',
      title:'3 DAYS SAFARI',
      title2:'TSAVO EAST - AMBOSELI',
      description:'Explore one of the largest animal sanctuaries in the world on Kenyan safari holiday: Tsavo National Park. Visit Kenyas largest game reserve!',
      description2:'Tsavo East includes several types of habitats: it is mainly flat, with large areas of savannah crossed by the Galana River , the union of Tsavo and Athi. The main relief is the Yatta Plateau, which with its 190 km of length represents the largest lava surface in the world.Amboseli is known for being the best place in the world to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet the Maasai and visit the Maasai village . The park also has views of Mount Kilimanjaro, the worlds highest free-standing mountain.These 3 parks offer some of the best opportunities to see African wildlife, plus the landscapes are at their most beautiful after the rainy season when everything seems to take on pink hues and the acacia trees are covered in beautiful white flowers.'
    },

    {
      id:4,
      image:'../../../assets/safari/IMG-20241004-WA0004.jpg',
      title:'3 DAYS SAFARI',
      title2:'MASAAI MARA',
      description:'The game reserve derives its name from the Masai or Maasai people (who inhabit various areas in the Serengeti plain) and the Mara River and was established in 1961...',
      description2:'The park is home to all the so-called Big Five (lions, leopards, elephants, rhinos and buffalo) but the main inhabitants are the wildebeest (millions of them). They migrate from the Serengeti to the Masai Mara in spring and vice versa in autumn. There are also numerous other species of antelope, in particular the Thomsons gazelle and Grants gazelle, the impala, and others. Large herds of zebras are found throughout the reserve. The plains also inhabit the Masai giraffes. The birdlife includes hundreds of species.'
    },

    {
      id:5,
      image:'../../../assets/safari/IMG-20241004-WA0030.jpg',
      title:'4 DAYS SAFARI',
      title2:'TSAVO EAST - AMBOSELI - TAITA HILLS',
      description:'These 3 parks offer some of the best opportunities to see African wildlife , plus the landscapes are at their most beautiful after the rainy season, when everything seems to...',
      description2:'Being a corridor between Tsavo East and Tsavo West, the <strong>Taita Hills</strong> are the ideal place to go on a safari different from the others. <br>They are made up of three massifs: <strong>Dabida, Sagalla</strong> in the southern part of the Voi municipality and Kasigau in the south, near the border with Tanzania. In particular, the Dabida massif is the largest and highest of the three, with an altitude of 2,228 meters.<br><br><strong>Amboseli</strong> is known to be the<strong> best place in the world</strong> to get close to wild elephants, on the other hand other attractions of the park include the opportunity to meet Maasai and visit the Maasai village. Finally the park also has a <strong>breathtaking view of Mount Kilimanjaro</strong> , the highest free-standing mountain in the world.<br><br>In conclusion,These 3 parks offer some of the best opportunities to see <strong>African wildlife</strong> , plus the landscapes are at their most beautiful after the rainy season, when everything seems to take on pink tones and the acacia trees are covered in beautiful white flowers.'
    },

    {
      id:6,
      image:'../../../assets/safari/IMG-20241004-WA0003.jpg',
      title:'4 DAYS SAFARI',
      title2:'AMBOSELI - TSAVO EAST - TSAVO WEST',
      description:'Explore Tsavo West National Park holidays and discover the best time and places to visit. | Welcome to the wilderness. Tsavo is one of Kenyas larger ...',
      description2:'Tsavo is the largest natural park in the country (almost as large as the whole of Tuscany). The park, which takes its name from the river that flows through it, was opened in April 1948 and is divided into Tsavo East and Tsavo West, divided by the A109, the road that goes from Nairobi to Mombasa.<br><br><strong>Tsavo West</strong> is where, at the beginning of the last century, the <strong>legend of the man-eating lions</strong> that inspired the film “The Ghost and the Darkness” took root, “opposing” the construction of the railway that would have connected the southern coast of Kenya with Uganda. <br>Tsavo West contains several spectacular habitats: riverine forests, mountains, lakes and vast plains.<br><br><strong>Amboseli</strong> is known as the best place in the world to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet Maasai and visit the Maasai village. The park also has views of <strong>Mount Kilimanjaro</strong> , the worlds highest free-standing mountain.'
    },

    // {
    //   id:7,
    //   image:'../../../assets/safari/IMG-20241004-WA0033.jpg',
    //   title:'4 DAYS SAFARI',
    //   title2:'AMBOSELI - TSAVO EAST - TSAVO WEST',
    //   description:'Land of Lava, Springs and Man Eaters. The parks form one of Africas largest wilderness reserves consisting of 10 million acres of pure wilderness made of ..',
    //   description2:'With a total area of ​​21,812 km², Tsavo is the largest natural park in the country (almost as large as the whole of Tuscany). The park, which takes its name from the river that flows through it, was opened in April 1948 and is divided into Tsavo East and Tsavo West, divided by the A109, the road that goes from Nairobi to Mombasa.Due to its exceptional biodiversity, the park is considered one of the most valuable nature reserves in the world. <br>Tsavo West is where, at the beginning of the last century, the <strong>legend of the man-eating lions</strong> that inspired the film “The Ghost and the Darkness” took root, “opposing” the construction of the railway that would have connected the southern coast of Kenya with Uganda. <br>Tsavo West contains several spectacular habitats: riverine forests, mountains, lakes and vast plains.<br><br>Amboseli is known as the <strong>best place in the world</strong> to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet Maasai and visit the Maasai village. The park also has views of<strong> Mount Kilimanjaro</strong> , the worlds highest free-standing mountain.<br>These 3 parks offer some of the best opportunities to see African wildlife , and the  landscapes are at their most beautiful after the rainy season, when everything seems to take on pink tones and the acacia trees are covered in beautiful white flowers.'
    // },
    {
      id:7,
      image:'../../../assets/safari/IMG-20241004-WA0030.jpg',
      title:'6 DAYS SAFARI',
      title2:'MASAAI MARA - LAKE NAKURU - AMBOSELI - TSAVO EAST',
      description:'This incredible tour starts from Nairobi and ends in Mombasa,Malindi or Watamu.',
      description2:'This incredible tour starts from Nairobi and ends in Mombasa or Watamu.<br><br>Tsavo East is the second largest park in the country  in terms of number of animals and due to its exceptional biodiversity, the park is considered one of the <strong>most precious nature reserves</strong> in the world. <br><br>Amboseli is known as the <strong>best place in the world</strong> to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet Maasai and visit the Maasai village. The park also has views of <strong>Mount Kilimanjaro</strong> , the worlds highest free-standing mountain.<br><br><strong>The Maasai Mara</strong> borders the Serengeti Park in Tanzania with which it forms a single ecosystem. The reserve is known for its exceptional concentration of fauna and for the famous migration of wildebeest and zebras that begins in July from Serengeti to Masai Mara and then back to Serengeti in September/October. All the Big Five (lion, rhino, elephant, buffalo, leopard) are present in the park although the rhino population is in serious danger. Hippos are numerous in the Mara River and the Talek River. You can see them while you are on the veranda of the camp. <br><br>Lake <strong>Nakuru National Park</strong>  is located in the area of ​​the shallow, alkaline lake of the same name. The park also includes marshy areas, forest and low rocky reliefs where you can admire, in addition to millions of species of birds, also animals that are difficult to spot such as rhinos (both white and, although rare, the shy black rhinos).<br>Arriving from above, you can see thousands of pink dots on the water: they are flamingos! From time to time, suddenly rising in small groups in flight, they cover the sky like a pink sheet… During the dry season, the lake retreats, leaving a white and shiny crust of bicarbonate on the shores, creating a magical landscape with an almost surreal touch.'
    },
    {
      id:8,
      image:'../../../assets/safari/IMG-20241004-WA0033.jpg',
      title:'7 DAYS SAFARI',
      title2:'MASAAI MARA - LAKE NAKURU -AMBOSELI - TSAVO EAST - TSAVO WEST',
      description:'Masai Mara National Reserve is one of the most popular tourism destinations in Kenya- Africa. The reserve is located in the Great Rift Valley in primarily open ...',
      description2:'This incredible tour starts from Nairobi and ends in Mombasa or Watamu.<br><br>Tsavo East is the second largest park in the country  in terms of number of animals and due to its exceptional biodiversity, the park is considered one of the <strong>most precious nature reserves</strong> in the world.<br><br>Tsavo West is where, at the beginning of the last century, the <strong>legend of the man-eating lions </strong> that inspired the film “The Ghost and the Darkness” took root, “opposing” the construction of the railway that would have connected the southern coast of Kenya with Uganda. Tsavo West contains several spectacular habitats: riverine forests, mountains, lakes and vast plains. <br><br>Amboseli is known as the <strong>best place in the world</strong> to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet Maasai and visit the Maasai village. The park also has views of <strong>Mount Kilimanjaro</strong> , the worlds highest free-standing mountain.<br><br><strong>The Maasai Mara</strong> borders the Serengeti Park in Tanzania with which it forms a single ecosystem. The reserve is known for its exceptional concentration of fauna and for the famous migration of wildebeest and zebras that begins in July from Serengeti to Masai Mara and then back to Serengeti in September/October. All the Big Five (lion, rhino, elephant, buffalo, leopard) are present in the park although the rhino population is in serious danger. Hippos are numerous in the Mara River and the Talek River. You can see them while you are on the veranda of the camp. <br><br>Lake <strong>Nakuru National Park</strong>  is located in the area of ​​the shallow, alkaline lake of the same name. The park also includes marshy areas, forest and low rocky reliefs where you can admire, in addition to millions of species of birds, also animals that are difficult to spot such as rhinos (both white and, although rare, the shy black rhinos).<br>Arriving from above, you can see thousands of pink dots on the water: they are flamingos! From time to time, suddenly rising in small groups in flight, they cover the sky like a pink sheet… During the dry season, the lake retreats, leaving a white and shiny crust of bicarbonate on the shores, creating a magical landscape with an almost surreal touch.'
    }



  ]

  safariItenaries:SafariItenary[]=[
    {
      name:'2 DAY SAFARI',
      duration:2,
      days:[
        {
          day:'Day 1',
          location:'Tsavo East',
          description:'Departure at 6.00 from the hotel, village or private house for breakfast. After departure, we board the Jeep to reach the Tsavo East park. At the entrance of the park we will make a short stop for the toilet and to observe crocodiles and monkeys up close. At the entrance of the park our first game drive (Photo Safari) begins in search of animals such as lions, elephants, giraffes, antelopes, cheetahs, leopards, hippos, zebras and many other animals that live in the African savannah. Around 13.00 we will arrive at the lodge for the assignment of rooms, lunch and a bit of relaxation in the room or in the pool. At 16.00 we leave for a second game drive until sunset, the time of day when it is more likely to sight animals during hunting. Return to the lodge for dinner and overnight stay.',
        },
        {
          day:'Day 2',
          location:'Tsavo East',
          description:'After breakfast, we leave around 7:00 for another game drive until around 10:00 (the park ticket is valid for 24 hours). Once we leave the park we will return to your village or home. If you have brought gifts or food, we will stop along the way to leave them for children in schools and less fortunate villages. Return to Watamu at around 13:00. The lodges and tented camps are chosen based on the safari period and the movement of animals in certain areas of the park, so that you can visit the areas richest in animals.'
        }
      ]

    },
    {
      name:'2 DAY SAFARI',
      duration:2,
      days:[
        {
          day:'Day 1',
          location:'Maasai Mara',
          description:'Departure at 7.00 from the hotel, village or private house for Malindi airport where at 9.00 we will fly to the Masai Mara and at 11.00 we will begin our first Game Drive (Photo Safari) aboard a 4×4 Jeep.<br>At 12:30 we will have a break to check in at the lodge or tented camp, a quick lunch and a new game drive until sunset with return to the room, dinner and overnight stay.'
        },
        {
          day:'Day 2',
          location:'Maaasai Mara',
          description:'After breakfast, we leave around 6:30 for a new game drive until 12:30, when we will return to the base for lunch, relax a bit, collect our luggage and head to the airport.<br>Arrival expected in Malindi around 16:00 and then return to your village or home.'
        }
      ]
    }
  ]
  getSafaris(){
    return this.safaris;
  }

  getAllSafarisItenaries(): SafariItenary[] {
    return this.safariItenaries;
  }

 
}
