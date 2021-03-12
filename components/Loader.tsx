import React from 'react';

import Ellipsis from '../components/Ellipsis'

const Loader = ({ color, size }) => {
  return (
    <div>
      <Ellipsis color={color} size={size} /> 
    </div> 
  ); 
}

export default Loader;
 