import "./index.css"; // Import the CSS styles
import getInitials from "../../utils/get-initials";
import getIconFromPriority from "../../utils/get-icon-from-priority";
import Avatar from "../avatar";

const Card = ({
  ticketId,
  title,
  priority,
  tag,
  userAvailable,
  userName,
  groupBy,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticketId}</span>
        {groupBy !== "user" && (
          <Avatar
            initials={getInitials(userName)}
            userAvailable={userAvailable}
          />
        )}
      </div>
      <span className="card-title">{title}</span>
      <div className="card-footer">
        <div className={`priority-icon`}>
          <span>
            <img src={getIconFromPriority(priority)} />
          </span>
        </div>
        <div className="tag">{tag}</div>
      </div>
    </div>
  );
};

export default Card;
