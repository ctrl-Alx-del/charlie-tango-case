import React, { useState } from "react";

export default function Buyer(props) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: {props.maxPrice}</p>
      <p>Zip Code: {props.zipCode}</p>
      <p>Estate Type: {props.estateType}</p>
      <p>Size: {props.minSize}</p>
      <input type="checkbox" checked={selected} onChange={handleSelect} />
    </div>
  );
}
