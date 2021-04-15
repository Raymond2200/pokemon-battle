import React from 'react';

function Pikachu(props) {
  return (
      <div>
        <h1>HP: {props.pikahp}</h1>
        <img alt="" src="https://pokestop.io/img/pokemon/pikachu-256x256.png" />
        <br />
        <button onClick={() => props.attack("pika")}>Attack</button>
      </div>
  );
}

export default Pikachu;