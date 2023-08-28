import { useState, useEffect, useRef } from 'react'
import { styled, Typography, Slider, Paper, Stack, Box, CardMedia, Card } from '@mui/material';

import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import { useSelector } from 'react-redux'

const CustomPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#4c4c4c',
    backgroundImage: 'linear-gradient(45deg, red, orange, yellow, green)',
    //padding: theme.spacing(2),
    padding: ' 0 24px 8px 24px',
    position: 'fixed',
    width: '96%',
    bottom: '0px',
}))

const PSlider = styled(Slider)(({ theme, ...props }) => ({
    color: '#4c4c4c',
    height: 2,
    padding: 0,
    '&:hover': {
        cursor: 'auto',
    },
    '& .MuiSlider-thumb': {
        width: '13px',
        height: '13px',
        //display: props.thumbless ? 'none' : 'block',
    }
}))


const PlayerSection = () => {

    // Render the player component only when songsList has items


    const data = useSelector(state => state.song);

    if (!data || data.length === 0) {
        return null;
    }
    // console.log("data", data);
    const playlist = data.map((item) => item.audio_url);
    // console.log("playlist: ", playlist);
    //const playlist = ['https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf907e47ae38c3e33a18ae.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf907f47ae38c3e33a18c0.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908047ae38c3e33a18d8.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908147ae38c3e33a18e9.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908347ae38c3e33a190f.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908447ae38c3e33a1925.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908547ae38c3e33a1946.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908747ae38c3e33a1967.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908847ae38c3e33a1970.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908847ae38c3e33a1978.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908847ae38c3e33a1981.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908a47ae38c3e33a19a1.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908b47ae38c3e33a19b3.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908c47ae38c3e33a19d5.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909147ae38c3e33a1a30.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909247ae38c3e33a1a43.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909547ae38c3e33a1a88.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909547ae38c3e33a1a8f.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909647ae38c3e33a1a9e.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909747ae38c3e33a1ab6.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909847ae38c3e33a1abf.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909b47ae38c3e33a1b02.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909b47ae38c3e33a1b0c.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909c47ae38c3e33a1b22.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909d47ae38c3e33a1b2a.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf909f47ae38c3e33a1b57.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90a547ae38c3e33a1bc7.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90a647ae38c3e33a1be8.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90aa47ae38c3e33a1c34.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90ab47ae38c3e33a1c42.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90ab47ae38c3e33a1c51.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90ae47ae38c3e33a1c83.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90af47ae38c3e33a1c91.mp3']

    const audioPlayer = useRef()

    const [index, setIndex] = useState(0);

    const [currentSong] = useState(playlist[index]);


    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [mute, setMute] = useState(false);

    const [elapsed, setElapsed] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (audioPlayer) {
            audioPlayer.current.volume = volume / 100;
        }
        if (isPlaying) {
            setInterval(() => {
                const _duration = Math.floor(audioPlayer?.current?.duration);
                const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

                setDuration(_duration);
                setElapsed(_elapsed);
            }, 100);
        }
    }, [volume, isPlaying]);

    useEffect(() => {
        audioPlayer.current.onended = () => {
            toggleSkipForward();
            console.log("skip next on end", isPlaying);
        };
    })

    function formatTime(time) {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
            const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

            return `${minutes}:${seconds}`;
        }
        return '00:00';
    }

    const togglePlay = () => {
        if (!isPlaying) {
            audioPlayer.current.play()
        } else {
            audioPlayer.current.pause()
        }
        setIsPlaying(prev => !prev)
    }

    const toggleForward = () => {
        audioPlayer.current.currentTime += 10;
    }

    const toggleBackward = () => {
        audioPlayer.current.currentTime -= 10;
    }

    const toggleSkipForward = () => {
        if (playlist) {
            if (index >= playlist.length - 1) {
                setIndex(0);
                audioPlayer.current.src = playlist[0];
                audioPlayer.current.play();
            } else {
                setIndex(prev => prev + 1);
                audioPlayer.current.src = playlist[index + 1];
                audioPlayer.current.play();
            }
        }
    }

    const toggleSkipBackward = () => {
        if (index > 0 && playlist) {
            setIndex(prev => prev - 1);
            audioPlayer.current.src = playlist[index - 1];
            audioPlayer.current.play();
        }
    }

    function VolumeBtns() {
        return mute
            ? <VolumeOffIcon sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={() => setMute(!mute)} />
            : volume <= 20 ? <VolumeMuteIcon sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={() => setMute(!mute)} />
                : volume <= 75 ? <VolumeDownIcon sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={() => setMute(!mute)} />
                    : <VolumeUpIcon sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={() => setMute(!mute)} />
    }

    const setValue = (event) => {
        audioPlayer.current.currentTime = event.target.value;
    }


    return (
        <>
            <audio src={currentSong} ref={audioPlayer} muted={mute} />
            <CustomPaper >
                <Stack spacing={1} direction='row' sx={{
                    display: 'flex',
                    alignItems: 'center',
                }} >
                    <Typography sx={{ color: '#4c4c4c' }}>{formatTime(elapsed)}</Typography>
                    <PSlider value={elapsed} max={duration} onChange={setValue} />
                    <Typography sx={{ color: '#4c4c4c' }}>{formatTime(duration)}</Typography>
                </Stack>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack direction="row" spacing={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '20%'
                        }}>
                        <Card>
                            <CardMedia component="img" alt={currentSong.songName} height="40" width="40" image={currentSong.image} />
                        </Card>
                        <Box direction="column" padding={0}>
                            <Typography variant="body1" sx={{ color: '#4c4c4c', fontWeight: 'bold' }}>ram</Typography>
                            <Typography variant="body1" sx={{ color: 'white' }}>rohan</Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' spacing={1}
                        sx={{
                            display: 'flex',
                            width: '45%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <SkipPreviousIcon
                            sx={{
                                color: '#4c4c4c',
                                '&:hover': { color: 'white' }
                            }}
                            onClick={toggleSkipBackward} disabled={true} />
                        <FastRewindIcon sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={toggleBackward} />

                        {!isPlaying
                            ? <PlayArrowIcon fontSize={'large'} sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={togglePlay} />
                            : <PauseIcon fontSize={'large'} sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={togglePlay} />
                        }


                        <FastForwardIcon sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={toggleForward} />
                        <SkipNextIcon sx={{ color: '#4c4c4c', '&:hover': { color: 'white' } }} onClick={toggleSkipForward} />
                    </Stack>

                    <Stack direction='row' spacing={1}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '20%',
                            alignItems: 'center'
                        }}
                    >
                        <Typography sx={{ color: 'white' }}>{formatTime(elapsed)}</Typography>
                        <Typography sx={{ color: 'white' }}>/</Typography>
                        <Typography sx={{ color: 'white' }}>{formatTime(duration)}</Typography>
                        <VolumeBtns />

                        <PSlider min={0} max={100} value={volume}
                            onChange={(e, v) => setVolume(v)}
                        />
                    </Stack>
                </Box>
            </CustomPaper>
        </>
    )
}

export default PlayerSection;