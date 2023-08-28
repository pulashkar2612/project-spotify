import React, { useEffect, useState } from 'react';
//import { useSelector } from "react-redux";
import SearchMusicDisc from '../../img/SearchMusicDisc.svg';
import SearchMusicMp3 from '../../img/searchMusicMp3.svg';
import SearchMusic from '../../img/searchMusic.svg';
import ArrowUp from '../../img/left.svg';
import './Search.css';


function Search(props) {
    //const { playlists, search } = useSelector(state => state.reducer);
    const [playlists, setplaylists] = useState([]);
    let [search, setSearch] = useState(null);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setSearchResult(playlists.filter((i) => (
            (i.name.toLowerCase().startsWith(search))
            ||
            (i.author_name.toLowerCase().startsWith(search))
            ||
            (i.musicName.toLowerCase().startsWith(search))
            ||
            (i.lang && i.lang.toLowerCase().startsWith(search))
        )));
    }, [search, playlists]);

    return (
        <>
            {search === "" || search === null ?
                <div className={"Search"}>
                        Search here
                </div>
                :
                <div className={"Search-result"}>
                    {
                        searchResult.length === 0
                            ?
                            <div className={"Search-fallback"}>
                                No result found.
                            </div>
                            :
                            // searchResult.map((item) => (
                            //     <MusicCard key={item.id} music={item}/>
                            // ))
                            <div className={"Search-fallback"}>
                                Result found.
                            </div>
                    }
                </div>
            }
        </>
    );
}

export default Search;