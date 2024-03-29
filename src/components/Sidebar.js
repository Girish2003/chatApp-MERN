import React from "react";
import { ListGroup } from "react-bootstrap";

function Sidebar() {
  const rooms = ["first room", "second room", "third room"];

  return (
    <>
      <h2>Available rooms</h2>
      <ListGroup>
        {rooms.map((room, ind) => (
          <ListGroup.Item>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Memebers</h2>
    </>
  );
}

export default Sidebar;
