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
        title: "Black Pop Records off:larm night!",
        url: "https://www.facebook.com/events/1706702959390055/",
        venue: "Tilt",
        info: "",
        concerts: [
          {
            name: "Geetar",
            time: "20:00"
          },
          {
            name: "Rick Ashtray",
            time: "21:00"
          },
          {
            name: "Mats Wawa",
            time: "22:00"
          },
          {
            name: "Wet Dreams",
            time: "23:00"
          },
        ]
      },
      {
        title: "Agenturet & Tik Records: Showcase",
        url: "https://www.facebook.com/events/219776265256639/",
        venue: "Ingensteds",
        info: "",
        concerts: [
          {
            name: "Howlin' Sun",
            time: ""
          },
          {
            name: "Dobbeltgjenger",
            time: ""
          },
          {
            name: "Utakk",
            time: ""
          },
          {
            name: "Johannes Holtmon",
            time: ""
          },
          {
            name: "Marinius ",
            time: ""
          },
        ]
      },
      {
        title: "Diger Distro Festkveld",
        url: "https://www.facebook.com/events/2029650560395499/",
        venue: "MONO",
        info: "",
        concerts: [
          {
            name: "The Secret Sound of Dreamwalkers",
            time: "20:00"
          },
          {
            name: "Closing Eyes",
            time: "21:00"
          },
          {
            name: "Æsthetica",
            time: "22:00"
          },
          {
            name: "Syden",
            time: "23:00"
          },
        ]
      }
    ]
  },
  {
    day: "Torsdag",
    venues: [
      {
        title: "Jansen Records off:larm night!",
        url: "https://www.facebook.com/events/792468527603349/",
        venue: "Tilt",
        info: "Seks band fra 18:00 - 00:00. Hemmelig hvem som spiller.",
        concerts: []
      },
      {
        title: "Ghost Town presenterer off:Larm",
        url: "https://www.facebook.com/events/169928030396680/",
        venue: "Uhørt",
        info: "",
        concerts: [
          {
            name: "NINV",
            time: ""
          },
          {
            name: "Majorleap",
            time: ""
          },
          {
            name: "Clix",
            time: ""
          },
          {
            name: "Arthur Stulien",
            time: ""
          }
        ]
      },
    ]
  },
  {
    day: "Fredag",
    venues: [
      {
        title: "Young Aspiring Professionals m/venner",
        url: "https://www.facebook.com/events/895324880648279/",
        venue: "Tilt",
        info: "De to siste på Arkade i kjelleren på Tilt.",
        concerts: [
          {
            name: "Baertur (DJ-set)",
            time: "19:00"
          },
          {
            name: "Ungdomskulen (DJ-set)",
            time: "20:00"
          },
          {
            name: "No States (DJ-set)",
            time: "21:00"
          },
          {
            name: "Harald Fossberg (DJ-set)",
            time: "22:00"
          },
          {
            name: "DJ Gymbag",
            time: "22:00"
          },
          {
            name: "Datarock",
            time: "00:00"
          },
        ]
      },
      {
        title: "Off:Larm",
        url: "https://www.facebook.com/events/418048075283427/",
        venue: "Postkontoret",
        info: "",
        concerts: [
          {
            name: "Einar Flaa",
            time: "19:00"
          },
          {
            name: "Moviestar",
            time: "20:00"
          },
          {
            name: "Kompass",
            time: "21:00"
          },
          {
            name: "F​riendship",
            time: "22:00"
          },
        ],
      },
      {
        title: "off:Larm",
        url: "https://www.facebook.com/events/149352829067161/",
        venue: "Verkstedet",
        info: "",
        concerts: [
          {
            name: "Jimi Somewhere",
            time: "22:15"
          },
          {
            name: "Hanne Mjøen",
            time: "23:15"
          },
          {
            name: "Andreas Wijk",
            time: "00:15"
          },
        ],
      },
      {
        title: "Off:Larm",
        url: "https://www.facebook.com/events/1875551949186570/",
        venue: "Cafe Sør",
        info: "",
        concerts: [
          {
            name: "Lilja // \\ Jan",
            time: ""
          },
        ]
      },
    ]
  },
  {
    day: "Lørdag",
    venues: [
      {
        title: "Fysisk Format Showcase",
        url: "https://www.facebook.com/events/1999832780057470/",
        venue: "Tilt",
        info: "",
        concerts: [
          {
            name: "Duvel",
            time: ""
          },
          {
            name: "Haraball",
            time: ""
          },
          {
            name: "Spurv",
            time: ""
          },
          {
            name: "Hilma Nikolaisen",
            time: ""
          },
        ]
      },
      {
        title: "Apollon Records presenterer off:Larm",
        url: "https://www.facebook.com/events/142193899782039/",
        venue: "Uhørt",
        info: "",
        concerts: [
          {
            name: "Simen Lyngroth",
            time: "16:00"
          },
          {
            name: "I am K",
            time: "16:45"
          },
          {
            name: "Major Parkinson",
            time: "17:20"
          },
          {
            name: "UNGDOMSKULEN",
            time: "18:10"
          },
          {
            name: "Borgar Storebråten",
            time: "18:50"
          },
          {
            name: "Slomosa",
            time: "19:30"
          }
        ]
      },
      {
        title: "Brylarm",
        url: "https://www.facebook.com/events/1888393454804748/",
        venue: "Kulturkirken JAKOB",
        info: "",
        concerts: [
          {
            name: "deLillos",
            time: ""
          },
          {
            name: "Skambankt",
            time: ""
          },
          {
            name: "Marion Ravn",
            time: ""
          },
          {
            name: "Hilma Nikolaisen",
            time: ""
          },
          {
            name: "Oslo Ess",
            time: ""
          }
        ]
      },
      {
        title: "Vise:larm",
        url: "https://www.facebook.com/events/357639181370982/",
        venue: "Café Mir",
        info: "Usikkert om dette er gratis.",
        concerts: [
          {
            name: "Emma Hegermann",
            time: ""
          },
          {
            name: "Bøler",
            time: ""
          }
        ]
      },
      {
        title: "RØØR:Larm",
        url: "https://www.facebook.com/events/1008843519253357/",
        venue: "RØØR",
        info: "",
        concerts: [
          {
            name: "Bianca Steck",
            time: "19:00"
          },
          {
            name: "Trist Pike",
            time: "20:00"
          },
          {
            name: "Anders Johnsen",
            time: "21:00"
          },
          {
            name: "Mark Steiner & His Problems",
            time: "22:00"
          },
          {
            name: "Mandalai Lamas",
            time: "23:00"
          }
        ]
      },
      {
        title: "Bongolarm med Bosses Bongoband",
        url: "https://www.facebook.com/events/152578278722730/",
        venue: "Perestrojka",
        info: "",
        concerts: [
          {
            name: "Bosses Bongoband",
            time: ""
          },
        ]
      },
      {
        title: "Burn The Man - Forcefed Horsehead - Shaving The Werewolf",
        url: "https://www.facebook.com/events/1588006181307167/",
        venue: "Blitz",
        info: "Nesten gratis, 50 spenn.",
        concerts: [
          {
            name: "Burn The Man",
            time: ""
          },
          {
            name: "Forcefed Horsehead",
            time: ""
          },
          {
            name: "Shaving The Werewolf",
            time: ""
          },
        ]
      },
      {
        title: "Off:Larm",
        url: "https://www.facebook.com/events/2078510795719078/",
        venue: "Cafe Sør",
        info: "",
        concerts: [
          {
            name: "Nomzi Kumalo",
            time: ""
          },
        ]
      },
    ]
  }
]

export default concertData;
