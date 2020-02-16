import React, { useContext } from "react";
import { DashBoardContext } from "../../Context/DashBoardProvider";

export default function WelcomeMessage() {
  const { firstVisit } = useContext(DashBoardContext);

  return <>{firstVisit && <h2>Welcome to the cryptoDash</h2>}</>;
}
