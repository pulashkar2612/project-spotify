//import React from "react";
import "./SidebarOption.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function SidebarOption(props) {
  const Icon = props.Icon;
  const title = props.title;
  const sideBarRef = useRef();
  const href = props.href;
  return (
    <div className="sidebarOption" onClick={()=> {sideBarRef.current.click();}}>
      {Icon && <Icon className="sidebarOption__icon" />}
      <Link ref={sideBarRef} to={href} />
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>

    // <Button onClick={() => { sideBarRef.current.click(); }} startIcon={Icon && <Icon />}>
    //   <Link ref={sideBarRef} to={href} />
    //   {title}
    // </Button>
  );
}

export default SidebarOption;
