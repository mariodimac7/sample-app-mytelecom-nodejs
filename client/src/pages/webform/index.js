import React, { useState } from 'react';
import Webformform from './webformform';

function Webform() {
  const getData = (data) => {
    console.log('Child', data);
  };
  return (
    <div>
      <Webformform onSubmit={getData} />
    </div>
  );
}
export default Webform;
