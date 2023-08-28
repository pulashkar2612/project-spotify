import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Avatar, Box, Container, IconButton, InputBase, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos, Search } from "@mui/icons-material";
import {useDispatch} from "react-redux";
// import {setSearch} from "../../actions/actions";
import {Link} from "react-router-dom";

function Navbar() {
    const settings = ['Login', "Logout", 'Subscription', 'Profile'];
    const [searchQuery, setSearchQuery] = useState("");
    const [anchorElUser, setAnchorElUser] = useState(null);
    const searchInputRef = useRef(null);
    const location = useLocation();

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };

    // useEffect(() => {
    //         searchInputRef.current.focus();
    // });

    const dispatch = useDispatch();
    const searchLink = useRef();
    const handleSearch = (e) => {
        e.preventDefault();
        // dispatch(setSearch(searchQuery.toLowerCase()));
        if (searchQuery !== "")
            searchLink.current.click();
    };

    useEffect(() => {
        // Check if the current route is "/home/search"
        if (location.pathname === '/home/search') {
            // Focus on the input element when the route changes to "/home/search"
            searchInputRef.current.focus();
        }
    }, [location]);

    const handleOpenUserMenu = (e) => {
        setAnchorElUser(e.currentTarget);
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }
    return (
        <Container
            sx={{
                color: 'white',
                backgroundColor: 'black',
                position: 'fixed',
                marginLeft: '235px'
            }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '10px',
                    maxWidth: '950px',
                    paddingBottom: '10px',
                    paddingLeft: 0,
                    paddingRight: 0,
                }}>
                <Box display="flex" flexDirection='row' p='0'>
                    <IconButton
                        size="large"
                        color="inherit"
                        p='0'
                    >
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        edge="start"
                    >
                        <ArrowForwardIos />
                    </IconButton>
                    <Box
                        sx={{
                            background: 'white',
                            borderRadius: '30px',
                            minWidth: '300px',
                            alignItems: 'center',
                        }}
                    >
                        <form onSubmit={handleSearch}>
                        <IconButton sx={{ p: '15px' }} color="secondary">
                            <Search />
                        </IconButton>
                        <Link to={"/home/search"} ref={searchLink}/>
                        <InputBase
                            sx={{ color: 'purple', paddingTop: '10px' }}
                            autoFocus
                            placeholder="What do you want to hear?"
                            value={searchQuery}
                            onChange={handleSearchQuery}
                            ref={searchInputRef}
                        />
                        </form>
                    </Box>
                </Box>
                <Box>
                    <Tooltip title="Open Settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, right: 0 }}>
                            <Avatar alt="Prashant" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id='menu-appbar'
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((item) => (
                            <MenuItem key={item} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{item}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </Container >
    );
}

export default Navbar;