import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../axios";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
        // console.log(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                users.img ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySHNQAWoQqVtr_1QuGWCa9x-OIQ1v37ogoQ&usqp=CAU"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
