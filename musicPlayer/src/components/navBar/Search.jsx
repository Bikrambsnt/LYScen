import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { searchSongsByQuery,globalSearch} from "../../config/fetch";


function SearchBar() {

    const [query ,setQuery] = useState('');


  
    const handleSearch = async () => {
       
        if(query.trim() !==''){

            const getSong= [
                searchSongsByQuery,
               globalSearch
            ];
            return await Promise.all(
                getSong.map((song)=>song(query))
            );
           
        }

        else{
            console.log('Enter the input');
        }

    };

    return(
        <div
         className={` w-[98%] h-10 flex items-center justify-evenly bg-[#636366] border-[1px] border-transparent focus-within:border-[#9c227c] rounded-[8px] shadow-searchShadow text-sm sm:text-xl transition-all duration-300 `}
        
        >
        
       
            <input
            value={query}
            placeholder="Search..."
            type="text"
            onChange={ (e) => setQuery(e.target.value)}
            className="outline-none bg-transparent text-white placeholder-white w-[80%]"
            />
        
       
        

        <button
       
        onClick={()=>{
            
                handleSearch();
                setQuery('');
            

            
        }}
        className=" text-white bg-transparent "

        >
        <FontAwesomeIcon icon={faSearch} className='flex text-lg'/>
        </button>
        
        </div>
    )

}

export default SearchBar;