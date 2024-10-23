import "./index.css";
import { useState } from "react";
import displayIcon from "../../assets/Display.svg";

const TicketDisplay = ({ groupBy, orderBy, setGroupBy, setOrderBy }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleGroupChange = (event) => {
    setGroupBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <div className="ticket-display">
      <button onClick={handleToggleMenu} className="display-button">
        <img src={displayIcon} />
        <span className="display-text">Display</span>
      </button>

      {menuVisible && (
        <ul className="menu">
          <li>
            <label htmlFor="group-by">Group By:</label>
            <select id="group-by" value={groupBy} onChange={handleGroupChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </li>
          <li>
            <label htmlFor="order-by">Order By:</label>
            <select id="order-by" value={orderBy} onChange={handleOrderChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TicketDisplay;
