import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Game } from "../../types";
import { API_HOST, API_KEY } from "../../components/GameList/constants";
import {
  Container,
  Description,
  Flex,
  Flex2,
  Img,
  Title,
  Details,
  DescriptionShort,
  OuterContainer,
  Button,
  ButtonContainer,
  Navigate,
} from "./styles";

type Props = {
  game: Game;
};

const GameDetail = ({ game }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <OuterContainer>
        <Container>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title>{game.title}</Title>
            <Navigate onClick={handleNavigate}>Database</Navigate>
          </div>
          <DescriptionShort>{game.short_description}</DescriptionShort>
          <Flex>
            <Img src={game.thumbnail} alt={game.title} />
            <Description>{game.description}</Description>
          </Flex>
          <Flex2>
            <Details>
              <span style={{ color: "#fff" }}>Release Date:</span>{" "}
              {game.release_date}
            </Details>
            <Details>
              <span style={{ color: "#fff" }}>Publisher:</span> {game.publisher}
            </Details>
            <Details>
              <span style={{ color: "#fff" }}>Genre:</span> {game.genre}
            </Details>
          </Flex2>
          <ButtonContainer>
            <Button>Play it Now</Button>
          </ButtonContainer>
        </Container>
      </OuterContainer>
    </>
  );
};

const useFetchGame = (gameId: string): Game | null => {
  const [game, setGame] = React.useState<Game | null>(null);

  React.useEffect(() => {
    axios
      .get(`/game?id=${gameId}`, {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
      })
      .then((response) => setGame(response.data))
      .catch((error) => console.error(error));
  }, [gameId]);

  return game;
};

const GameDetailContainer = () => {
  const { gameId } = useParams();

  if (!gameId) {
    return <div>Game ID not provided</div>;
  }

  const game = useFetchGame(gameId);

  if (!game) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return <GameDetail game={game} />;
};

export default GameDetailContainer;
