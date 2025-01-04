import './App.css'
import SearchBar from './components/navBar/Search'
import Artists from './components/Artists'
import Songs from './components/Songs'


function App() {
  return (
    <div className=' w-screen h-screen  bg-[#1f1f1f]'>
      <div className='flex justify-end items-center p-5 overflow-hidden'>
      <SearchBar/> 
     
      </div>
     
     <div className='overflow-visible w-screen p-3 '>
     <Artists/>
     </div>

     <div className='w-screen p-3'>
      <Songs/>
     </div>


     
    </div>
  

   
  )
}

export default App
