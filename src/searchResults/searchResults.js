import React, { useState } from 'react';
import './searchResults.css';
import '../trackList/trackList.css';

import PlayList from '../playList/playList';
import TrackList from '../trackList/trackList';

function SearchResults(props) {

   const [spotifyUris, setSpotifyUris] = useState([]);
   const [playListTracks, setPlayListTracks] = useState([]);   
   
   return (
      
      <section className="resultsArea">
         
         {/* Results of Search */}
         
         <div className="results">
            
            <h1>Search Results </h1>
            <hr/>
                        
            {/* get list of tracks */}
            <TrackList results={props.results} playListTracks={playListTracks} setPlayListTracks = {setPlayListTracks}
            spotifyUris={spotifyUris} setSpotifyUris={setSpotifyUris}/>

         </div>

         {/* Playlist */}

         <div className="playlistArea">
         
         <PlayList playListTracks = {playListTracks} setPlayListTracks = {setPlayListTracks} 
         spotifyUris={spotifyUris}/>


         </div> 

         </section>
      
   );
}

export default SearchResults;