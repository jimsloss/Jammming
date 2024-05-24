import React, {useState} from 'react';
import Track from '../track/track';
import '../track/track.css';

// response from spotify will contact list of tracks
   // const data = {
      
   //    1996: "Curb",
   //    1998: "The State",
   //    2001: "Silver Side Up",
   //    2003: "The Long Road",
   //    2005: "All the Right Reasons",
   //    2008: "Dark Horse",
   //    2011: "Here and Now",
   //    2014: "No Fixed Address",
   //    2017: "Feed the Machine"
   // }

// mock data

const data = {
   '01': {name: 'Rockstar', artist: 'Nickelback', album: 'All The Right Reasons', uri: 'https://open.spotify.com/track/3RlsVPIIs5KFhLFhxZ4iDF'},
   '02': {name: 'Rockstar', artist: 'Hardy', album: 'Rockstar', uri: 'https://open.spotify.com/track/5jhY1n1cTKSxx8lEujMcAS'},
   '03': {name: 'Rockstar (feat. 21 Savage)', artist: 'Post Malone', album: 'Beerbongs & Bentleys', uri: 'https://open.spotify.com/track/0e7ipj03S05BNilyu5bRzt'},
   '04': {name: 'Rockstar (feat. Roddy Ricch)', artist: 'DaBaby', album: 'Blame it on Baby', uri: 'https://open.spotify.com/track/7ytR5pFWmSjzHJIeQkgog4'},
   '05': {name: 'Rockstart', artist: 'Dappy', album: 'Bad Intentions', uri: 'https://open.spotify.com/track/7ddRUXqgMcPAMfmjDwXn7q'},
 }


// purpose: takes search input, returns matching songs

function TrackList(props) {

   const [track, setTrack] = useState({});


   function clickMe(e, data) {

      e.preventDefault();
      const name = data['name'];
      const artist = data['artist'];
      const album = data['album'];
      const uri = data['uri'];     

      props.setPlayListTracks((playListTracks) => ([
         ...playListTracks,
         [name+artist+album, name, artist, album]
       ]));

      props.setSpotifyUris((spotifyUris) => ([
         ...spotifyUris,
         uri
       ]));

   }

   return (
      
      <div >   
            {props.results==="" ? 
 
            <>

            {Object.keys(data).map((key, index) => (
               <>
               <div className="tracksFound" key={index}>
                  <Track song= {data[key]}/>
                  <form >
                     <button className = "trackButton" 
                         onClick={(e) => {
                           clickMe(e, data[key]);
                        }}> +
                     </button>
                  </form>
                </div>
                <hr className="hr2"/>
                </>
               ))}

            </>   
           
            : <h3>{props.results}</h3>}

      </div>
   )

}

export default TrackList;