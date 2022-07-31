import { useState } from "react";
import { GreetProps } from "./greet.type";
import "./index.css";

function Greet(props: GreetProps) {
  const [name, setName] = useState("");
  return (
    <div className={"greet"}>
      <div>{props.name}</div>
      <div>State</div>
      <p>{name}</p>
      <input type={"text"} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default Greet;
