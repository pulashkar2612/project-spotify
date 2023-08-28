import AsideSection from '../AsideSections/AsideSection';
import MainBody from '../MainBody/MainBody';
import Navbar from '../MainBody/Navbar';
import PlayerSection from '../PlaySection/PlayerSection';
import { useSelector } from 'react-redux';

function Home() {
    const data = useSelector(state => state.song);
    console.log(data);
    return (
        <>
            <AsideSection />
            <Navbar />
            <MainBody />
            {data.length > 0 && <PlayerSection />}
            {/* <PlayerSection /> */}
        </>
    );
}

export default Home;