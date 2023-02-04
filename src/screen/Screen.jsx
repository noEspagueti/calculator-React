import React from 'react';
import { Input } from './components/Input';
import { Board } from './Board'

export const Screen = () => {
  return (
    <>
      <section className='__screen'>
        <Input />
      </section>
      <Board />
    </>
  );
};
