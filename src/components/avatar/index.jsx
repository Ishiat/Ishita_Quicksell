import "./index.css";

const Avatar = ({ initials, userAvailable }) => {
  return (
    <div className="avatar-container">
      <div className="avatar">
        {initials}
        <span
          className={`status-circle ${
            userAvailable ? "available" : "unavailable"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Avatar;
