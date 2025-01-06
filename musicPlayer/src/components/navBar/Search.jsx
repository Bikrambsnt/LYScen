import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { searchSongsByQuery,globalSearch} from "../../config/fetch";


function SearchBar() {

    const [query ,setQuery] = useState('');

    const [isExpended, setIsExpended] = useState(false);

  
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
         className={`max-w-80 flex items-center justify-center bg-[#636366] rounded-full shadow-searchShadow text-sm sm:text-xl transition-all duration-300 ${isExpended ? 'w-full h-12 px-4' : 'w-12 h-12'}`}
        
        >
        
        {isExpended &&(
            <input
            value={query}
            placeholder="Search..."
            type="text"
            onChange={ (e) => setQuery(e.target.value)}
            className="flex-grow  outline-none bg-transparent text-white placeholder-white p-2 w-[150px]"
            />
        )}
       
        

        <button
       
        onClick={()=>{
            if(isExpended){
                handleSearch();
            }
            setIsExpended(!isExpended);
        }}
        className=" text-white bg-transparent"

        >
        <FontAwesomeIcon icon={faSearch} className='flex   text-white text-lg'/>
        </button>
        
        </div>
    )

}

export default SearchBar;