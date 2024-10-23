import done from "../assets/Done.svg";
import todo from "../assets/To-do.svg";
import inProgress from "../assets/in-progress.svg";
import cancelled from "../assets/Cancelled.svg";
import backlog from "../assets/Backlog.svg";

export default function (status) {
  switch (status) {
    case "Done":
      return done;
    case "In progress":
      return inProgress;
    case "Todo":
      return todo;
    case "Cancelled":
      return cancelled;
    case "Backlog":
      return backlog;
    default:
      return todo;
  }
}
