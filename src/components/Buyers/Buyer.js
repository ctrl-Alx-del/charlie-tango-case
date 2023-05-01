import { useContext } from "react";
import { DispatchContext } from "@/contexts/buyerContext";

export default function Buyer(props) {
  return (
    <article>
      <h3>{props.maxPrice},-</h3>
      <p>{props.minSize}</p>
      <p>{props.estateType}</p>
      <p></p>
    </article>
  );
}
