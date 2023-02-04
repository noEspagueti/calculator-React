import React from 'react';
import { Screen } from './screen/Screen'
import { Header } from './header/Header'

export const App = () => {
    return (
        <main className='__container'>
            <Header />
            <Screen />
        </main>
    );
};
