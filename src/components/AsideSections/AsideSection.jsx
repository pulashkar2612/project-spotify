import "./AsideSection.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Link } from "react-router-dom";

function AsideSection() {
  //const [{ playlists }, dispatch] = useStateValue();
  //console.log(playlists);

  //const [playlists, setplaylists] = useState([]);

  return (
    <div className="sidebar">
      <Link to="/">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        style={{ cursor: 'pointer' }}
      />
      </Link>
      
      <SidebarOption Icon={HomeIcon}  href={"/"}  title={"Home"} />
      <SidebarOption Icon={SearchIcon}  href={"/home/search"}  title={"Search"}/>
      <SidebarOption Icon={LibraryMusicIcon}  href={"/home/library"}  title={"Your Library"} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption key = {playlist.id}option={playlist.name} />
      ))} */}
    </div>
  );
}

export default AsideSection;
 