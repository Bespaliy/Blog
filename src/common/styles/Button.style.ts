import styled from "styled-components";

export const ButtonStyle = styled.button`
    height: 60px;
    width: 300px;
    border-radius: 20px;
    background-color: #EF4F4F;
    color: #fff;
    font-size: 1em;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .5s;
    box-shadow: 0 6px 0 #BB1542;
    &.active {
        box-shadow: none;
        transform: translateY(6px);
    }
`;