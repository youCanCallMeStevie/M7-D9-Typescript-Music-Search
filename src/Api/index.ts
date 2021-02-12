

export const getMusicResults = async (searchString: React.ChangeEvent<HTMLInputElement>) => { 
    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchString}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY!,
        "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST!,
      },
    }
      );
      const data  = await response.json();
      if (response.ok) {
        console.log("General quary", data.data);
        return data.data;
      } else {
        console.log("there was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  export const getAlbum = async (albumID: string) => {

    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/album/${albumID}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              process.env.REACT_APP_RAPIDAPI_KEY!,
            "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST!,
          },
        }
      );
      const data  = await response.json();
      if (response.ok) {
        console.log("Album fetch", data.data);
        return data.data;
      } else {
        console.log("there was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };
