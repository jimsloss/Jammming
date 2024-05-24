import React, {useState, useEffect} from 'react';
import PlayList from '../playList/playList';
import { json, useParams } from 'react-router-dom';

const CLIENT_ID = process.env.REACT_APP_API_KEY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';  // the authorise endpoint
const RESPONSE_TYPE = "token";    
let token
let expiry
let other


function GetAccessToken(){

    /*
      The access token is valid for 1 hour (3600 seconds). After which it expires and will need to request a new one.
      Set up a variable for the expiration time and configure the access token to expire at the appropriate time.
    */

  // Request Authorisation to access data: 

  let url = AUTH_ENDPOINT;
  url += `?response_type=${RESPONSE_TYPE}`;
  url += `&client_id=${CLIENT_ID}`;             
  url += `&redirect_uri=${REDIRECT_URI}`;       

  const saveToSpotify = async () => {

    //e.preventDefault();

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });

    try {
        if (response.ok) {
            const returnedValue = await response.json();
            token = returnedValue['access_token'];
            other= returnedValue['expires_in'];
        }
    }
    catch (error) {
        throw (error)
    }
  }

  saveToSpotify();

  
  return token

}


  /*    

    spotify: display scopes and prompt user log in if required

    user: log in, authorise access

    redirect user to my application, passing access token

        need:
          access_token
          token_type
          expires_in
          state
    
    user access token in requests to Web API

      send: access_token
      returns: JSON object

    const [token, setToken] = useState('');



/**
 * 
 * The response from above will return an access token valid for 1 hour:

{
  "access_token": "BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11",
  "token_type": "Bearer",
  "expires_in": 3600
}
 */

// logic for making requests

/*
   Use the Implicit Grant Flow to set up a user’s account and make requests.
   The implicit grant flow returns a user’s token in the URL.
   From the URL, you should extract the access token values and set them up in your app. 
   
   Clear parameters from the URL to avoid issues with expired access tokens.
 
   You may encounter errors if the access token is not in the URL. 
   It can happen if the user has not logged in and granted your app access to their Spotify account yet. 
   Handle these errors appropriately.
 */

/*
  async function getProfile(accessToken) {
  let accessToken = localStorage.getItem('access_token');

  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
}
 * 
 */


export default GetAccessToken;