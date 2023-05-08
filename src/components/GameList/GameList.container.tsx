import React, { ReactElement, useCallback } from "react";
import GameListRender from "./GameList.Render";
import useFetch from "../../hooks/useFetch";
import { Filter } from "./types";

const GameList = (): ReactElement => {
  const [filter, setFilter] = React.useState<Filter>({
    platform: "browser",
    sortBy: "relevance",
  });
  const { games, error } = useFetch(filter);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);

  return (
    <GameListRender err={error} games={games} onFilterChange={onFilterChange} />
  );
};

export default GameList;
