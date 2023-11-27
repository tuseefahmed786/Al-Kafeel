import React, {useState} from "react";
import { Link } from "react-router-dom";

function Namescompo() {
  const [isActive, setisActive] = useState('avatar');
  const nav = [
    {
      navname: "Avatar",
      redirect: "avatar",
    },
    {
      navname: "Button",
      redirect: "button",
    },
    {
      navname: "Video",
      redirect: "video",
    },
    {
      navname: "Toggle Button",
      redirect: "toggle",
    },
  ];
  return (
    <>
      <div className="all-components relative ">
        <div className="category fixed">
          <h3>Components</h3>
          <ul style={{ listStyle: "disc" }}>
            {nav.map((e, i) => {
              return (
                <li key={i}>
                  <Link
                    key={e.navname}
                    to={e.redirect}
                    className={`${isActive === e.redirect && "active-link"}`}
                    id={e.redirect}
                    onClick={() => setisActive(e.redirect)}
                  >
                    {e.navname}
                  </Link>
                </li>
              );
            })}
            {/* <li><Link to="button">Button</Link></li>
            <li><Link to="video">Video</Link></li>
            <li><Link to="toggle">Toggle Button</Link></li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Namescompo;
