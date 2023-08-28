import { useState, useEffect } from 'react';
import CardHolder from './CardHolder';
import CardHolderAlbum from './CardHolderAlbum'
import { Box, Grid, Typography, Container } from "@mui/material"
import { useNavigate } from 'react-router-dom';

function PlayListBox({ pathUrl, name }) {
    const navigate = useNavigate();
    const [songs, setSongs] = useState([]);
    const[album, setAlbum] = useState([]);
    const [initialCount, setInitialCount] = useState(4);
    const visibleSongs = Object.keys(songs).slice(0, initialCount);
    const visibleAlbum = album.slice(0, initialCount );
    // console.log("visiblesongs : ", visibleSongs);
    // console.log(songs);
    const url = 'https://academics.newtonSchool.co/api/v1/music/'


    const fetchSong = async () => {
        const response = await fetch(url + pathUrl, {
            headers: {
                'projectId': '3iexcoebatly'
            }
        })
        const json = await response.json();
        if (json && pathUrl == 'song') {
            const moodvalues = await json.data.reduce((acc, obj) => {
                const mood = obj.mood;
                if (!acc[mood]) {
                    acc[mood] = [];
                }
                acc[mood].push(obj);
                return acc;
            }, {})
            setSongs(moodvalues);
        }else if(json && pathUrl == 'album'){
            console.log(json.data);
            setAlbum(json.data);
        }
    }

    useEffect(() => {
        fetchSong();
    }, [])

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        let smValue;
    
        if (screenWidth >= 1200) {
          smValue = 3;
        } else if (screenWidth >= 900) {
          smValue = 4;
        } else if (screenWidth >= 600) {
          smValue = 6;
        } else {
            smValue = 6;
        }
    
        setInitialCount(12 / smValue);
      };

    useEffect(() => {
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    const handleToggleShowAll = () => {
        navigate(`/section/${pathUrl}`, { state: songs });
    };

    // const url = "https://academics.newtonSchool.co/api/v1/music/";

    return (
        <Box sx={{
            padding: '16px',
            borderRadius: '20px',
            marginBottom: '16px',
            display: 'felx',
            flexDirection: 'columns',
            background: 'rgba(255, 255, 255, 0.1)',
            minWidth: '372px',
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: 'flex-end',
                justifyContent: "space-between",
                paddingBottom: '20px',
                verticalAlign: 'baseline',
            }} >
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                        cursor: "pointer",
                        background: 'linear-gradient(90deg, #af2896, #509bf5)',
                        webkitbackgroundclip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        '&:hover': { color: '#1ed760', textDecoration: 'underline' },
                    }}
                    onClick={handleToggleShowAll}
                >
                    {name}
                </Typography>
                <Typography
                    variant="h7"
                    fontWeight="bold"
                    sx={{
                        cursor: "pointer",
                        background: 'linear-gradient(90deg, #af2896, #509bf5)',
                        webkitbackgroundclip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        '&:hover': { color: '#1ed760', textDecoration: 'underline' },
                    }}
                    onClick={handleToggleShowAll}
                >
                    Show All
                </Typography>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(var(--column-count),minmax(0,1fr))',
                gridAutoRows: '0',
                overflowY: 'hidden',
                verticalAlign: 'baseline',
                gridTemplateRows: '1fr',
                columnWidth: '235px',
                columnCount: 2,
                gridGap: '12px',
                minWidth: '372px',
            }}>
                <Grid spacing={2} container >
                {pathUrl === 'song' ?
                visibleSongs.map((key) => (
                    <Grid item key={key} xs= {6} sm={6} md={4} lg={3}>
                        <CardHolder key={key} pathUrl="songs" propKey={key} propValue={songs[key]} />
                    </Grid>
                )) :
                visibleAlbum.map((item) => (
                    <Grid item key={item._id} xs= {6} sm={6} md={4} lg={3}>
                        <CardHolderAlbum key={item._id} pathUrl="album" propValue={item} />
                    </Grid>
                ))
            }
            </Grid>
            </Box>
        </Box>
    );
}

export default PlayListBox;