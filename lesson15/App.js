import { useState } from "react";
import TrendingList from "./TrendingList.js";

export default function App() {
  const movieArray = [
    {
      title: "Top Gun: Maverick",
      releaseYear: 2022,
      imageUrl: "https://m.media-amazon.com/images/I/71JXK7v7pvL._AC_UF894,1000_QL80_.jpg",
      description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it."
    },
    {
      title: "Train to Busan",
      releaseYear: 2016,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg",
      description: "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan."
    },
    {
    title: "Jumanji: Welcome to the Jungle",
    releaseYear: 2017,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    description: "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game."
    },
    {
      title: "Inside Out",
      releaseYear: 2015,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOChzbAVxomR8C_1Lwz_wrlssxRFd_lVWtA&s",
      description: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school."
    }
  ];
  const [movieData, setMovieData] = useState(movieArray);

  return <div><TrendingList movies={movieData} /></div>;
}
