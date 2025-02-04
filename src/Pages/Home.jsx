import {React, useState }  from "react";
import {Song,Artist,Trending} from '../components/index'


function Home({currentlyPlaying,setCurrentlyPlaying ,setShowProgressBar,setSongMetaData}) {
   


    return(
        <div>

           <Song
           currentlyPlaying={currentlyPlaying}
           setCurrentlyPlaying={setCurrentlyPlaying}
           setShowProgressBar={setShowProgressBar}
           setSongMetaData={setSongMetaData}

           />
           <Trending currentlyPlaying={currentlyPlaying}
           setCurrentlyPlaying={setCurrentlyPlaying}
           setShowProgressBar={setShowProgressBar}
           setSongMetaData={setSongMetaData}
           />
           <Artist/>

        </div>
    )
}
export default Home;