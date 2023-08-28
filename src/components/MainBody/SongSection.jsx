//import { Box } from "@mui/material"
import PlayListBox from './PlayListBox';

function SongSection() {
   
    return (
        <>
            <PlayListBox pathUrl="song" name="Spotify Playlist" />
            <PlayListBox pathUrl="album" name = "Spotify Album"/>
        </>
    );
}

export default SongSection;