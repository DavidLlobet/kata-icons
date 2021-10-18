import { useState } from "react";
import "./icon.css";
const FlipIcon = ({ icon1, icon2 }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const up = "fas " + icon1;
  const down = "fas " + icon2;

  return <i className={`${selected ? up : down}`} onClick={toggleSelected}></i>;
};

export default FlipIcon;
