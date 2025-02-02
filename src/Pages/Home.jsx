import {React, useState }  from "react";
import {Song,Artist,Trending} from '../components/index'


function Home({currentlyPlaying,setCurrentlyPlaying ,setShowProgressBar}) {
   


    return(
        <div>

           <Song
           currentlyPlaying={currentlyPlaying}
           setCurrentlyPlaying={setCurrentlyPlaying}
           setShowProgressBar={setShowProgressBar}
           />
           <Trending currentlyPlaying={currentlyPlaying}
           setCurrentlyPlaying={setCurrentlyPlaying}
           setShowProgressBar={setShowProgressBar}
           />
           <Artist/>

        </div>
    )
}
export default Home;