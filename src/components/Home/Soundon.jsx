import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserProfile = () => {
  const [token, setToken] = useState('');
  const [profile, setProfile] = useState({});
  const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

    const getParamsFromHash = (hash) => {
      const hashContent = hash.substr(1);
      const paramsSplit = hashContent.split('&');
      let params = {};
      let values = [];
      paramsSplit.forEach((param) => {
        values = param.split ('=');
        params[values[0]] = values[1];
      })
    return params;
  }

  const getData = async (endpoint, seFunction) => {
    await axios.get(endpoint, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then( response => {
        seFunction(response.data);  
        console.log(response.data);
    }).catch( error => {
        console.log(error);
    })
}

  useEffect(() => {
      setToken(localStorage.getItem('token'));
  }, [token]);

  useEffect (() => {
    if(window.location.hash){
        const hash = window.location.hash;
        const tokens = getParamsFromHash(hash);
        localStorage.setItem('token', tokens.access_token);
        setToken(tokens.access_token);
        window.history.pushState({}, null, '/soundon')
    }
      getData(PROFILE_ENDPOINT, setProfile);
  }, []);

    return (
      <div className='flex flex-col bg-zinc-900 h-screen w-full bg-gradient-to-t items-center justify-center from-gray-700 via-gray-900 to-black'>
        {
          profile.display_name && profile.images && profile.followers.total && profile.uri && 
          <div class="flex flex-col h-screen w-full">
            <header 
              className='flex flex-cols-2 w-full h-72 text-base gap-10 items-center mt-20
                          bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400'
            >
              <div class="flex object-center h-full w-[400px] items-center justify">
                <img className='flex w-[240px] ml-24 h-64 object-center rounded-full' src={profile.images[0].url} alt='profile img'/>
              </div>
              <div class="flex flex-col h-fit w-2/3 items-left object-left">
                  <h1 
                    class="flex text-blue-600 font-bold"
                  > 
                      Hello 👋 This is your
                      <a 
                        href="https://open.spotify.com/user/berkink%C4%B1nay?si=308c415b81b84cda" 
                        class="text-green-400 font-semibold ml-1 mr-1 hover:text-white"
                        rel="noreferrer" 
                        target="_blank"
                      > 
                        Spotify 
                      </a> click here to follow him 🥰
                        profile 
                  </h1>
                  <h2 className='text-white font-bold'>
                    your account name: {profile.display_name} 🙂
                  </h2>
                  <div class="flex text-gray-700 font-bold w-fit h-fit text-base text-white">
                    your followers: {profile.followers.total} 💫
                  </div>
                  <div class="flex font-bold text-black"> if you want to follow this GitHub repository's developer on    
                    <a 
                      href="https://open.spotify.com/user/berkink%C4%B1nay?si=308c415b81b84cda" 
                      class="text-green-400 font-semibold ml-1 mr-1 hover:text-white"
                      rel="noreferrer" 
                      target="_blank"
                    > 
                      Spotify 
                    </a> click here to follow him 🥰
                  </div>
              </div>
          </header>
          <div class='flex w-full h-screen items-center justify-center'>
            <h1 class="font-bold text-2xl text-white">SPOTIFY USER LOGIN DEMO</h1>
          </div>
        </div>
       }
      </div>
  )
}

export default UserProfile;
