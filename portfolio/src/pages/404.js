import React from "react";
import styled from "styled-components";

export default function About() {
    return (
        <Wrap>
            존재하지 않는 페이지입니다.
        </Wrap>
    )
};

const Wrap = styled.div`
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
`;