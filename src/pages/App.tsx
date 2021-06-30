import React from "react";
import { Header } from "../components/App/Header";
import {Main} from "../components/App/Main";

export const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
};
