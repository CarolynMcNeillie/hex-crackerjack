import styled from "styled-components";

export const SwatchButton = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  margin: 10px;

  &:focus {
    outline: 2px solid black;
  }
`;
