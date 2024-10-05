import { Injectable } from '@angular/core';

interface Safari{
  id:number;
  image:string;
  title:string;
  title2:string;
  description:string;
  description2:string
}



@Injectable({
  providedIn: 'root'
})
export class SafarisService {

  safaris:Safari[]=[
    {
      id:1,
      image:'../../../assets/safari/IMG-20241004-WA0038.jpg',
      title:'3 DAYS SAFARI',
      title2:'TSAVO EAST - AMBOSELI',
      description:'Explore one of the largest animal sanctuaries in the world on Kenyan safari holiday: Tsavo National Park. Visit Kenyas largest game reserve!',
      description2:'3-day safari (2 nights) at the Tsavo East and Amboseli Parks Jeep Safari departs from Watamu and overnight stay in a Lodge or Camp Tented accompanied by a local English speaking guide.This Safari will take you to the foot of Kilimanjaro, famous for its perennial snow.The package includes everything : transfers, park admissions and overnight stay.'
    },

    {
      id:2,
      image:'../../../assets/safari/IMG-20241004-WA0004.jpg',
      title:'3 DAYS SAFARI',
      title2:'TSAVO EAST - TAITA HILLS',
      description:'Rugged and Teeming with Wildlife, Find yourself in an endless stretch of grasslands and savannah. You are in the true wilderness of Tsavo ...',
      description2:'3-day safari (2 nights) at the parks: Tsavo East and Taita Hills.Jeep transfer from Watamu and overnight in a lodge or tented camp accompanied by a local English speaking guide.Recommended for those in search of strong emotions, possibility of taking a night safari at the Taita Hills reserve.Included are: transfers, park tickets and overnight stays.'
    },

    {
      id:3,
      image:'../../../assets/safari/IMG-20241004-WA0030.jpg',
      title:'4 DAYS SAFARI',
      title2:'TSAVO - AMBOSELI',
      description:'Tsavo offers some of the most magnificent game viewing in the world and attractions include elephant, rhino, Hippos, lions, cheetah, leopards, Buffalos, ...',
      description2:'3-day safari (2 nights) at the Tsavo East and Amboseli Parks.Jeep Safari departs from Watamu and overnight stay in a Lodge or Camp Tented accompanied by a local English speaking guide.This Safari will take you to the foot of Kilimanjaro, famous for its perennial snow.The package includes everything : transfers, park admissions and overnight stay.'
    },

    {
      id:4,
      image:'../../../assets/safari/IMG-20241004-WA0003.jpg',
      title:'4 DAYS SAFARI',
      title2:'TSAVO - TAITA HILLS',
      description:'Explore Tsavo West National Park holidays and discover the best time and places to visit. | Welcome to the wilderness. Tsavo is one of Kenyas larger ...',
      description2:'4-day safari (3 nights) at the parks: Tsavo East, Amboseli and Taita Hills.Jeep transfer from Watamu and overnight in a lodge or tented camp accompanied by a local English speaking guide.Recommended for those in search of strong emotions, possibility of taking a night safari at the Taita Hills reserve.Included are: transfers, park tickets and overnight stays.'
    },

    {
      id:5,
      image:'../../../assets/safari/IMG-20241004-WA0033.jpg',
      title:'4 DAYS SAFARI',
      title2:'TSAVO - AMBOSELI',
      description:'Land of Lava, Springs and Man Eaters. The parks form one of Africas largest wilderness reserves consisting of 10 million acres of pure wilderness made of ..',
      description2:'4-day safari (3 nights) at the Tsavo East and Amboseli Parks.Jeep Safari departs from Watamu and overnight stay in a Lodge or Camp Tented accompanied by a local English speaking guide.This Safari will take you to the foot of Kilimanjaro, famous for its perennial snow.The package includes everything : transfers, park admissions and overnight stay.'
    },

    {
      id:6,
      image:'../../../assets/safari/IMG-20241004-WA0025.jpg',
      title:'7 DAYS SAFARI',
      title2:'MASAAI MARA - LAKE NAKURU - TSAVO',
      description:'Masai Mara National Reserve is one of the most popular tourism destinations in Kenya- Africa. The reserve is located in the Great Rift Valley in primarily open ...',
      description2:'7-day safari (6 nights) departing from Nairobi.Jeep safari with overnight stay in a lodge or tented camp, accompanied by a local English speaking guide.Visit to the parks in order: Masai Mara, Nakuru Lake, Tsavo East, Tsavo West.7 days that will remain in your memory forever!The package is all inclusive: transfers, park entrances and overnight stays.'
    }



  ]
  getSafaris(){
    return this.safaris;
  }
}
