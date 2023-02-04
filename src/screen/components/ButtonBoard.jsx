import React from 'react'

export const ButtonBoard = ({item,onclick}) => {


  return (
      <button
      onClick={onclick}
      type='button'>
          {
              item
          }
      </button>
  );
};
