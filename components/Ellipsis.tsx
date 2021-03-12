import React from 'react';

const Ellipsis = ({ color, size }) => { 
  return (
    <div className='rcs-ellipsis'>
      <div style={{ backgroundColor: color, width: size, height: size }}/> 
      <div style={{ backgroundColor: color, width: size, height: size }}/> 
      <div style={{ backgroundColor: color, width: size, height: size }}/> 
    </div>  
  ); 
}

export default Ellipsis; 
