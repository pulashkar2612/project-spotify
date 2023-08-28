import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Tab, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { add } from '../../store/songSlice'

function Audio({ songs }) {
    const dispatch = useDispatch();
    const [isLiked, setisLiked] = useState(false);
    const [playSong, setPlaySong] = useState([]);

    const playSongFunction = (row) => {
        const state = [row];
        console.log("playsongState", state);
        dispatch(add(state));
        console.log("dispatched");
    }
    return (
        <div>
            {/* {songs.map((item, index) => {
                <div> */}
            <TableContainer sx={{ backgroundImage: 'linear-gradient(90deg,#af2896,#509bf5)' }} >
                <Table>
                    <TableBody>
                        {songs.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell width={15}><p onClick={() => playSongFunction(row)}>{`#${index + 1}`}</p></TableCell>
                                <TableCell width={60}>
                                    <Avatar alt="Avatar" src={row.thumbnail} sx={{ width: 50, height: 50 }} variant="square" />
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }} width={230} >{row.title}</TableCell>
                                <TableCell width={400}>
                                    {row.artist.map((item, i) => (i + 1) == row.artist.length ? `${item.name}` : `${item.name}, `)}
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        {isLiked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Audio;