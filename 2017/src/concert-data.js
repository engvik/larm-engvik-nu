/** Skeleton:

{
  day: "",
  venues: [
    {
      title: "",
      url: "",
      venue: "",
      info: "",
      concerts: [
        {
          name: "",
          time: ""
        },
        {
          name: "",
          time: ""
        },
        {
          name: "",
          time: ""
        },
      ]
    }
  ]
}

*/

const concertData = [
  {
    day: "Onsdag",
    venues: [
      {
        title: "Musikk på Sør",
        url: "https://www.facebook.com/events/1331256530227847/",
        venue: "Café Sør",
        info: "Aldersgrense 20 år.",
        concerts: [
          {
            name: "The Frozen Heart",
            time: "20:00 - 20:45"
          },
          {
            name: "Rya",
            time: "21:15 - 22:00"
          },
          {
            name: "Still Changing",
            time: "22:15 - 22:50"
          },
          {
            name: "The Reptilian Brain",
            time: "23:00 - 23:30"
          }
        ]
      },
      {
        title: "Showcase: Arendal Metal City",
        url: "https://www.facebook.com/events/1392856024105293/",
        venue: "Uhørt",
        info: "Aldersgrense 20 år.",
        concerts: [
          {
            name: "RISE ABOVE",
            time: ""
          },
          {
            name: "Vanvidd",
            time: ""
          },
          {
            name: "Vorbid",
            time: ""
          },
          {
            name: "Underwing",
            time: ""
          },
        ]
      },
      {
        title: "DC by:larm spesial",
        url: "https://www.facebook.com/events/1395941777095104/",
        venue: "Tilt",
        info: "Aldersgrense 23 år.",
        concerts: [
          {
            name: "Tuva and",
            time: "21:15"
          },
          {
            name: "Eugene",
            time: "22:00"
          },
          {
            name: "Amber Clouds",
            time: "22:45"
          },
          {
            name: "Magnus Bechmann",
            time: "23:30"
          },
        ]
      },
      {
        title: "Tik & At Home off:Larm showcase",
        url: "https://www.facebook.com/events/1876180592661304/",
        venue: "Verkstedet",
        info: "Fra 20:30. Aldersgrense 20 år.",
        concerts: [
          {
            name: "Kongle",
            time: ""
          },
          {
            name: "Peter Estdahl",
            time: ""
          },
          {
            name: "Marinius",
            time: ""
          },
          {
            name: "Great People",
            time: ""
          },
        ]
      }
    ]
  },
  {
    day: "Torsdag",
    venues: [
      {
        title: "Musikk på Sør",
        url: "https://www.facebook.com/events/1402840779727609/",
        venue: "Café Sør",
        info: "Aldersgrense 20 år.",
        concerts: [
          {
            name: "Steffen Skjel",
            time: "20:00 – 20:30"
          },
          {
            name: "Sweet Like Chili",
            time: "21:00 – 21:30"
          },
          {
            name: "Glass Club",
            time: "22:00 – 22:30"
          },
          {
            name: "Anette Askvik",
            time: "23:00 – 23:30"
          },
        ]
      },
      {
        title: "Showcase med Deft Artists",
        url: "https://www.facebook.com/events/1644337935870808/",
        venue: "Uhørt",
        info: "Aldersgrense 20 år.",
        concerts: [
          {
            name: "Eirik Sognnes",
            time: "21:30"
          },
          {
            name: "Conspectus",
            time: "22:30"
          },
          {
            name: "SKAAR",
            time: "23:30"
          },
        ]
      },
      {
        title: "Jansen plateproduksjon & Audun og Thomas presenterer",
        url: "https://www.facebook.com/events/578977122292855/",
        venue: "Tilt",
        info: "Aldersgrense 23 år.",
        concerts: [
          {
            name: "Hanne Kolstø",
            time: "17:00"
          },
          {
            name: "Svalestup",
            time: "18:00"
          },
          {
            name: "Darling West",
            time: "19:00"
          },
          {
            name: "Virkelig",
            time: "20:00"
          },
          {
            name: "Torgeir Waldemar",
            time: "21:00"
          },
          {
            name: "Hajk",
            time: "22:00"
          },
          {
            name: "Undergrünnen",
            time: "22:45"
          },
        ]
      },
      {
        title: "Bongolarm",
        url: "https://www.facebook.com/events/1640997652872782/",
        venue: "Perestrojka",
        info: "",
        concerts: [
          {
            name: "Bosses Bongoband",
            time: "17:00 - 23:30"
          },
        ]
      },
      {
        title: "Kjøkkenfest",
        url: "https://www.facebook.com/events/1781934178793294/",
        venue: "Hvaskjer",
        info: "Konserter fra 19.",
        concerts: [
          {
            name: "Lestrange",
            time: ""
          },
          {
            name: "Elise Måsvær",
            time: ""
          },
          {
            name: "Simen Rem",
            time: ""
          },
        ]
      }
    ]
  },
  {
    day: "Fredag",
    venues: [
      {
        title: "Musikk på Sør",
        url: "https://www.facebook.com/events/1875292432700439/",
        venue: "Café Sør",
        info: "Aldersgrense 20 år.",
        concerts: [
          {
            name: "Undergrunnen",
            time: "20:00 – 20:30"
          },
          {
            name: "Fierpmis",
            time: "21:00 – 21:30"
          },
          {
            name: "Ballonger & Sjampanje",
            time: "22:00 – 22:30"
          },
          {
            name: "Elly",
            time: "23:00 – 23:30"
          },
        ]
      },
      {
        title: "Atomic Soul Night",
        url: "https://www.facebook.com/events/1278531432193927/",
        venue: "Tilt",
        info: "Aldersgrense 23 år.",
        concerts: [
          {
            name: "Oliver Hohlbrugger",
            time: "19:00"
          },
          {
            name: "Beachheads",
            time: "20:00"
          },
          {
            name: "Hkeem",
            time: "21:00"
          },
          {
            name: "PRTLVX",
            time: "22:00"
          },
        ]
      },
      {
        title: "Off:larm // Ramble On Night",
        url: "https://www.facebook.com/events/187462898398648/",
        venue: "Postkontoret",
        info: "",
        concerts: [
          {
            name: "Marthe Wang",
            time: "18:00"
          },
          {
            name: "Twintoulouse",
            time: "19:00"
          },
          {
            name: "Inge Bremnes",
            time: "20:00"
          },
          {
            name: "De Marvells",
            time: "21:00"
          },
          {
            name: "The Taos Hum",
            time: "22:00"
          },
        ]
      },
      {
        title: "Bongolarm",
        url: "https://www.facebook.com/events/1640997652872782/",
        venue: "Perestrojka",
        info: "",
        concerts: [
          {
            name: "Bosses Bongoband",
            time: "17:00 - 23:30"
          },
        ]
      }
    ]
  },
  {
    day: "Lørdag",
    venues: [
      {
        title: "Musikk på Sør",
        url: "https://www.facebook.com/events/1804025906518724/",
        venue: "Café Sør",
        info: "Aldersgrense 20 år.",
        concerts: [
          {
            name: "Nomzi Kumalo",
            time: "20:00 - 20:30"
          },
          {
            name: "King Milo",
            time: "21:00 - 21:30"
          },
          {
            name: "Astrid Ekern",
            time: "22:00 - 22:30"
          },
          {
            name: "Kenneth Robsahm",
            time: "23:00 - 23:30"
          }
        ]
      },
      {
        title: "Showcase: Uhørt presenterer",
        url: "https://www.facebook.com/events/248026342315498/",
        venue: "Uhørt",
        info: "Aldersgrense 20 år.",
        concerts: [
          {
            name: "Charlotte & Thieves",
            time: "20:00"
          },
          {
            name: "Terra",
            time: "21:00 - 21:30"
          },
          {
            name: "Elly",
            time: "22:00 - 22:30"
          },
          {
            name: "Rikke Normann",
            time: "23:00 - 23:30"
          },
          {
            name: "I am K",
            time: "00:00 - 00:30"
          },
        ]
      },
      {
        title: "Fysisk Format Showcase",
        url: "https://www.facebook.com/events/486887471699271/",
        venue: "Tilt",
        info: "Aldersgrense 23 år.",
        concerts: [
          {
            name: "Ieatheartattacks",
            time: "19:00"
          },
          {
            name: "Kyrre Bjørnås",
            time: "19:40"
          },
          {
            name: "Sibiir",
            time: "20:20"
          },
          {
            name: "Hilma",
            time: "21:00"
          },
          {
            name: "Ondt Blod",
            time: "22:20"
          },
          {
            name: "Beachheads",
            time: "23:00"
          },
        ]
      },
      {
        title: "Brylarm 2017",
        url: "https://www.facebook.com/events/1379352698753064/",
        venue: "Sentrum Scene",
        info: "Dørene åpner 11:30. Konserter mellom 12 og 15. Fri alder.",
        concerts: [
          {
            name: "Frida Ånnevik",
            time: ""
          },
          {
            name: "Terje Wessel",
            time: ""
          },
          {
            name: "Øystein Greni",
            time: ""
          },
          {
            name: "Charlie Storøygard",
            time: ""
          },
          {
            name: "Ida Maria",
            time: ""
          },
          {
            name: "Oslo Ess",
            time: ""
          },
        ]
      },
      {
        title: "Bongolarm",
        url: "https://www.facebook.com/events/1640997652872782/",
        venue: "Perestrojka",
        info: "",
        concerts: [
          {
            name: "Bosses Bongoband",
            time: "17:00 - 23:30"
          },
        ]
      },
      {
        title: "ARC #11",
        url: "https://www.facebook.com/events/1448226471876428/",
        venue: "St Edmund's Church",
        info: "Fri alder. Mellom 17 og 19 i kirka i Møllergata. Kun 100 plasser.",
        concerts: [
          {
            name: "Lars Horntveth & Øystein Moen",
            time: ""
          },
          {
            name: "Simen Følstad Nilsen",
            time: ""
          },
          {
            name: "Axel Skalstad",
            time: ""
          },
        ]
      },
      {
        title: "Brylarm gatefest",
        url: "http://bylarm.no/music/news/gratis-gatefest-i-torggata-og-brylarm-pa-lordag/",
        venue: "Torggata",
        info: "Konserter mellom 15 og 19 på forskjellige steder i Torggata.",
        concerts: [
          {
            name: "African Sunz",
            time: ""
          },
          {
            name: "Young Cisto",
            time: ""
          },
          {
            name: "Ida Dillan",
            time: ""
          },
          {
            name: "Kine Hjeltnes",
            time: ""
          },
          {
            name: "Espen",
            time: ""
          },
          {
            name: "For The Love of Ivy",
            time: ""
          },
          {
            name: "Himmelhøyt",
            time: ""
          },
          {
            name: "IEatHeartAttacks",
            time: ""
          },
          {
            name: "Kambodsja",
            time: ""
          },
          {
            name: "Skalla",
            time: ""
          },
          {
            name: "Iffy Orbit",
            time: ""
          },
          {
            name: "Jadudah",
            time: ""
          },
          {
            name: "Acres Wild",
            time: ""
          },
          {
            name: "Nelly´s Crush",
            time: ""
          },
          {
            name: "VÅG",
            time: ""
          },
          {
            name: "The Harvey Steel Show",
            time: ""
          },
          {
            name: "Silver Lining",
            time: ""
          },
          {
            name: "Up Against the Phantom",
            time: ""
          },
          {
            name: "Irish Waves",
            time: ""
          },
          {
            name: "Elvic Congolo",
            time: ""
          },
          {
            name: "Foyn",
            time: ""
          },
          {
            name: "Hey, Wait",
            time: ""
          },
          {
            name: "Beharie",
            time: ""
          },
          {
            name: "Jenny Augusta",
            time: ""
          },
          {
            name: "Astrid Ekern",
            time: ""
          },
          {
            name: "Simen Mitlid",
            time: ""
          },
          {
            name: "Family Values",
            time: ""
          },
          {
            name: "Svalestup",
            time: ""
          },
          {
            name: "Marte Røyeng",
            time: ""
          },
          {
            name: "Tatarius",
            time: ""
          },
          {
            name: "Selmer",
            time: ""
          },
          {
            name: "Amber Clouds",
            time: ""
          },
          {
            name: "Some Feather",
            time: ""
          },
          {
            name: "Natti",
            time: ""
          },
        ]
      }
    ]
  }
]

export default concertData;
