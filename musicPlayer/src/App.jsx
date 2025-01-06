import './App.css'
import SearchBar from './components/navBar/Search'
import Artists from './components/Artists'
import Songs from './components/Songs'
import Logo from './components/navBar/Logo'


function App() {
  return (
    <div className=' w-screen h-screen  bg-[#1f1f1f]'>
      <div className='flex justify-between items-center p-2 overflow-hidden'>
      <Logo/>
      <SearchBar/> 
     
      </div>
     
     <div className='overflow-visible w-screen p-2'>
     <Artists/>
     </div>

     <div className='w-screen p-2'>
      <Songs/>
     </div>


     
    </div>
  

   
  )
}

export default App
