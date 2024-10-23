import Avatar from "./avatar";
import getIconFromStatus from "../utils/get-icon-from-status";
import getInitials from "../utils/get-initials";
import getIconFromPriority from "../utils/get-icon-from-priority";

const Icon = function ({ groupKey, groupBy, users }) {
  switch (groupBy) {
    case "user":
      return (
        <Avatar
          initials={getInitials(
            users.find((user) => user.id === groupKey).name
          )}
          userAvailable={users.find((user) => user.id === groupKey).available}
        />
      );
    case "status":
      return <img src={getIconFromStatus(groupKey)} />;
    case "priority":
      return <img src={getIconFromPriority(Number(groupKey))} />;
    default:
      return <div>Hii</div>;
  }
};

export default Icon;
