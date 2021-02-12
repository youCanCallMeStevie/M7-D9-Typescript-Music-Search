import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getMusicResults } from "../../Api";
import Search from "../../Components/Search/Search";
import MusicList from "../../Components/MusicList/MusicList"

function Home(props: RouteComponentProps) {
  const [searchMusic, setSearchMusic] = useState("");
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = async (searchString: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    setIsLoading(true);
    const musicAlbums = await getMusicResults(searchString);
    setSearchMusic(musicAlbums);
    setIsLoading(false);
  };

  const updateSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentId = e.currentTarget.id;
    setSearchMusic(e.currentTarget.value);
  };


  return <div>
    <Search handleSearch={handleSearch}
              updateSearch={updateSearch}/>
    <MusicList results={results} />
  </div>;
}

export default Home;
