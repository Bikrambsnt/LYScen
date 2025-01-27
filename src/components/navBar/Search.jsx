import { useState, useCallback,useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery.trim() !== "") {
        setLoading(true);

        // const getSong = [searchSongsByQuery];
        try {
          const response = await searchSongsByQuery (searchQuery,40,1);
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

  // Scroll behaviour
    const checkScroll =() => {
      if(window.scrollY>0){
        setScrolled(true)
        
      }

      else{
        setScrolled(false)
      
      }
    }

    useEffect(()=>{
      window.addEventListener('scroll',checkScroll);

      return ()=>{ 
        window.removeEventListener('scroll' ,checkScroll);
      }
    },[scrolled])
  
  return (
   
    
    <div className="w-screen h-max  ">
      <div className={`sticky inset-0 w-full h-[85px] p-2 z-10 ${scrolled ? 'bg-black/60 backdrop-blur-md text-white' : 'bg-none'}`}>
      <div
        className={`relative w-full h-14 flex items-center  bg-[#636366] border-[1px] border-transparent focus-within:border-[#9c227c] rounded-[8px] shadow-searchShadow text-sm sm:text-xl transition-all duration-300`}
      >
        <button className="flex items-center"
        // Go back to root.
        onClick={()=> navigate('/')}>
          <FontAwesomeIcon icon={faArrowLeft} className="ml-[10px] text-lg text-white"/>

          
        </button>
        <input
          value={query}
          placeholder="What's playing in your mind?"
          type="text"
          onChange={handleInputChange}
          className="cursor-wait absolute left-9 outline-none bg-transparent font-poppins font-[400] text-sm tracking-wide text-white placeholder-white w-[80%]"
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
      </div>

     



      
      {loading && <ul>
        {Array.from({length:10}).map((_,index)=>(
          <li key={index}>
            <SkeletonSearch/>
          </li>
        ))}
        </ul>}

       

        {!loading && results.length ===0 && (
          <div className="w-full h-svh  flex items-center p-5">
            <span className="font-poppins font-bold text-center">  What's playing in your mind?
            <p className="font-jost font-normal  tracking-wide text-base text-center text-clip">Search for your favourite artist ,songs and many more</p> 
            </span> 
          </div>
        )}
      {!loading && results.length > 0 && (
        <div className="mt-1 p-2 h-screen">
          {/* <h3 className="text-lg mb-2 font-jost">Search Results for {`${query}`}</h3> */}
          <ul className="relative">
           {results.map((results)=>(
              <li key={results.id} className="h-14  p-2 mb-3 rounded w-full flex space-x-16 flex-row items-center">
                <span className="absolute left-3 w-12 h-12 rounded-[4px] border-[1px] border-[white]">
                <img 
                src={results.image[2]?.url}
                alt={results.name}
                className="h-full w-full object-cover"/>
                </span>
                <span className="w-full max-w-[75%]">
                <h3 className="font-[500] text-sm font-poppins whitespace-nowrap text-ellipsis overflow-hidden ">{results.name}</h3>
                <p className="font-light text-xs font-poppins whitespace-nowrap text-ellipsis overflow-hidden ">{results.artists.primary
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
