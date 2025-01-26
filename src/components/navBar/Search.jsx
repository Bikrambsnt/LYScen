import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { searchSongsByQuery, globalSearch } from "../../config/fetch";
import { debounce } from "lodash";
import {  useNavigate } from "react-router-dom";
import SkeletonSearch from "../UI/skeleton/SkeletonSearch";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]); // Store search results
  const navigate = useNavigate()

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery.trim() !== "") {
        setLoading(true);

        // const getSong = [searchSongsByQuery];
        try {
          const response = await searchSongsByQuery (searchQuery,15,1);
            if(response.success){
                const data =response.data.results || []
                console.log("Search Results:", data); // Replace with your result handling logic
                setResults(data); // Assuming results are arrays from each API call
            }

           


        } catch (error) {
          console.error("Error fetching songs:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("Enter the input");
      }
    }, 500), // Adjust debounce time in milliseconds
    []
  );

  // Handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value); // Trigger the debounced search
 
  };
  

  const clearInput=  ()=> {
      setQuery('');
      setResults([])
  }

  
  return (
   
    
    <div className="w-screen h-max  p-2">
      <div
        className={` relative w-full h-14 flex items-center  bg-[#636366] border-[1px] border-transparent focus-within:border-[#9c227c] rounded-[8px] shadow-searchShadow text-sm sm:text-xl transition-all duration-300`}
      >
        <button className="flex items-center"
        // Go back to root.
        onClick={()=> navigate('/')}>
          <FontAwesomeIcon icon={faArrowLeft} className="ml-3 text-lg text-white"/>

          
        </button>
        <input
          value={query}
          placeholder="What's playing in your mind?"
          type="text"
          onChange={handleInputChange}
          className="absolute left-9 outline-none bg-transparent font-poppins font-[400] text-sm tracking-wide text-white placeholder-white w-[80%]"
        />

      { query && ( //Display if its input has a value...
        <button
          onClick={clearInput}
          className=" bg-transparent absolute right-4 flex items-center"
        >
          <FontAwesomeIcon icon={faMultiply} className="text-lg text-white"  />
        </button>
)}
      </div>

     



      
      {loading && <ul>
        {Array.from({length:10}).map((_,index)=>(
          <li key={index}>
            <SkeletonSearch/>
          </li>
        ))}
        </ul>}

          
      {!loading && results.length > 0 && (
        <div className="mt-4 ">
          {/* <h3 className="text-lg mb-2 font-jost">Search Results for {`${query}`}</h3> */}
          <ul className="">
           {results.map((results)=>(
              <li key={results.id} className="h-14  p-2 mb-3 rounded w-full flex space-x-5 items-center">
                <span className=" w-12 h-12 rounded-[4px] border-[1px] border-[white]">
                <img 
                src={results.image[2]?.url}
                alt={results.name}
                className="h-full w-full object-cover"/>
                </span>
                <span className="">
                <h3 className="font-[500] text-sm font-poppins ">{results.name}</h3>
                <p className="font-light text-xs font-poppins ">{results.artists.primary
                .map((artists)=> artists.name)
                .join(',')}</p>
                </span>
            </li>
           ))}
          </ul>
        </div>
      )} 
      

      
    </div>
   
  );
}

export default SearchBar;
