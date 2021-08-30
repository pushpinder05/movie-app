import React, { useState } from "react";
import "./styles.css";

const AllMovies = {
  Comedy: [
    {
      Title: "Jumanji: The Next Level",
      Description:
        "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg",
      Rating: "6.7/10"
    },
    {
      Title: "Kung Fu Panda 3",
      Description:
        "Continuing his 'legendary adventures of awesomeness', Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/e/e6/Kung_Fu_Panda_3_poster.jpg",
      Rating: "7.1/10"
    },
    {
      Title: "Shazam!",
      Description:
        "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/c/c2/Shazam%21_%28film%29_poster.jpg",
      Rating: "7/10"
    },
    {
      Title: "Thor: Ragnarok",
      Description:
        "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg",
      Rating: "7.9/10"
    }
  ],
  SciFi: [
    {
      Title: "Tenet",
      Description:
        "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
      Rating: "7.4/10"
    },
    {
      Title: "War for the Planet of the Apes",
      Description:
        "After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/War_for_the_Planet_of_the_Apes_poster.jpg",
      Rating: "7.4/10"
    },
    {
      Title: "Bumblebee",
      Description:
        "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small California beach town. On the cusp of turning 18 and trying to find her place in the world, Charlie Watson discovers Bumblebee, battle-scarred and broken.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/7/77/Bumblebee_%28film%29_poster.png",
      Rating: "6.7/10"
    },
    {
      Title: "Spider-Man: Homecoming",
      Description:
        "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
      Rating: "7.4/10"
    }
  ],
  Horror: [
    {
      Title: "It",
      Description:
        "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
      Rating: "7.3/10"
    },
    {
      Title: "Bird Box",
      Description:
        "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Bird_Box_%28film%29.png",
      Rating: "6.6/10"
    },
    {
      Title: "Army of the Dead",
      Description:
        "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/2/2c/Army_of_the_Dead_%282021_film%29.png",
      Rating: "6/10"
    },
    {
      Title: "Train to Busan",
      Description:
        "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg",
      Rating: "7.6/10"
    }
  ]
};

const genreNames = Object.keys(AllMovies);

export default function App() {
  const [movieList, setMovieList] = useState(AllMovies.Comedy);

  function genreClickHandler(genre) {
    const movies = AllMovies[genre];
    setMovieList(movies);
  }

  function getMoviePost(movies) {
    const title = movies.Title;
    const imageUrl = movies.Image;
    const desc = movies.Description;
    const rating = movies.Rating;
    const htmlOfList = (
      <li>
        <img alt="poster" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="emoji">
          🥔
        </span>{" "}
        Rotten Potatoes
      </h1>
      <h3>
        Rotten Potatoes is the most trusted measurement of quality for Movies.
        Find ratings and reviews for the newest movie!
      </h3>
      <div>
        {genreNames.map(function (genre) {
          return (
            <button
              className="btn"
              onClick={() => {
                genreClickHandler(genre);
              }}
              key={genre}
            >
              {" "}
              {genre}{" "}
            </button>
          );
        })}
      </div>

      <hr />

      <ul>
        {movieList.map((movies) => {
          return getMoviePost(movies);
        })}
      </ul>

      <footer></footer>
    </div>
  );
}
