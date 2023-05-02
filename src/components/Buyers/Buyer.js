import { estateTypes } from "@/data/estateTypes";
import React, { useState } from "react";

export default function Buyer(props) {
  let price = props.maxPrice;
  let priceDots = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: {priceDots} kr.</p>
      <p>Zip Code: {props.zipCode}</p>
      <p>Estate Type: {estateTypes[props.estateType - 1].name}</p>
      <p>Size: {props.minSize} m²</p>
      <input type="checkbox" checked={selected} onChange={handleSelect} />
    </div>
  );
}
