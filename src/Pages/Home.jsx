import {React, useState }  from "react";
import {Song,Artist,Trending} from '../components/index'


function Home({currentlyPlaying,setCurrentlyPlaying ,setShowProgressBar,setSongMetaData,setUseProgress,setProgress,setDuration,setCurrentTime}) {
   


    return(
        <div>

           <Song
           currentlyPlaying={currentlyPlaying}
           setCurrentlyPlaying={setCurrentlyPlaying}
           setShowProgressBar={setShowProgressBar}
           setSongMetaData={setSongMetaData}
           setUseProgress={setUseProgress}
           setProgress={setProgress}
           setDuration={setDuration} 
           setCurrentTime={setCurrentTime}
        

           />
           <Trending currentlyPlaying={currentlyPlaying}
           setCurrentlyPlaying={setCurrentlyPlaying}
           setShowProgressBar={setShowProgressBar}
           setSongMetaData={setSongMetaData}
           setProgress={setProgress}
           setDuration={setDuration} 
           setCurrentTime={setCurrentTime}
           />
           <Artist/>

        </div>
    )
}
export default Home;