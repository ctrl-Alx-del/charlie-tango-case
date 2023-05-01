import { useContext } from "react";
import { DispatchContext } from "@/contexts/buyerContext";
import { estateTypes } from "@/data/estateTypes";

export default function Buyer(props) {
  return (
    <article>
      <h3>{props.maxPrice},-</h3>
      <p>{props.minSize}</p>
      <p>{estateTypes[props.estateType - 1].name}</p>
      <p>{props.zipCode}</p>
    </article>
  );
}
