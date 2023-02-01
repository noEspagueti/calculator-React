import React from 'react';
import { Screen } from './screen/Screen'
import { Header } from './header/Header'
import { Board } from './board/Board'
export const App = () => {
    return (
        <main className='__container'>
            <Header />
            {/* <Screen />
            <Board /> */}
        </main>
    );
};
