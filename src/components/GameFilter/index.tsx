import { ChangeEvent, ReactElement } from "react";
import { PLATFORMS, GENRES, SORT_BY } from "./constants";
import { Form, Select } from "./styles";

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
  onGamesLoaded?: () => void;
}

const GameFilter = ({ onChange }: Props): ReactElement => {
  const handlePlatformChange = () => {
    const platformSelect = document.getElementById(
      "platform-select"
    ) as HTMLSelectElement;
    const selectedPlatform = platformSelect.value;

    const genreSelect = document.getElementById(
      "genre-select"
    ) as HTMLSelectElement;
    const fightingOption = genreSelect.querySelector(
      'option[value="fighting"]'
    ) as HTMLOptionElement;
    if (selectedPlatform === "pc") {
      fightingOption.disabled = false;
    } else {
      fightingOption.disabled = true;
    }
  };

  const handleGenreChange = () => {
    const platformSelect = document.getElementById(
      "platform-select"
    ) as HTMLSelectElement;
    const browserOption = platformSelect.querySelector(
      'option[value="browser"]'
    ) as HTMLOptionElement;
    const genreSelect = document.getElementById(
      "genre-select"
    ) as HTMLSelectElement;
    const selectedGenre = genreSelect.value;
    if (selectedGenre === "fighting") {
      browserOption.disabled = true;
    } else {
      browserOption.disabled = false;
    }
  };

  return (
    <Form onChange={onChange}>
      <label htmlFor="platform-select">
        <h1 style={{ textAlign: "center", fontSize: "0.875rem" }}>Platform:</h1>
        <Select
          name="platform"
          id="platform-select"
          onChange={handlePlatformChange}
        >
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </Select>
      </label>

      <label htmlFor="genre-select">
        <h1 style={{ textAlign: "center", fontSize: "0.875rem" }}>Genre:</h1>
        <Select name="genre" id="genre-select" onChange={handleGenreChange}>
          {GENRES.map((genre) => (
            <option
              key={genre.value}
              value={genre.value}
              disabled={genre.value === "fighting"}
            >
              {genre.display}
            </option>
          ))}
        </Select>
      </label>

      <label htmlFor="sortBy-select">
        <h1 style={{ textAlign: "center", fontSize: "0.875rem" }}>Sort By:</h1>
        <Select name="sortBy" id="sortBy-select">
          {SORT_BY.map((sortBy) => (
            <option key={sortBy.value} value={sortBy.value}>
              {sortBy.display}
            </option>
          ))}
        </Select>
      </label>
    </Form>
  );
};

export default GameFilter;
