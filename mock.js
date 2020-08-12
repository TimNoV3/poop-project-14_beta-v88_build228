const mock = [
  {
    "address": "New Leo",
    "company": "O'Keefe - Little",
    "date": "2021-03-14T15:39:03.717Z",
    "finance": "497.13",
    "name": "Freeda, McCullough",
  },
  {
    "address": "New Arnoldoport",
    "company": "Daniel Group",
    "date": "2021-08-06T11:45:53.582Z",
    "finance": "666.67",
    "name": "Cali, Auer",
  },
  {
    "address": "Mackmouth",
    "company": "Von - Bauch",
    "date": "2020-11-01T21:25:49.646Z",
    "finance": "838.43",
    "name": "Francis, Wintheiser",
  },
  {
    "address": "North Margueritetown",
    "company": "Orn - Haley",
    "date": "2021-01-01T02:04:11.072Z",
    "finance": "473.65",
    "name": "Viola, Satterfield",
  },
  {
    "address": "Conorchester",
    "company": "Dickens Group",
    "date": "2021-06-07T00:06:04.982Z",
    "finance": "305.71",
    "name": "Maiya, Green",
  },
  {
    "address": "Berthaberg",
    "company": "Price Group",
    "date": "2021-03-09T18:31:13.676Z",
    "finance": "405.90",
    "name": "Allie, Bergnaum",
  },
  {
    "address": "Anastaciobury",
    "company": "Eichmann - O'Conner",
    "date": "2021-05-23T15:51:34.521Z",
    "finance": "412.89",
    "name": "Graham, Hammes",
  },
  {
    "address": "New Delilah",
    "company": "Walter, Wiza and Batz",
    "date": "2020-10-04T23:04:04.362Z",
    "finance": "159.91",
    "name": "Burnice, Bosco",
  },
  {
    "address": "Ressiefort",
    "company": "Reinger - Mante",
    "date": "2021-05-26T18:06:00.163Z",
    "finance": "18.11",
    "name": "Otis, Torp",
  },
  {
    "address": "Freddiebury",
    "company": "Blanda Group",
    "date": "2020-11-21T06:04:19.315Z",
    "finance": "111.80",
    "name": "Leland, Herman",
  },
  {
    "address": "West Jackyborough",
    "company": "Gleason - Wilkinson",
    "date": "2021-06-28T03:54:28.247Z",
    "finance": "846.62",
    "name": "Sam, Kuphal",
  },
  {
    "address": "Reinholdbury",
    "company": "Smith Inc",
    "date": "2021-02-01T11:00:15.537Z",
    "finance": "313.48",
    "name": "Chaya, Terry",
  },
  {
    "address": "West Jayhaven",
    "company": "Fisher Group",
    "date": "2020-11-14T10:32:05.560Z",
    "finance": "945.63",
    "name": "Hanna, Simonis",
  },
  {
    "address": "Port Alvena",
    "company": "Wolff - Swift",
    "date": "2021-07-16T10:19:39.067Z",
    "finance": "181.06",
    "name": "Alfred, Koelpin",
  },
  {
    "address": "South Lesterton",
    "company": "Bergstrom Inc",
    "date": "2020-12-14T18:18:41.694Z",
    "finance": "778.64",
    "name": "Dameon, Lynch"
  }
];

const task_1 = (array,key,sortOrder) =>
  [...array].sort((a,b) => a[key] > b[key] ? 1*sortOrder:-1*sortOrder);
  

const task_3 = (array, str) => 
  [...array].filter(elem => elem.address.toLowerCase().includes(str.toLowerCase()));  
  

const task_4 = (array,initialValue = 0) => [...array].reduce(function (accumulator, currentValue) {
  return accumulator + parseFloat(currentValue.finance);
}, initialValue);

task_1(mock,1);