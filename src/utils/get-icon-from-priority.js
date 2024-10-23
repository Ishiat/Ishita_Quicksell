import low from "../assets/Img - Low Priority.svg";
import no from "../assets/No-priority.svg";
import medium from "../assets/Img - Medium Priority.svg";
import high from "../assets/Img - High Priority.svg";
import urgent from "../assets/SVG - Urgent Priority grey.svg";

export default function (priority) {
  switch (priority) {
    case 0:
      return no;
    case 1:
      return low;
    case 2:
      return medium;
    case 3:
      return high;
    case 4:
      return urgent;
    default:
      return no;
  }
}
