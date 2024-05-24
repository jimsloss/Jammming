import React, {useState} from 'react';
import './playList.css';
import TrackList from '../trackList/trackList';
import GetAccessToken from '../accessToken/accessToken';
import { json } from 'react-router-dom';

function PlayList(props) {

   const data = props.playListTracks;
   const [playListTitle, setPlayListTitle] = useState(''); 
   const [token, setToken] = useState('sample token');
   const [expiry, setExpiry] = useState(360000);

   // This will be function for remove button

   //const date = new Date();

   function removeItem(e, id) {
      e.preventDefault();
      props.setPlayListTracks((data) =>
         data.filter((item) => item[0] !== id)
      );
   };

   const addPlaylistTitle = (e) => {
      e.preventDefault();
      setPlayListTitle(e.target.value);
    };

    function saveToSpotify(e) {
      e.preventDefault();
      setToken(<GetAccessToken />)
    }

    

   return (

      <>
      <div className="playListArea">
         <input type="text" className="playListName" placeholder="ENTER PLAYLIST NAME" onChange={addPlaylistTitle}/>
         <hr/> 
          {props.tracks==="" ? 
      
            <h3>No Tracks Added</h3> : 
            <>
            <table className ="playlistTable">
              <thead>
                  <tr>
                     <th>Name</th> <th>Artist</th><th>Album</th>
                  </tr>
               </thead>
               <tbody>
                  {Object.keys(data).map((key, index) => (
                     <tr 
                    
                        key={index}>
                        <td>{data[key][1]}</td>
                        <td>{data[key][2]}</td>
                        <td>{data[key][3]}</td>
                           <td>
                              <form >
                                 <button className = "trackButton" 
                                    onClick={(e) => {
                                       removeItem(e, data[key][0]);
                                    }}
                                    >-</button>
                              </form>
                           </td>
                     </tr>
                  ))}
               </tbody>
            </table>
            </>
         }
       </div>
            
       <button className="spotifyButton" onClick={saveToSpotify}>Save To Spotify</button>;

       <h3>Expires in: {token} seconds</h3>
       

      </>
   );
      
   
}


export default PlayList;


