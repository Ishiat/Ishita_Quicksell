import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import TicketDisplay from "./components/ticket-display";
import { useEffect } from "react";
import Icon from "./components/Icon";
import addSvg from "./assets/add.svg";
import threeSvg from "./assets/3 dot menu.svg";

function App() {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [orderBy, setOrderBy] = useState("priority");

  const statuses = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
  const priorities = [0, 1, 2, 3, 4];

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setTickets(data.tickets);
      })
      .catch((err) => console.log(err));
  }, []);

  const getGroupedAndSortedTickets = () => {
    
    const sortedTickets = [...tickets].sort((a, b) => {
      if (orderBy === "priority") {
        return b.priority - a.priority; 
      } else if (orderBy === "title") {
        return a.title.localeCompare(b.title); 
      }
      return 0; 
    });

    
    let groupedTickets = {};
    if (groupBy === "status") {
      statuses.forEach((status) => {
        groupedTickets[status] = sortedTickets.filter(
          (ticket) => ticket.status === status
        );
      });
    } else if (groupBy === "user") {
      users.forEach((user) => {
        groupedTickets[user.id] = sortedTickets.filter(
          (ticket) => ticket.userId === user.id
        );
      });
    } else if (groupBy === "priority") {
      priorities.forEach((priority) => {
        groupedTickets[`${priority}`] = sortedTickets.filter(
          (ticket) => ticket.priority === priority
        );
      });
    }

    return groupedTickets;
  };

  const groupedTickets = getGroupedAndSortedTickets();

  return (
    <>
      <header>
        <TicketDisplay
          groupBy={groupBy}
          setGroupBy={setGroupBy}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
      </header>

      <div className="ticket-columns">
        {Object.entries(groupedTickets).map(([groupKey, tickets]) => {
          return (
            <>
              <div className="ticket-column" key={groupKey}>
                <div className="ticket-column-header">
                  <Icon users={users} groupKey={groupKey} groupBy={groupBy} />
                  {groupBy !== "user"
                    ? groupKey
                    : users.find((user) => user.id === groupKey).name}
                  <span className="count">{tickets.length}</span>
                  <div className="svgs">
                    <img src={addSvg} />
                    <img src={threeSvg} />
                  </div>
                </div>

                {tickets.map((ticket) => {
                  const user = users.find((user) => user.id === ticket.userId);
                  return (
                    <Card
                      key={ticket.id}
                      ticketId={ticket.id}
                      title={ticket.title}
                      priority={ticket.priority}
                      tag={ticket.tag.join(", ")}
                      userName={user.name}
                      userAvailable={user.available}
                      status={ticket.status}
                      groupBy={groupBy}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
