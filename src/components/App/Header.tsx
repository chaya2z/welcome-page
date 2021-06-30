import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
    return <HeaderContainer>chaya2z.github.io</HeaderContainer>;
};

const HeaderContainer = styled.div`
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 4rem;
    background-color: darkolivegreen;
    color: aliceblue;
    font-size: 48px;
`;
