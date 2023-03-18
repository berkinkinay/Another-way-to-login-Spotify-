import React from 'react'
import { CLIENT_ID,
         SPOTIFY_AUTHORIZE_ENDPOINT,
         REDIRECT_URL_AFTER_LOGIN,
         SCOPE,
} from '../auth'

export default function Login() {
    const handleLogin = () => {   
       window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE.join(
        "")
      }&response_type=token&show_dialog=true`;
    }
    return (
      <div className='flex flex-col h-screen w-full bg-black text-white items-center justify-center'> 
          <h1>Login with Spotify</h1>
          <button onClick={() => handleLogin ()} className="flex">Login</button>
      </div>
    )
  }


