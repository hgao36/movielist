import React, { Component, useState } from "react";
import MovieCard from './MovieCard';

const mov = [
  {
    liked: true,
    blocked: false,
    popularity: 174.345,
    vote_count: 425,
    video: false,
    poster_path: "/tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
    id: 475430,
    adult: false,
    backdrop_path: "/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
    original_language: "en",
    original_title: "Artemis Fowl",
    genre_ids: [12, 14, 878, 10751],
    title: "Artemis Fowl",
    vote_average: 5.9,
    overview:
      "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
    release_date: "2020-06-12",
  },
  {
    popularity: 145.789,
    vote_count: 186,
    video: false,
    poster_path: "/hau6iHAIWJmlnaaZ0QRYZu9T6B1.jpg",
    id: 130267,
    adult: false,
    backdrop_path: "/dcXgShktPpOLhmd8iVWhxPn6OgM.jpg",
    original_language: "en",
    original_title: "Seal Team Six: The Raid on Osama Bin Laden",
    genre_ids: [28, 80, 18, 53],
    title: "Seal Team Six: The Raid on Osama Bin Laden",
    vote_average: 5.9,
    overview:
      "When the rumored whereabouts of Osama bin Laden are revealed, the CIA readies a team of seasoned U.S. Navy SEALs for the mission of a lifetime. Despite inconclusive evidence that bin Laden is inside the compound, and ignoring the possible ramifications of an unannounced attack on Pakistani soil, the Pentagon orders the attack. The SEAL Team bands together to complete their mission of justice in a riveting final showdown.",
    release_date: "2012-11-04",
  },
  {
    popularity: 140.121,
    vote_count: 3789,
    video: false,
    poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    id: 419704,
    adult: false,
    backdrop_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
    original_language: "en",
    original_title: "Ad Astra",
    genre_ids: [18, 878],
    title: "Ad Astra",
    vote_average: 6.1,
    overview:
      "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
    release_date: "2019-09-17",
  },
  {
    popularity: 135.424,
    vote_count: 139,
    video: false,
    poster_path: "/qnlChF8U4diiykXQYs1miigGy7t.jpg",
    id: 706503,
    adult: false,
    backdrop_path: "/t4mzypFVjY6toyBXAmfrIaWcUXa.jpg",
    original_language: "fr",
    original_title: "Balle perdue",
    genre_ids: [28, 80, 53],
    title: "Lost Bullet",
    vote_average: 6.8,
    overview:
      "A small time delinquent, turned police mechanic for a go fast task force, is forced to defend his innocence when his mentor is killed by dirty cops.",
    release_date: "2020-06-19",
  },
  {
    popularity: 134.314,
    vote_count: 201,
    video: false,
    poster_path: "/Af2jt7m9GLFpR4V11xOsFmT8OKD.jpg",
    id: 707886,
    adult: false,
    backdrop_path: "/fZBQOScjDT8TAipEyCkLVeDTu5c.jpg",
    original_language: "en",
    original_title: "Feel the Beat",
    genre_ids: [35, 18, 10402],
    title: "Feel the Beat",
    vote_average: 8.1,
    overview:
      "After failing to make it on Broadway, April returns to her hometown and reluctantly begins training a misfit group of young dancers for a competition.",
    release_date: "2020-06-19",
  },
  {
    popularity: 126.47,
    vote_count: 13,
    video: false,
    poster_path: "/1Duc3EBiegywczxTWekvy03HWai.jpg",
    id: 554993,
    adult: false,
    backdrop_path: "/oCFbh4Mrd0fuGanCgIF6sG27WGD.jpg",
    original_language: "sv",
    original_title: "Britt-Marie var här",
    genre_ids: [35, 18],
    title: "Britt-Marie Was Here",
    vote_average: 5.2,
    overview:
      "Britt-Marie, a woman in her sixties, decides to leave her husband and start anew. Having been housewife for most of her life and and living in small backwater town of Borg, there isn't many jobs available and soon she finds herself fending a youth football team.",
    release_date: "2019-01-25",
  },
  {
    popularity: 114.774,
    vote_count: 98,
    video: false,
    poster_path: "/hL2uecLh2rTTbuVbOriXP0PhqIJ.jpg",
    id: 509585,
    adult: false,
    backdrop_path: "/akAbe8Lddj4J4vaT68EUVMufXZt.jpg",
    original_language: "en",
    original_title: "7500",
    genre_ids: [18, 53],
    title: "7500",
    vote_average: 6,
    overview:
      "When terrorists try to seize control of a Berlin-Paris flight, a soft-spoken young American co-pilot struggles to save the lives of the passengers and crew while forging a surprising connection with one of the hijackers.",
    release_date: "2019-12-26",
  },
  {
    popularity: 110.146,
    vote_count: 4750,
    video: false,
    poster_path: "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
    id: 454626,
    adult: false,
    backdrop_path: "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
    original_language: "en",
    original_title: "Sonic the Hedgehog",
    genre_ids: [28, 35, 878, 10751],
    title: "Sonic the Hedgehog",
    vote_average: 7.5,
    overview:
      "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
    release_date: "2020-02-12",
  },
  {
    popularity: 105.07,
    vote_count: 8093,
    video: false,
    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    id: 496243,
    adult: false,
    backdrop_path: "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
    original_language: "ko",
    original_title: "기생충",
    genre_ids: [35, 18, 53],
    title: "Parasite",
    vote_average: 8.5,
    overview:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    release_date: "2019-05-30",
  },
  {
    popularity: 103.839,
    vote_count: 33,
    video: false,
    poster_path: "/2Gi9ZA4kRKKsWguUoTvIyj40dxF.jpg",
    id: 514593,
    adult: false,
    backdrop_path: "/chAGSv4DB9s3fsgULpSZQLN7LgN.jpg",
    original_language: "en",
    original_title: "You Should Have Left",
    genre_ids: [27, 9648],
    title: "You Should Have Left",
    vote_average: 4.9,
    overview:
      "In an effort to repair their relationship, a couple books a vacation in the countryside for themselves and their daughter. What starts as a perfect retreat begins to fall apart as one loses their grip on reality, and a sinister force tries to tear them apart.",
    release_date: "2020-06-19",
  },
  {
    popularity: 101.395,
    vote_count: 13355,
    video: false,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    id: 475557,
    adult: false,
    backdrop_path: "/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
    original_language: "en",
    original_title: "Joker",
    genre_ids: [80, 18, 53],
    title: "Joker",
    vote_average: 8.2,
    overview:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    release_date: "2019-10-02",
  },
  {
    popularity: 96.894,
    vote_count: 2206,
    video: false,
    poster_path: "/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg",
    id: 570670,
    adult: false,
    backdrop_path: "/uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg",
    original_language: "en",
    original_title: "The Invisible Man",
    genre_ids: [27, 878, 53],
    title: "The Invisible Man",
    vote_average: 7.2,
    overview:
      "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
    release_date: "2020-02-26",
  },
  {
    popularity: 95.882,
    vote_count: 4661,
    video: false,
    poster_path: "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
    id: 495764,
    adult: false,
    backdrop_path: "/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
    original_language: "en",
    original_title:
      "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    genre_ids: [28, 35, 80],
    title:
      "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    vote_average: 7.2,
    overview:
      "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
    release_date: "2020-02-05",
  },
  {
    popularity: 92.577,
    vote_count: 9939,
    video: false,
    poster_path: "/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    id: 122917,
    adult: false,
    backdrop_path: "/bVmSXNgH1gpHYTDyF9Q826YwJT5.jpg",
    original_language: "en",
    original_title: "The Hobbit: The Battle of the Five Armies",
    genre_ids: [28, 12, 14],
    title: "The Hobbit: The Battle of the Five Armies",
    vote_average: 7.3,
    overview:
      "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    release_date: "2014-12-10",
  },
  {
    popularity: 91.66,
    vote_count: 18639,
    video: false,
    poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    id: 299536,
    adult: false,
    backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
    original_language: "en",
    original_title: "Avengers: Infinity War",
    genre_ids: [28, 12, 878],
    title: "Avengers: Infinity War",
    vote_average: 8.3,
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    release_date: "2018-04-25",
  },
  {
    popularity: 90.418,
    vote_count: 0,
    video: false,
    poster_path: "/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
    id: 619592,
    adult: false,
    backdrop_path: "/jAtO4ci8Tr5jDmg33XF3OZ8VPah.jpg",
    original_language: "en",
    original_title: "Force of Nature",
    genre_ids: [28, 18],
    title: "Force of Nature",
    vote_average: 0,
    overview:
      "A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.",
    release_date: "2020-07-02",
  },
  {
    popularity: 88.674,
    vote_count: 17258,
    video: false,
    poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    id: 671,
    adult: false,
    backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    original_language: "en",
    original_title: "Harry Potter and the Philosopher's Stone",
    genre_ids: [12, 14, 10751],
    title: "Harry Potter and the Philosopher's Stone",
    vote_average: 7.9,
    overview:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    release_date: "2001-11-16",
  },
  {
    popularity: 84.103,
    vote_count: 220,
    video: false,
    poster_path: "/yx4cp1ljJMDSFeEex0Zjv45b55E.jpg",
    id: 581859,
    adult: false,
    backdrop_path: "/Aq5Zhj9iaTF6BEKNk05dlUxeHKa.jpg",
    original_language: "en",
    original_title: "Da 5 Bloods",
    genre_ids: [18, 10752],
    title: "Da 5 Bloods",
    vote_average: 6.9,
    overview:
      "Four African-American Vietnam veterans return to Vietnam. They are in search of the remains of their fallen squad leader and the promise of buried treasure. These heroes battle forces of humanity and nature while confronted by the lasting ravages of the immorality of the Vietnam War.",
    release_date: "2020-06-12",
  },
  {
    popularity: 81.125,
    vote_count: 6223,
    video: false,
    poster_path: "/ykUEbfpkf8d0w49pHh0AD2KrT52.jpg",
    id: 420817,
    adult: false,
    backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
    original_language: "en",
    original_title: "Aladdin",
    genre_ids: [12, 35, 14, 10749, 10751],
    title: "Aladdin",
    vote_average: 7.1,
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    release_date: "2019-05-22",
  },
  {
    popularity: 80.61,
    vote_count: 5491,
    video: false,
    poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    id: 530915,
    adult: false,
    backdrop_path: "/cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg",
    original_language: "en",
    original_title: "1917",
    genre_ids: [28, 18, 36, 10752],
    title: "1917",
    vote_average: 7.9,
    overview:
      "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
    release_date: "2019-12-25",
  },
];

function MovieList() {
  const [film, setFilm] = useState(mov);
  const card = film.map((movie) => (
    <MovieCard
      key={movie.id}
      poster_path={movie.poster_path}
      title={movie.title}
      release_date={movie.release_date}
      vote_average={movie.vote_average}
      vote_count={movie.vote_count}
      overview={movie.overview}
      liked={movie.liked}
      blocked={movie.blocked}
    />
  ));

  const sortbyname = () => {
    const temp = [...film];
    temp.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setFilm(temp);
  };

  const sortbycount = () => {
    const temp = [...film];
    temp.sort(function (a, b) {
      return b.vote_count - a.vote_count;
    });
    setFilm(temp);
  }

  const sortbyavg = () => {
    const temp = [...film];
    temp.sort(function (a, b) {
      return b.vote_average - a.vote_average;
    });
    setFilm(temp);
  }
  return (
    <>
      <div>
        <button>previous page</button>
        <button>next page</button>
      </div>
      <button onClick={sortbyname}>SortByname</button>
      <button onClick={sortbycount}>Sort by vote count</button>
      <button onClick={sortbyavg}>Sort by vote average</button>
      {card}
    </>
  );
}

export default MovieList;
