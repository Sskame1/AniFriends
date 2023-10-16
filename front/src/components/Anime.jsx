import React, { useState, useEffect } from "react";

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v3/top/anime/1");
        const data = await response.json();
        setAnimeList(data.top);
      } catch (error) {
        console.log("Error fetching anime list:", error);
      }
    };

    fetchAnimeList();
  }, []);

  return (
    <div>
      <h2>Anime List</h2>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.mal_id}>
            <img src={anime.image_url} alt={anime.title} />
            <div>
              <h3>{anime.title}</h3>
              <p>Rank: {anime.rank}</p>
              <p>Score: {anime.score}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;