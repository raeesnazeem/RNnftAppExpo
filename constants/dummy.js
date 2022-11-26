import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Captain Marvel",
    creator: "Carol Denvers",
    price: 4.25,
    description:"Carol Susan Jane Danvers is a former United States Air Force pilot who, upon being exposed to the energy of the Tesseract via the destruction of the Light-Speed Engine, obtained cosmic powers. She gained further powers when she was made into a Kree-human hybrid via a blood transfusion from Yon-Rogg, and had all of her old memories removed, turning her into the Kree's weapon and a member of Starforce. Now operating as Vers, she was captured by Skrulls during the Kree-Skrull War, resulting in her returning to Earth and beginning to recall her past, with help from Nick Fury and Maria Rambeau. Vers subsequently discovered that Yon-Rogg and the Kree Empire had been manipulating her for years, learning from Talos that the Skrulls were merely seeking to find a new home. With this information, Danvers, rejecting her Vers persona, unlocked her true powers and defeated the Kree invasion onto Earth that was being led by Ronan the Accuser, before setting off out to the far reaches of the galaxy to finish what her late mentor Mar-Vell had previously started, honoring her by becoming known as Captain Marvel.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Nick Fury",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Agent Phil Coulson",
        price: 4.5,
        image: assets.person01,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Agent Maria Hill",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Captain America",
    creator: "Steve Rogers",
    price: 7.25,
    description:
      "Captain Steven Grant Steve Rogers is a World War II veteran, a founding member of the Avengers, and Earth's first known superhero. Rogers grew up suffering from numerous health problems, and upon America's entry into World War II, he was rejected from serving in the United States Army despite several attempts to enlist. Rogers ultimately volunteered for Project Rebirth, where he was the only recipient of the Super Soldier Serum developed by Abraham Erskine under the Strategic Scientific Reserve. The serum greatly enhanced Rogers' physical abilities to superhuman levels. After Erskine's assassination and being doubted by SSR head director Chester Phillips, Rogers was relegated to performing in war bond campaigns, where he posed as a patriotic mascot under the moniker of Captain America.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Nick Fury",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "Iron Man",
    creator: "Tony Stark",
    price: 95.25,
    description:
      "Anthony Edward Tony Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist. With his great wealth and exceptional technical knowledge, Stark was one of the world's most powerful men following the deaths of his parents and enjoyed the playboy lifestyle for many years until he was kidnapped by the Ten Rings in Afghanistan, while demonstrating a fleet of Jericho missiles. With his life on the line, Stark created an armored suit which he used to escape his captors. Upon returning home, he utilized several more armors to use against terrorists, as well as Obadiah Stane who turned against Stark. Following his fight against Stane, Stark publicly revealed himself as Iron Man.",
    image: assets.nft03,
    bids: [
      {
        id: "BID-32",
        name: "Nick Fury",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-31",
        name: "Maria Hill",
        price: 95.25,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
     
    ],
  },
  {
    id: "NFT-04",
    name: "Black Widow",
    creator: "Natasha Romanoff",
    price: 54.25,
    description:
      "Natalia Alianovna Natasha Romanoff (Russian: Наталья Альяновна Наташа Романов) was one of the most talented spies and assassins in the entire world and a founding member of the Avengers. As a child, she was indoctrinated into the Red Room by General Dreykov, and briefly lived as the surrogate daughter of Alexei Shostakov and Melina Vostokoff while they were undercover in the United States of America. After the Destruction of the North Institute, she underwent extensive psychological conditioning, before graduating from the Red Room as a Widow. Working as an operative for the KGB, she was targeted by S.H.I.E.L.D., before given the chance to ultimately defect to the organization by Clint Barton by assassinating Dreykov. Romanoff succeeded, although having to use his daughter Antonia Dreykov's life as collateral damage would haunt her for the rest of her life.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Nick Fury",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-05",
    name: "Hulk",
    creator: "Dr. Bruce Banner",
    price: 10.25,
    description:
      "Doctor Robert Bruce Banner, M.D., Ph.D., is a renowned scientist and a founding member of the Avengers. Highly respected for his work in biochemistry, nuclear physics and gamma radiation, Banner was tasked by Thaddeus Ross to recreate the Super Soldier Serum that created Captain America. However, Ross elected not to inform Banner what he was creating. During the experiment, Banner substituted vita radiation for gamma radiation and administered the serum on himself. As a result, the mild-mannered scientist found that when angered, provoked or excited, his body and brain would transform into a huge, rage-fueled, primitive-minded creature known as the Hulk.",
    image: assets.nft05,
    bids: [
      {
        id: "BID-51",
        name: "Nick Fury",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-06",
    name: "Thor",
    creator: "Thor Odinson",
    price: 20.25,
    description:
      "Thor Odinson is the Asgardian God of Thunder, the former king of both Asgard and New Asgard, and a founding member of the Avengers. When his irresponsible and impetuous behavior reignited an ancient war between Asgard and Jotunheim, Thor was denied the right to become king, stripped of his power and hammer Mjølnir, he was banished to Earth by Odin. While exiled on Earth, Thor found love with Jane Foster, and learned humility by saving his new friends from the Destroyer sent by Loki. Due to his selfless act of sacrifice, Thor redeemed himself in his father's eyes and was granted his power once more, which he then used to defeat Loki's schemes of genocide.",
    image: assets.nft06,
    bids: [
      {
        id: "BID-61",
        name: "Nick Fury",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "Hawk Eye",
    creator: "Clint Barton",
    price: 18.25,
    description:
      "Clinton Francis Clint Barton is an extremely skilled marksman, a former special agent of S.H.I.E.L.D. and one of the founding members of the Avengers. Known for his use of the bow and arrow as his primary weapon and an extremely keen eyesight and accuracy that earned him the codename Hawkeye, Barton had become one of the best S.H.I.E.L.D. agents, responsible for the recruitment of Black Widow, whom he developed a strong friendship with. Assigned by Nick Fury into watching over the Tesseract, he was brainwashed by Loki and used as his pawn in his attempt to become king of Midgard. However, following their Attack on the Helicarrier, he was freed from Loki's mental controls by Black Widow and joined the Avengers to fight against Loki and the Chitauri army in the battle of New York, ending Loki's invasion, before Hawkeye had returned to his work at a S.H.I.E.L.D..",
    image: assets.nft07,
    bids: [],
  },
];

export { NFTData };
