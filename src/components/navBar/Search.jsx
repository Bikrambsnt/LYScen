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
        className={`w-[98%] h-10 flex items-center justify-evenly bg-[#636366] border-[1px] border-transparent focus-within:border-[#9c227c] rounded-[8px] shadow-searchShadow text-sm sm:text-xl transition-all duration-300`}
      >
        <input
          value={query}
          placeholder="Search what you love to listen..."
          type="text"
          onChange={handleInputChange}
          className="outline-none bg-transparent text-white placeholder-white w-[80%]"
        />

        <button
          onClick={() => {
            debouncedSearch(query); // Handle search explicitly on button click
            setQuery(""); // Clear input field
          }}
          className="text-white bg-transparent"
        >
          <FontAwesomeIcon icon={faSearch} className="flex text-lg" />
        </button>
      </div>

      {/* Display loading text */}
      {loading && <div className="text-white mt-4">Loading...</div>}

      {/* Display search results */}
      {!loading && results.length > 0 && (
        <div className="mt-4 text-white">
          <h3 className="text-lg mb-2">Search Results:</h3>
          <ul className="">
           {results.map((results)=>(
              <li key={results.id} className="bg-[#444] p-2 rounded w-full">
              <h3 className="font-bold">{results.name}</h3>
              <p>{results.album.name}</p>
              <img 
              src={results.image[2]?.url}
              alt={results.name}/>
            </li>
           ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
