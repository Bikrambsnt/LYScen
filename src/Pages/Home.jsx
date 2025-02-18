import {React, useState }  from "react";
import {Song,Artist,Trending} from '../components/index'


function Home({currentlyPlaying,setCurrentlyPlaying ,setShowProgressBar,setSongMetaData,setUseProgress,setProgress}) {
   


    return(
        <div>

           <Song
           currentlyPlaying={currentlyPlaying}
           setCurrentlyPlaying={setCurrentlyPlaying}
           setShowProgressBar={setShowProgressBar}
           setSongMetaData={setSongMetaData}
           setUseProgress={setUseProgress}
           setProgress={setProgress}
        

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