import React from 'react';
import { Toggle } from './Toggle';


const themes = ["theme1", "theme2", "theme3"];

export const ToggleSwitch = () => {


    return (
        <div className="container__toggle_switch">
            <section className='numberToggle'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </section>
            <section className='__toggle'>

                {
                    themes.map((item, index, array) => {
                        return (
                            <Toggle
                                key={item}
                                item={item}
                                array={array}
                            />
                        )
                    })
                }
            </section>
        </div>
    );
};
