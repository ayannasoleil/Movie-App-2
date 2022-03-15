import React from 'react'

export const Controls = ({movie, type}) => {
  return (
  <div className='innner-card-controls'>
    {type === 'favorites' && (
      <>
      <button className="ctrl btn">
        <i className="fa-fw far fa-eye"></i>
        </button>
      <button className="ctrl btn">
        <i className="fa-fw far fa-times"></i>
        </button>
        </>
    )}
    </div>
  );
};
