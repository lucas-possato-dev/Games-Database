import { ReactElement } from "react";
import { Game } from "../../types";
import {
  StyledLink,
  Img,
  Title,
  Details,
  Description,
  Genre,
  Icon,
} from "./styles";
import { BROWSER, WINDOWS } from "./constants";
import WindowsIcon from "../../assets/windows.svg";
import BrowserIcon from "../../assets/browser.svg";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  const icons = platform.split(",").map((p) => {
    let icon = null;
    switch (p.trim()) {
      case WINDOWS:
        icon = (
          <Icon key={`${id}-browser`} alt="browser icon" src={WindowsIcon} />
        );
        break;
      case BROWSER:
        icon = (
          <Icon key={`${id}-windows`} alt="windows icon" src={BrowserIcon} />
        );
        break;
      default:
        break;
    }
    return icon;
  });

  const link = `/game/${id}`;

  return (
    <StyledLink to={link}>
      <Img src={thumbnail} alt={`${title} logo`} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        {icons}
      </Details>
    </StyledLink>
  );
};

export default GameCard;
