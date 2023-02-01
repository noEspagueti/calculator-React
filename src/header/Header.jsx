import React from 'react';
import { ToggleSwitch } from './components/ToggleSwitch';

export const Header = () => {
    return (
        <section className='__header'>
            <div className="title">
                <h1>calc</h1>
            </div>
            <div className="content__togle">

                <div className="title__theme">
                    <p>THEME</p>
                </div>
                <ToggleSwitch />
            </div>
        </section>
    );
};
