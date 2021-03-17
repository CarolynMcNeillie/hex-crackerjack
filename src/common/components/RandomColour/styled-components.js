import styled from "styled-components";

export const ColourContainer = styled.main`
  background-color: ${(props) => props.color};
  color: ${(props) => props.contrast};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s background-color ease-in-out;
`;
