import React from "react";
import styled from "styled-components";

export const Main: React.FC = () => {
    return (
        <ContentsContainer>
            <ContentContainer>
                <div>
                    <ContentName>Name</ContentName>
                    <p>Nakano Taisuke</p>
                </div>
                <div>
                    <ContentName>職業</ContentName>
                    <p>学生</p>
                </div>
                <div>
                    <ContentName>Links</ContentName>
                    <ul>
                        <li>
                            <a href="https://twitter.com/chaya2z">Twitter</a>
                        </li>
                        <li>
                            <a href="https://github.com/chaya2z">GitHub</a>
                        </li>
                        <li>
                            <a href="https://chayanika.netlify.com/">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ContentName>資格</ContentName>
                    <p>基本情報技術者試験 合格</p>
                </div>
                <div>
                    <ContentName>興味のある分野</ContentName>
                    <ul>
                        <li>サーバ</li>
                        <li>仮想化技術</li>
                        <li>ネットワーク自動化</li>
                    </ul>
                </div>
            </ContentContainer>
        </ContentsContainer>
    );
};

const ContentsContainer = styled.div`
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
`;

const ContentContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
`;

const ContentName = styled.h2`
    margin-top: 3rem;
    background-color: darkolivegreen;
    color: aliceblue;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
`;
