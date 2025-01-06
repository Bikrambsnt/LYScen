
const apiUrl =import.meta.env.VITE_API_URL;
if(!apiUrl){
    throw new Error("ERROR: Environment variable not found!");
}

// Search by query

export  const searchSongsByQuery= async (query)=>{
   try {
    const data= await fetch(`${apiUrl}search/songs?query=${query}`);
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    console.log(data)
    return data;
   } catch (error) {
    console.log("ERROR ON Search Query",error);
   }
}

//Search song by ID

export const searchById= async (id) =>{
    try {
        const data = await fetch(`${apiUrl}songs/${id}`)
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: while Finding song with id" ,error);
    }
}

//Search for albums

    export const searchForAlbum = async (album) =>{
        try {
            const data = await fetch(`${apiUrl}search/albums?query=${album}`)
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            console.log(data);
            return data;
        } catch (error) {
            console.log(`ERROR: while fetching album`,error);
        }
    }

    // Search for artist

    export const searchForArtist =async (artist) =>{
        try{
        const response = await fetch(`${apiUrl}search/artists?query=${artist}`)
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return await response.json();
     
    } catch(error){

        console.log("ERROR:fetching artists",error);
        

    }
    }

    //serch for Playlists

    export const searchForPlaylist= async (playlist)=>{

        try {
            const data = await fetch(`${apiUrl}search/playlists?query=${playlist}`)
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            console.log(data);
            return data;
        } catch (error) {
            console.log('ERROR: while fetching Playlists',error);
        }

    }
