import { ChangeEvent, ReactElement, useState } from "react";
import { Game } from "../../types";
import GameCard from "../GameCard/GameCard";
import { List, ListItem } from "./styles";
import GameFilter from "../GameFilter";

interface Props {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
  const [loading, setLoading] = useState(true);

  if (err) {
    return <p>Unable to fetch games</p>;
  }

  const handleGamesLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      <GameFilter onChange={onFilterChange} onGamesLoaded={handleGamesLoaded} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
      {loading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default GameList;
