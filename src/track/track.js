import React, { useState } from 'react';


//Takes a track and formats it
function Track(props) {

   // const key = props.data[props.key]['name'];
   // const data = props.data;

   return (
      <div className="track">
       
         <h2>{props.song['name']}</h2>
         <h3 className='subs'>{props.song['artist']}, {props.song['album']}</h3>
      </div>
   );
}

export default Track;