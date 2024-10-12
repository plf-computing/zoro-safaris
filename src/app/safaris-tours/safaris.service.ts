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
  notes:string;
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
      title:'2 DAYS SAFARI',
      title2:'MASAAI MARA',
      description:'Masai Mara National Reserve is one of the most popular tourism destinations in Kenya- Africa. The reserve is located in the Great Rift Valley',
      description2:'The park is home to all the so-called Big Five (lions, leopards, elephants, rhinos and buffalo) but the main inhabitants are the wildebeest (millions of them). They migrate from the Serengeti to the Masai Mara in spring and vice versa in autumn. There are also numerous other species of antelope, in particular the Thomsons gazelle and Grants gazelle, the impala, and others. Large herds of zebras are found throughout the reserve. The plains also inhabit the Masai giraffes. The birdlife includes hundreds of species.'
    },
    {
      id:3,
      image:'../../../assets/safari/IMG-20241004-WA0038.jpg',
      title:'3 DAY SAFARI',
      title2:'TSAVO EAST - AMBOSELI',
      description:'Explore one of the largest animal sanctuaries in the world on Kenyan safari holiday: Tsavo National Park. Visit Kenyas largest game reserve!',
      description2:'Tsavo East includes several types of habitats: it is mainly flat, with large areas of savannah crossed by the Galana River , the union of Tsavo and Athi. The main relief is the Yatta Plateau, which with its 190 km of length represents the largest lava surface in the world.Amboseli is known for being the best place in the world to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet the Maasai and visit the Maasai village . The park also has views of Mount Kilimanjaro, the worlds highest free-standing mountain.These 3 parks offer some of the best opportunities to see African wildlife, plus the landscapes are at their most beautiful after the rainy season when everything seems to take on pink hues and the acacia trees are covered in beautiful white flowers.'
    },


    {
      id:4,
      image:'../../../assets/safari/IMG-20241004-WA0030.jpg',
      title:'4 DAY SAFARI',
      title2:'TSAVO EAST - AMBOSELI - TAITA HILLS',
      description:'These 3 parks offer some of the best opportunities to see African wildlife , plus the landscapes are at their most beautiful after the rainy season, when everything seems to...',
      description2:'Being a corridor between Tsavo East and Tsavo West, the <strong>Taita Hills</strong> are the ideal place to go on a safari different from the others. <br>They are made up of three massifs: <strong>Dabida, Sagalla</strong> in the southern part of the Voi municipality and Kasigau in the south, near the border with Tanzania. In particular, the Dabida massif is the largest and highest of the three, with an altitude of 2,228 meters.<br><br><strong>Amboseli</strong> is known to be the<strong> best place in the world</strong> to get close to wild elephants, on the other hand other attractions of the park include the opportunity to meet Maasai and visit the Maasai village. Finally the park also has a <strong>breathtaking view of Mount Kilimanjaro</strong> , the highest free-standing mountain in the world.<br><br>In conclusion,These 3 parks offer some of the best opportunities to see <strong>African wildlife</strong> , plus the landscapes are at their most beautiful after the rainy season, when everything seems to take on pink tones and the acacia trees are covered in beautiful white flowers.'
    },

    {
      id:5,
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
      id:6,
      image:'../../../assets/safari/IMG-20241004-WA0030.jpg',
      title:'6 DAYS SAFARI',
      title2:'MASAAI MARA - LAKE NAKURU - AMBOSELI - TSAVO EAST',
      description:'This incredible tour starts from Nairobi and ends in Mombasa,Malindi or Watamu.',
      description2:'This incredible tour starts from Nairobi and ends in Mombasa or Watamu.<br><br>Tsavo East is the second largest park in the country  in terms of number of animals and due to its exceptional biodiversity, the park is considered one of the <strong>most precious nature reserves</strong> in the world. <br><br>Amboseli is known as the <strong>best place in the world</strong> to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet Maasai and visit the Maasai village. The park also has views of <strong>Mount Kilimanjaro</strong> , the worlds highest free-standing mountain.<br><br><strong>The Maasai Mara</strong> borders the Serengeti Park in Tanzania with which it forms a single ecosystem. The reserve is known for its exceptional concentration of fauna and for the famous migration of wildebeest and zebras that begins in July from Serengeti to Masai Mara and then back to Serengeti in September/October. All the Big Five (lion, rhino, elephant, buffalo, leopard) are present in the park although the rhino population is in serious danger. Hippos are numerous in the Mara River and the Talek River. You can see them while you are on the veranda of the camp. <br><br>Lake <strong>Nakuru National Park</strong>  is located in the area of ​​the shallow, alkaline lake of the same name. The park also includes marshy areas, forest and low rocky reliefs where you can admire, in addition to millions of species of birds, also animals that are difficult to spot such as rhinos (both white and, although rare, the shy black rhinos).<br>Arriving from above, you can see thousands of pink dots on the water: they are flamingos! From time to time, suddenly rising in small groups in flight, they cover the sky like a pink sheet… During the dry season, the lake retreats, leaving a white and shiny crust of bicarbonate on the shores, creating a magical landscape with an almost surreal touch.'
    },
    {
      id:7,
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
      ],
      notes:''

    },
    {
      name:'2 DAYS SAFARI',
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
          description:'After breakfast, we leave around 6:30 for a new game drive until 12:30, when we will return to the base for lunch, relax a bit, collect our luggage and head to the airport.<br>Arrival expected in Malindi around 16:00 and then return to your village or home.<br><br>The lodges and tented camps are chosen based on the safari period and the movement of the animals in certain areas of the park, so that you can visit the areas richest in animals'
        }
      ],
      notes:''
    },
    {
      name:'3 DAY SAFARI',
      duration:3,
      days:[
        {
          day:'Day 1',
          location:'Amboseli',
          description:'Departure at 3.00 from the hotel, village or private house on board the Jeep to reach the Amboseli park where we will arrive around 10.30. After a quick assignment of the rooms or tents and collected the packed lunch, we will begin the long Game Drive (Photo Safari) in search of animals such as lions, elephants, giraffes, antelopes, cheetahs, leopards, hippos, zebras and many other animals that live in the African savannah, until returning to the Lodge at sunset.<br>After a shower, you will have time for dinner and immediately after a unique Maasai dance show will follow.'
        },
        {
          day:'Day 2',
          location:'Tsavo East',
          description:'After breakfast, we leave around 7:00 towards Tsavo East Park where we expect to arrive at the Lodge at around 12:00 for the assignment of rooms, lunch and a bit of relaxation in the room or in the pool. At 16:00 we leave for a new game drive until sunset, the time of day when it is more likely to spot animals during the hunting season. Return to the lodge for dinner and overnight stay.'
        },
        {
          day:'Day 3',
          location:'Tsavo East',
          description:'After breakfast we will leave around 7:00 for the last Game Drive of the day until 10:30, the time scheduled for leaving the park and to observe crocodiles and monkeys up close. If you have brought gifts or food, we will stop along the way to leave them for children in schools and less fortunate villages.<br>Return to the hotel at around 13:00.'
        }
      ],
      notes:'<strong>Notes</strong>– The lodges and tented camps are chosen based on the safari period and the movement of the animals in certain areas of the park, so that you can visit the areas richest in animals.<br>– The route could be done in reverse.'
    },
    {
      name:'4 DAY SAFARI',
      duration:4,
      days:[
        {
          day:'Day 1',
          location:'Tsavo East',
          description:'Early morning departure from the hotel, village or private house on board the Jeep to reach the Tsavo East park  where we will arrive around 10.30 and where we will make a first stop. In this way we will have the opportunity to see crocodiles and monkeys up close after which our first Game Drive will begin (Photo Safari).<br>Arrival at the Lodge around 12:30, lunch and rest with the possibility of relaxing in the pool. In the afternoon we will leave for a second Game Drive until sunset where we will try to look for animals at hunting time.  Return to the lodge, dinner and overnight stay.'

        },
        {
          day:'Day 2',
          location:'Tsavo East – Taita Hills',
          description:'Once breakfast is over, we will set off for a new Game Drive and then leave the park towards Taita Hills where we will try to look for the first animals until returning to the lodge for lunch. After a bit of relaxation we will do a new Game Drive until sunset, returning to the lodge, when you can take a shower and have a buffet dinner. After dinner the night safaris will start, truly unique in their kind.'

        },
        {
          day:'Day 3',
          location:'Amboseli',
          description:'After breakfast, we leave around 7:00 for the Game Drive leaving behind the Taita Hills to reach the Amboseli Park. Around 10:30 I arrive at the park gate and start a new Game Drive to admire giraffes, gazelles, and many other animals. I arrive at the camp located on the slopes of Mount Kilimanjaro, around 12:30, check-in, lunch and rest.<br>We leave for another Game Drive at around 3:30 pm to head towards Lake Amboseli where you can see hippos and other animals until sunset, returning to the Lodge/Camp at sunset.<br>After a shower, you will have time for dinner and immediately after a unique Maasai dance show will follow.'
        },
        {
          day:'Day 4',
          location:'Amboseli',
          description:'After breakfast we will leave around 7:00 for the last Game Drive of the day until 10:30, the scheduled time for leaving the park. After the first stop, if you have brought gifts or food, we will stop along the road to leave them for the children in the schools and in the less fortunate villages.<br>Return to the hotel at around 13:00.'

        }
      ],
      notes:'<strong>Notes</strong>– The lodges and tented camps are chosen based on the safari period and the movement of the animals in certain areas of the park, so that you can visit the areas richest in animals.<br>– The route could be done in reverse.'
    },
    {
      name:'4 DAYS SAFARI',
      duration:4,
      days:[
        {
          day:'Day 1',
          location:'Tsavo West',
          description:'Early morning departure from the hotel, village or private house on board the Jeep to reach the Tsavo West park (West) where we will arrive around 9.30 and where our first Game Drive (Photo Safari) will begin. Arrival at the Lodge around 12.30, lunch and rest. In the afternoon possibility of Photo Safari at the Rinho Sanctuary (open from 16 to 18), this will depend on our position in the park. At the base of the Ngulia hills, in the central area of ​​the park, there is a fenced area where black rhinos have been taken to better protect them and where it is hoped they can rebuild a larger community. The area can be safely visited by tourists. Return to the lodge after sunset, dinner, after dinner, for the luckiest, sighting of the leopard intent on eating in the trees, overnight stay.'

        },
        {
          day:'Day 2',
          location:'Tsavo West – Amboseli',
          description:'After breakfast, we leave around 7:00 for the Game Drive towards Mzima Spring, whose spring water emerges at a constant daily rate of over 190 million liters and which has allowed the creation of this lively oasis in the heart of Kenya Tsavo National Park West. The clarity of the water is due to the fact that the water rises underground and filters through the volcanic rock of the Chyulu Hills. In the crystalline waters you can admire hippos and crocodiles. We then leave the Tsavo West park to reach Amboseli Park. Around 10:30 arrival at the park gate and start a new Game Drive to admire giraffes, gazelles, and many other animals. Arrival at the camp located on the slopes of Mount Kilimanjaro, around 12:30, check-in, lunch and rest. We leave for another Game Drive around 15:30 to head towards Lake Amboseli where you can see hippos and other animals until sunset, return to the Lodge / Camp at sunset. After a shower, you will have time for dinner and immediately after a unique Maasai dance show will follow.'
        },
        {
          day:'Day 3',
          location:'Amboseli – Tsavo East',
          description:'After breakfast, we leave for another Game Drive towards the exit of the Park, to continue, on the road that connects Nairobi to Mombasa, towards the Tsavo East Park. Short stop at the entrance of the park to see crocodiles and monkeys up close and then entrance for a new Photo Safari to see as many animals as possible, in the park you meet: lions, elephants, buffaloes, giraffes, zebras, dik-diks, antelopes, waterbucks, cheetahs, leopards, crocodiles, hippos and other animals of the savannah. At 13.00 then you arrive at the lodge or tented camp, after a quick check-in, lunch and rest in the room or in the pool. We leave again at 16:00 for a new tour of the Park until sunset, return to the lodge, dinner and overnight stay.'
        },
        {
          day:'Day 4',
          location:'Tsavo East',
          description:'After breakfast we will leave around 7:00 for the last Game Drive of the day until 10:30, the scheduled time for leaving the park. After the first stop, if you have brought gifts or food, we will stop along the road to leave them for the children in the schools and in the less fortunate villages. Return to the hotel at around 13:00.'
        }
        
      ],
      notes:'<strong>Notes</strong>– The lodges and tented camps are chosen based on the safari period and the movement of animals in certain areas of the park, so that you can visit the areas richest in animals.<br> – The route could be done in the opposite direction.'


    },
    {
      name:'6 DAYS SAFARI',
      duration:6,
      days:[
        {
          day:'Day 1',
          location:'Maasai Mara',
          description:'Departure from your hotel or Nairobi airport to Maasai Mara park. Lunch stop in Narok or directly to lodge/camp in Masai Mara (depends on departure time from Nairobi).<br>In any case, once we arrive at the park gate we will start our game drive until sunset. Dinner and overnight.'
        },
        {
          day:'Day 2',
          location:'Maasai Mara',
          description:'After breakfast, we leave around 7:00 for a new Game Drive with a stop for lunch in an equipped area near the Mara River with Box Lunch or, based on your preferences, at the lodge/camp. After a bit of relaxation, we will leave for a second Game Drive with return to the camp for sunset. Dinner and overnight stay .'
        },
        {
          day:'Day 3',
          location:'Lake Nakuru',
          description:'After breakfast we will leave the Maasai Mara to reach Lake Nakuru and have lunch directly at the Lodge.<br>After some rest we will leave for a new photographic Safari at Lake Nakuru, dinner and overnight at Lake Nakuru Lodge.'
        },
        {
          day:'Day 4',
          location:'Amboseli',
          description:'After breakfast, we leave to reach Amboseli Park. Here too we will stop for lunch on the road or directly at the Lodge.<br>Once we enter the park we will start a new Game Drive to admire lions, gazelles, giraffes, elephants, buffaloes, zebras and even hyenas.<br>Our camp is located on the slopes of Mount Kilimanjaro, the highest peak in Africa with its ever-snow-capped peaks Kibo and Mawenzi.<br>We will also visit Lake Amboseli to see hippos and many other animals until sunset.<br>After a shower and dinner, we will be able to admire, in front of the bonfire, a beautiful Maasai dance show.'
        },
        {
          day:'Day 5',
          location:'Amboseli – Tsavo East',
          description:'Wake up at 5.30 to leave after about an hour for a last tour of Amboseli and then head towards Tsavo East on the road that connects Nairobi with Mombasa.As soon as we arrive in Tsavo East we will start another Game Drive and to see as many animals as possible we will go towards Mudanda Rock.Arrival at the lodge at 13.00, lunch and relax in the pool or in the room until 15.30, when we will leave for another game drive until sunset to try to find the animals hunting.Return to the lodge, dinner and overnight.'
        },
        {
          day:'Day 6',
          location:'Tsavo East',
          description:'After breakfast we will leave for the last Game Drive of the Tour to head towards the sea or directly to the airport (according to your needs). After the first stop, if you have brought gifts or food, we will stop along the way to leave them to the children in the schools and in the less fortunate villages.'

        }
      ],
      notes:'<strong>Notes</strong>– The lodges and tented camps are chosen based on the safari period and the movement of the animals in certain areas of the park, so that you can visit the areas richest in animals.'
    },
    {
      name:'7 DAYS SAFARI',
      duration:7,
      days:[
        {
          day:'Day 1',
          location:'Maasai Mara',
          description:'Departure from your hotel or Nairobi airport to Maasai Mara park. Lunch stop in Narok or directly to lodge/camp in Masai Mara (depends on departure time from Nairobi).<br>In any case, once we arrive at the park gate we will start our game drive until sunset. Dinner and overnight.'
        },
        {
          day:'Day 2',
          location:'Maasai Mara',
          description:'After breakfast, we leave around 7:00 for a new Game Drive with a stop for lunch in an equipped area near the Mara River with Box Lunch or, based on your preferences, at the lodge/camp. After a bit of relaxation, we will leave for a second Game Drive with return to the camp for sunset. Dinner and overnight stay .'
        },
        {
          day:'Day 3',
          location:'Lake Nakuru',
          description:'After breakfast we will leave the Maasai Mara to reach Lake Nakuru and have lunch directly at the Lodge.<br>After some rest we will leave for a new photographic Safari at Lake Nakuru, dinner and overnight at Lake Nakuru Lodge.'
        },
        {
          day:'Day 4',
          location:'Amboseli',
          description:'After breakfast, we leave to reach the famous wildebeest park: Amboseli. Here too we will stop for lunch on the road or directly at the Lodge depending on the times.<br>Once we enter the park we will start a new Game Drive to admire as many animals as possible and to visit Lake Amboseli populated by hippos and many other animals until sunset.<br>After a shower and dinner, we will be able to admire, in front of the bonfire, a beautiful Maasai dance show.'
        },
        {
          day:'Day 5',
          location:'Tsavo West',
          description:'Wake up at 6.00 and leave after breakfast for a last quick ride before heading towards Tsavo West with arrival expected mid-morning.<br>We will start the Safari at the beautiful Mzima Springs to see hippos, crocodiles and tilapia fish.<br>Lunch and relax at the Lodge and new game drive until sunset. Return to the Lodge for a shower, dinner and an evening show.'

        },
        {
          day:'Day 6',
          location:'Tsavo East',
          description:'Departure at 7.00 am after breakfast to cross the road that connects Nairobi to Mombasa and enter Tsavo East Park.<br>As soon as we arrive in Tsavo East we will start another Game Drive, to see more animals and then arrive at the lodge for lunch at 13.00.<br>Lunch and relax in the pool or in the room until 15.30, when we will leave for another game drive until sunset to try to find the animals hunting.<br>Return to the lodge, dinner and overnight stay.'
        },
        {
          day:'Day 7',
          location:'Tsavo East',
          description:'After breakfast we will leave for the last Photo Safari until 10.30 and then head towards the Lion Hill Lodge where you can enjoy a suggestive view of the Tsavo East Park. Lunch and afternoon relaxation after which we will return to Mombasa,Malindi or Watamu along the road where the film "Out of Africa" ​​was shot.<br>If you have brought gifts or food, we will stop along the way to leave them for children in schools and less fortunate villages.'
        }
      ],
      notes:'– The lodges and tented camps are chosen based on the safari period and the movement of the animals in certain areas of the park, so that you can visit the areas richest in animals.'

    }
  ]
  getSafaris(){
    return this.safaris;
  }

  getAllSafarisItenaries(): SafariItenary[] {
    return this.safariItenaries;
  }

 
}
