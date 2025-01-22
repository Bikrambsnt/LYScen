import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchSongsByQuery, globalSearch } from "../../config/fetch";
import { debounce } from "lodash";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]); // Store search results

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

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={` relative w-[98%] h-10 flex items-center  bg-[#636366] border-[1px] border-transparent focus-within:border-[#9c227c] rounded-[8px] shadow-searchShadow text-sm sm:text-xl transition-all duration-300`}
      >
        <input
          value={query}
          placeholder="What's playing in your mind?"
          type="text"
          onChange={handleInputChange}
          className="absolute left-3 outline-none bg-transparent font-jost font-[300] text-sm tracking-wide text-white placeholder-white w-[80%]"
        />

        <button
          onClick={() => {
            debouncedSearch(query); // Handle search explicitly on button click
            setQuery(""); // Clear input field
          }}
          className=" bg-transparent absolute right-3 flex items-center"
        >
          <FontAwesomeIcon icon={faSearch} className="text-lg" />
        </button>
      </div>

      {/* Display loading text */}
      {loading && <div className="text-white mt-4">Loading...</div>}

      {/* Display search results */}
      {!loading && results.length > 0 && (
        <div className="mt-4 ">
          <h3 className="text-lg mb-2">Search Results</h3>
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
                <h3 className="font-[500] text-sm font-poppins whitespace-nowrap  text-ellipsis overflow-hidden">{results.name}</h3>
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
