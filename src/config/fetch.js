const apiUrl = import.meta.env.VITE_API_URL;
if (!apiUrl) {
  throw new Error("ERROR: Environment variable not found!");
}

//Global search

export const globalSearch = async (query,limit,page) => {
  try {
    const response = await fetch(`${apiUrl}search?query=${query}&limit=${limit}&page=${page}`);
    if (!response.ok) {
      throw new Error("throw new Error");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(`ERROR: While Fetching for ${query}`);
  }
};

// Search by query

export const searchSongsByQuery = async (query,limit,page) => {
  
    const response = await fetch(`${apiUrl}search/songs?query=${query}&limit=${limit}&page=${page}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if(!contentType || !contentType.includes('application/json')){
      const text =await response.text();
      console.log('Non Json Response:' , text)
      throw new Error('Invalid JSON response');
    }

    return await response.json()

    // const data = await response.json();
    // // console.log(data);
    // return data;
 
};

//Search song by ID

export const searchById = async (id) => {
  try {
    const data = await fetch(`${apiUrl}songs/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // console.log(data);
    return data;
  } catch (error) {
    console.log("Error: while Finding song with id", error);
  }
};

//Search for albums

export const searchForAlbum = async (album, limit, page) => {
  try {
    const response = await fetch(
      `${apiUrl}search/albums?query=${album}&limit=${limit}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
    // console.log(data);
    // return data;
  } catch (error) {
    console.log(`ERROR: while fetching album`, error);
  }
};

// Search for artist

export const searchForArtist = async (artist, limit, page) => {
  try {
    const response = await fetch(
      `${apiUrl}search/artists?query=${artist}&limit=${limit}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.log("ERROR:fetching artists", error);
  }
};

//serch for Trending songs

export const searchForTrending = async (trending, limit, page) => {
  try {
    const response = await fetch(
      `${apiUrl}search/songs?query=${trending}&limit=${limit}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("ERROR: while fetching Trending songs", error);
  }
};
