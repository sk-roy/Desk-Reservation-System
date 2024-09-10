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


export const DataGridRows = [
  { id: 1, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 301-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 2, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 303-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 3, reservedOn: 'Monday, 15 Sep 2023', desk: 'Desk 302-09', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 4, reservedOn: 'Tuesday, 27 Aug 2023', desk: 'Desk 303-22', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 5, reservedOn: 'Wednesday, 21 Aug 2023', desk: 'Desk 501-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 6, reservedOn: 'Thursday, 12 Aug 2023', desk: 'Desk 701-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 7, reservedOn: 'Monday, 05 Aug 2023', desk: 'Desk 401-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 8, reservedOn: 'Friday, 07 Jul 2023', desk: 'Desk 601-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 9, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 301-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 10, reservedOn: 'Monday, 15 Sep 2023', desk: 'Desk 302-09', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 11, reservedOn: 'Tuesday, 27 Aug 2023', desk: 'Desk 303-22', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 12, reservedOn: 'Wednesday, 21 Aug 2023', desk: 'Desk 501-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 13, reservedOn: 'Thursday, 12 Aug 2023', desk: 'Desk 701-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 14, reservedOn: 'Monday, 05 Aug 2023', desk: 'Desk 401-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 15, reservedOn: 'Friday, 07 Jul 2023', desk: 'Desk 601-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 16, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 301-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 17, reservedOn: 'Monday, 15 Sep 2023', desk: 'Desk 302-09', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 18, reservedOn: 'Tuesday, 27 Aug 2023', desk: 'Desk 303-22', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 19, reservedOn: 'Wednesday, 21 Aug 2023', desk: 'Desk 501-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 20, reservedOn: 'Thursday, 12 Aug 2023', desk: 'Desk 701-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 21, reservedOn: 'Monday, 05 Aug 2023', desk: 'Desk 401-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 22, reservedOn: 'Friday, 07 Jul 2023', desk: 'Desk 601-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 23, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 301-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 24, reservedOn: 'Monday, 15 Sep 2023', desk: 'Desk 302-09', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 25, reservedOn: 'Tuesday, 27 Aug 2023', desk: 'Desk 303-22', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 26, reservedOn: 'Wednesday, 21 Aug 2023', desk: 'Desk 501-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 27, reservedOn: 'Thursday, 12 Aug 2023', desk: 'Desk 701-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 28, reservedOn: 'Monday, 05 Aug 2023', desk: 'Desk 401-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 29, reservedOn: 'Friday, 07 Jul 2023', desk: 'Desk 601-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 30, reservedOn: 'Friday, 26 Oct 2023', desk: 'Desk 301-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 31, reservedOn: 'Monday, 15 Sep 2023', desk: 'Desk 302-09', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 32, reservedOn: 'Tuesday, 27 Aug 2023', desk: 'Desk 303-22', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 33, reservedOn: 'Wednesday, 21 Aug 2023', desk: 'Desk 501-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 34, reservedOn: 'Thursday, 12 Aug 2023', desk: 'Desk 701-03', status: 1, madeReservedOn: '27 Oct 2022 6:22 AM', button: 1  },
  { id: 35, reservedOn: 'Monday, 05 Aug 2023', desk: 'Desk 401-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
  { id: 36, reservedOn: 'Friday, 07 Jul 2023', desk: 'Desk 601-03', status: 0, madeReservedOn: '27 Oct 2022 6:22 AM', button: 0  },
];


export const TeamData = [
  { name: "A.A. Fattah Islam", designation: "Software QA Technical Lead", email: "fattah.islam@enosisbd.com", image: "/images/drsTeam/A.A. Fattah Islam.svg"},
  { name: "Aminul Islam", designation: "Senior Software Development Manager", email: "aminul@enosisbd.com", image: "/images/drsTeam/Aminul Islam.svg"},
  { name: "Anik Islam Shimul", designation: "Software Project Lead", email: "anik.shimul@enosisbd.com", image: "/images/drsTeam/Anik Islam Shimul.svg"},
  { name: "Kazi Md. Munim", designation: "Software QA Lead", email: "kazi.munim@enosisbd.com", image: "/images/drsTeam/Kazi Md. Munim.svg"},
  { name: "Mohammad Ashfaq Islam Asif", designation: "Senior Software Engineer - Level 2", email: "mohammad.islam@enosisbd.com", image: "/images/drsTeam/Mohammad Ashfaq Islam Asif.svg"},
  { name: "Mohammad Rezaul Karim", designation: "Software Engineer - Level 1", email: "rezaul.karim@enosisbd.com", image: "/images/drsTeam/Mohammad Rezaul Karim.svg"},
  { name: "Nipun Paul", designation: "Software Engineer - Level 1", email: "nipun.paul@enosisbd.com", image: "/images/drsTeam/Nipun Paul.svg"},
  { name: "Rasheduzzaman", designation: "Software Architect", email: "rasheduzzaman.sourov@enosisbd.com", image: "/images/drsTeam/Rasheduzzaman.svg"},
  { name: "Shahadatul Hakim", designation: "Chief Operating Officer", email: "hakim@enosisbd.com", image: "/images/drsTeam/Shahadatul Hakim.svg"},
  { name: "Shariar Azad Riday", designation: "Senior Software Engineer - Level 2", email: "shariar.riday@enosisbd.com", image: "/images/drsTeam/Shariar Azad Riday.svg"},
  { name: "Suraka Iban Hanif", designation: "Software QA Engineer - Level 1", email: "suraka.hanif@enosisbd.com", image: "/images/drsTeam/Suraka Iban Hanif.svg"},
  { name: "Ujjal Suttra Dhar", designation: "Software Development Lead", email: "ujjal.dhar@enosisbd.com", image: "/images/drsTeam/Ujjal Suttra Dhar.svg"},
];


