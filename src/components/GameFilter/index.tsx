import { ChangeEvent, ReactElement } from "react";
import { PLATFORMS, GENRES, SORT_BY } from "./constants";
import { Form, Select } from "./styles";

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
  onGamesLoaded?: () => void;
}

const GameFilter = ({ onChange }: Props): ReactElement => (
  <Form onChange={onChange}>
    <label htmlFor="platform-select">
      <h1 style={{ textAlign: "center", fontSize: "0.875rem" }}>Platform:</h1>
      <Select name="platform" id="platform-select">
        {PLATFORMS.map((platform) => (
          <option key={platform.value} value={platform.value}>
            {platform.display}
          </option>
        ))}
      </Select>
    </label>

    <label htmlFor="genre-select">
      <h1 style={{ textAlign: "center", fontSize: "0.875rem" }}>Genre:</h1>
      <Select name="genre" id="genre-select">
        {GENRES.map((genre) => (
          <option key={genre.value} value={genre.value}>
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

export default GameFilter;
