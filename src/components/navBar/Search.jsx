import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { searchSongsByQuery } from "../../config/fetch";
import { debounce} from "lodash";
import { useNavigate } from "react-router-dom";
import SkeletonSearch from "../UI/skeleton/SkeletonSearch";
import { useAudioProvider } from "../../hook/useAudioProvider";

function SearchBar({ currentlyPlaying, setCurrentlyPlaying }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]); // Store search results
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { playSong } = useAudioProvider(
    null,
    setCurrentlyPlaying,
    currentlyPlaying
  );
// to store recently searched history
  const [recentlySearched , setRecentlySearched] = useState([])

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery.trim() !== "") {
        setLoading(true);

        // const getSong = [searchSongsByQuery];
        try {
          const response = await searchSongsByQuery(searchQuery, 40, 1);
          if (response.success) {
            const data = response.data.results || [];
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

  const clearInput = () => {
    setQuery("");
    setResults([]);
  };

  // Scroll behaviour
  const checkScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [scrolled]);

  //play song on click and store recently search hisory
  const startPlay = (result) => {
    playSong(result.downloadUrl[4]?.url);
    
    //retrive the store data
    let recentlySearched = JSON.parse(localStorage.getItem('id') || []);
    recentlySearched = recentlySearched.filter( song => song.id !== result.id) //to handle dublicate
    recentlySearched.unshift(result) //placed on top the last one clicked (LIFO)
    recentlySearched=recentlySearched.slice(0,100) //keep till 100 Recently search..
    // Store the recently searched song... on key :recentlySearch
     localStorage.setItem('id' , JSON.stringify(recentlySearched))
      // console.log("The second saved Data" , recentlySearched);
      
      //Updating the state
      setRecentlySearched(recentlySearched)

    };

    //update the changes
    useEffect (()=>{
      const savedData = JSON.parse(localStorage.getItem('id') || [])
      setRecentlySearched(savedData)
      
    },[])
    
    //Clear recently search songs single
    const clearRecentlySearch = (result) =>{
      const removeSong = recentlySearched.filter(songs=> songs.id !== result.id);
      localStorage.setItem('id' ,JSON.stringify(removeSong))
      setRecentlySearched(removeSong)
    }

    //Clear all Recently search items
    const clearAll=() =>{
     localStorage.setItem('id', JSON.stringify([]))
      setRecentlySearched([])
    }
    
  return (
    <div className="w-screen h-max  ">
      <div
        className={`sticky inset-0 w-full h-[85px] p-2 z-10 ${
          scrolled ? "bg-black/70 backdrop-blur-sm text-white" : "bg-none"
        }`}
      >
        <div
          className={`relative w-full h-14 flex items-center  bg-[#636366] border-[1px] border-transparent focus-within:border-[#9c227c] rounded-[8px] shadow-searchShadow text-sm sm:text-xl transition-all duration-300`}
        >
          <button
            className="flex items-center"
            // Go back to root.
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="ml-[10px] text-lg text-white"
            />
          </button>
          <input
            value={query}
            placeholder="What's playing in your mind?"
            type="text"
            onChange={handleInputChange}
            className="cursor-wait absolute left-9 outline-none bg-transparent font-poppins font-[400] text-sm tracking-wide text-white placeholder-white w-[80%]"
          />

          {query && ( //Display if its input has a value...
            <button
              onClick={clearInput}
              className=" bg-transparent absolute right-4 flex items-center"
            >
              <FontAwesomeIcon
                icon={faMultiply}
                className="text-lg text-white"
              />
            </button>
          )}
        </div>
      </div>

      {loading && (
        <ul>
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <SkeletonSearch />
            </li>
          ))}
        </ul>
      )}

      {!loading && results.length === 0 && recentlySearched.length === 0  &&(
        <div className="w-full h-svh justify-center  flex items-center p-5">
          <span className="font-poppins font-bold text-base text-center">
            {" "}
            What's playing in your mind?
            <p className="pt-1 font-jost font-normal text-[#b9b9b9] tracking-wide text-xs text-center text-clip">
              Search for your favourite artist ,songs and many more
            </p>
          </span>
        </div>
      )}


{/*  Display the Recently search songs*/}

      {!loading && results.length === 0 && recentlySearched.length > 0 &&(
          <div className="mt-1 p-2">
            <div className="flex w-full items-center mb-2">
              <h3 className="text-lg font-jost">Recently search {`${query}`}</h3>
              <button 
              onClick={clearAll}
              className="font-jost text-base w-16  rounded-[4px] ml-auto mr-1 transition-transform duration-300 active:scale-90 active:bg-[#63636613]"
              >Clear all</button>
              </div>
          <ul className="relative h-screen">
            {recentlySearched.map((savedData) => (
              <li key={savedData.id} className="p-2 mb-3">
                <button
                  //pass the logic to play current music on click...
                  onClick={() => startPlay(savedData)}
                  className="w-full h-14 flex space-x-16 text-left items-center  active:bg-[#63636613] rounded-md"
                >
                  <span className="absolute left-3 w-12 h-12 rounded-[4px] border-[1px] border-[white]">
                    <img
                      src={savedData.image[2]?.url}
                      alt={savedData.name}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="w-full max-w-[65%]">
                    <h3 className="font-[500] text-sm font-poppins whitespace-nowrap text-ellipsis overflow-hidden ">
                      {savedData.name}
                    </h3>
                    <p className="font-light text-xs font-poppins whitespace-nowrap text-ellipsis overflow-hidden ">
                      {savedData.artists.primary
                        .map((artists) => artists.name)
                        .join(",")}
                    </p>
                  </span>

                  <span
                  onClick={(e)=>{
                    e.stopPropagation()
                    clearRecentlySearch(savedData)
                    // console.log(savedData.id)
                  }}
                 className="flex  items-center"
                  >
                    <FontAwesomeIcon icon={faMultiply} className="text-sm pr-1  absolute right-2 transition-transform  delay-300 active:scale-90"/>

                  </span>
                </button>

              </li>
            ))}
          </ul>

            </div>



      )}

      {!loading && results.length > 0 && (
        <div className="mt-1 p-2">
          <h3 className="text-lg mb-2 font-jost whitespace-nowrap overflow-hidden text-ellipsis">Search Results for <span className="font-rubik text-base font-light">{`${query}`}</span></h3>
          <ul className="relative">
            {results.map((result) => (
              <li key={result.id} className="p-2 mb-3">
                <button
                  //pass the logic to play current music on click...
                  onClick={() => startPlay(result)}
                  className="w-full h-14 flex space-x-16 text-left items-center active:bg-[#63636613] rounded-md"
                >
                  <span className="absolute left-3 w-12 h-12 rounded-[4px] border-[1px] border-[white]">
                    <img
                      src={result.image[2]?.url}
                      alt={result.name}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="w-full max-w-[75%]">
                    <h3 className="font-[500] text-sm font-poppins whitespace-nowrap text-ellipsis overflow-hidden ">
                      {result.name}
                    </h3>
                    <p className="font-light text-xs font-poppins whitespace-nowrap text-ellipsis overflow-hidden ">
                      {result.artists.primary
                        .map((artists) => artists.name)
                        .join(",")}
                    </p>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
