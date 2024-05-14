export interface CarDataType {
  id: string;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}


export const carsData = [
  {
    id: "1",
    title: "BMW 7 Series",
    thumbnail: {
      trending: {
        small: "./thumbnails/beyond-earth/trending/small.jpg",
        large: "./thumbnails/beyond-earth/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/beyond-earth/regular/small.jpg",
        medium: "./thumbnails/beyond-earth/regular/medium.jpg",
        large: "./thumbnails/beyond-earth/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Car",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "2",
    title: "BMW 7 Series",
    thumbnail: {
      trending: {
        small: "./thumbnails/bottom-gear/trending/small.jpg",
        large: "./thumbnails/bottom-gear/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/bottom-gear/regular/small.jpg",
        medium: "./thumbnails/bottom-gear/regular/medium.jpg",
        large: "./thumbnails/bottom-gear/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Car",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "3",
    title: "BMW 7 Series",
    thumbnail: {
      trending: {
        small: "./thumbnails/undiscovered-cities/trending/small.jpg",
        large: "./thumbnails/undiscovered-cities/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "./thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "./thumbnails/undiscovered-cities/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "4",
    title: "BMW 7 Series",
    thumbnail: {
      trending: {
        small: "./thumbnails/1998/trending/small.jpg",
        large: "./thumbnails/1998/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/1998/regular/small.jpg",
        medium: "./thumbnails/1998/regular/medium.jpg",
        large: "./thumbnails/1998/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Car",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
  },
];

export const ReservationList = [
  { date: "Tomorrow, 14 Feb, 2024", desk: 7, room: 5, floor: 2},
  { date: "Monday, 23 Jan, 2024", desk: 7, room: 5, floor: 2},
  { date: "Monday, 23 Jan, 2024", desk: 7, room: 5, floor: 2},
  { date: "Monday, 23 Jan, 2024", desk: 7, room: 5, floor: 2},
  { date: "Monday, 23 Jan, 2024", desk: 7, room: 5, floor: 2},
  { date: "Monday, 23 Jan, 2024", desk: 7, room: 5, floor: 2},
  { date: "Monday, 23 Jan, 2024", desk: 7, room: 5, floor: 2},
];


export const TeamData = [
  { name: "A.A. Fattah Islam", designation: "Software QA Technical Lead", email: "fattah.islam@enosisbd.com", image: "/A.A. Fattah Islam.png"},
  { name: "Aminul Islam", designation: "Senior Software Development Manager", email: "aminul@enosisbd.com", image: "/Aminul Islam.png"},
  { name: "Anik Islam Shimul", designation: "Software Project Lead", email: "anik.shimul@enosisbd.com", image: "/Anik Islam Shimul.png"},
  { name: "Kazi Md. Munim", designation: "Software QA Lead", email: "kazi.munim@enosisbd.com", image: "/Kazi Md. Munim.png"},
  { name: "Mohammad Ashfaq Islam Asif", designation: "Senior Software Engineer - Level 2", email: "mohammad.islam@enosisbd.com", image: "/Mohammad Ashfaq Islam Asif.png"},
  { name: "Mohammad Rezaul Karim", designation: "Software Engineer - Level 1", email: "rezaul.karim@enosisbd.com", image: "/Mohammad Rezaul Karim.png"},
  { name: "Nipun Paul", designation: "Software Engineer - Level 1", email: "nipun.paul@enosisbd.com", image: "/Nipun Paul.png"},
  { name: "Rasheduzzaman", designation: "Software Architect", email: "rasheduzzaman.sourov@enosisbd.com", image: "/Rasheduzzaman.png"},
  { name: "Shahadatul Hakim", designation: "Chief Operating Officer", email: "hakim@enosisbd.com", image: "/Shahadatul Hakim.png"},
  { name: "Shariar Azad Riday", designation: "Senior Software Engineer - Level 2", email: "shariar.riday@enosisbd.com", image: "/Shariar Azad Riday.png"},
  { name: "Suraka Iban Hanif", designation: "Software QA Engineer - Level 1", email: "suraka.hanif@enosisbd.com", image: "/Suraka Iban Hanif.png"},
  { name: "Ujjal Suttra Dhar", designation: "Software Development Lead", email: "ujjal.dhar@enosisbd.com", image: "/Ujjal Suttra Dhar.png"},
];


