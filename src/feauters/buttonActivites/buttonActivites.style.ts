import styled from "styled-components";

export const ButtonWraper = styled.button`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 50px;
  padding: 0;
  background-color: unset;
  background-repeat: no-repeat;
  & svg {
    fill: white;
    stroke: black;
    stroke-width: 40px;
    width: 1.1em;
  }
  & svg:active {
    fill: red;
    stroke: none;
    stroke-width: 0;
  }
`