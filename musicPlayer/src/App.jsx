import "./App.css";
import {Header,Artist,Song,Trending,ProgressBar} from './components/index'


function App() {
  return (
    <div className=" w-screen h-max bg-[#1f1f1f]">
    <Header/>
    <Artist/>
    <Song/>
    <Trending/>
    {/* <ProgressBar/> */}
    
     

    
     
    </div>
  );
}

export default App;
