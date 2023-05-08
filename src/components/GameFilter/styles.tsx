import styled from "styled-components";
import { backgroundColor, secondaryTextColor } from "../../styles/theme";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 542px;
  padding: 0 16px;
  margin: 24px auto;
  color: ${secondaryTextColor};
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 0;
  color: white;
  background-color: ${backgroundColor};
`;
