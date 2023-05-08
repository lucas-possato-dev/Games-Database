import React from "react";
import axios from "axios";
import { Game } from "../../types";
import { Filter } from "../../components/GameList/types";
import { API_HOST, API_KEY } from "../../components/GameList/constants";
type Response = {
  games: Game[];
  error?: string;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [err, setErr] = React.useState<string>("");
  const { platform, genre, sortBy } = params;

  React.useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
        params: {
          platform,
          category: genre,
          "sort-by": sortBy,
        },
      })
      .then((response) => setGames(response.data))
      .catch((error) => setErr(error.message));
  }, [platform, genre, sortBy]);

  return {
    games,
    error: err,
  };
};

export default useFetch;
