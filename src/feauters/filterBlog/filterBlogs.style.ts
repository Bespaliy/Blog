import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 600px;
  height: 300px;
  background-color: white;
  padding: 20px;
  & input {
    display: block;
    width: 30%;
  }
`

export const FilterCheckbox = styled.div`
  display: flex;
  margin-top: 23px;
  & input {
    width: 10%;
  }
`