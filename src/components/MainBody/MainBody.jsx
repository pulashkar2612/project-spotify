import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom'
import Genre from './Genre';
import SongSection from './SongSection';
import Footer from '../Footer/Footer'
import { Login } from '../Profile/Login'
import Search from '../Search/Search'


function MainBody() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '250px',
            right: '0px',
        }}>
            <Box sx={{ marginTop: '80px', marginBottom: '100px' }}>
                <Box sx={{
                    flex: 1,
                    padding: '20px',
                    maxWidth: '100%',
                    minWidth: '372px',                
                }}>
                    <Routes>
                        <Route path='/' element={<SongSection />} />
                        <Route path='/search' element={<h1>Search</h1>} />
                        <Route path='/genre/:pathUrl/:id' element={<Genre />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/home/search' element={<Search />} />
                    </Routes>
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}

export default MainBody;