import React from 'react';

function Charzard(props) {
  return (
      <div>
        <h1>HP: {props.charhp}</h1>
        <img alt="" src="https://pokestop.io/img/pokemon/charizard-256x256.png" />
        <br />
        <button onClick={() => props.attack("char")}>Attack</button>
      </div>
  );
}

export default Charzard;