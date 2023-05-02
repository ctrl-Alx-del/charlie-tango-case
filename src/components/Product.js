/* {
  "id": "f0118597",
  "maxPrice": 2600000,
  "minSize": 3727683,
  "adults": 2,
  "children": 3,
  "description": "Family is looking for a Villa with a minimum size of 3727683 m2 and a maximum price of 2.600.000 kr. Tenetur inventore pariatur corporis distinctio consectetur minus vel et.",
  "estateType": "1",
  "takeoverDate": "2023-06-14",
  "zipCode": "5555"
} */

import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";

export default function Product(props) {
  const dispatch = useContext(DispatchContext);
  function addToBasket() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        id: props.id,
        price: props.price,
        productdisplayname: props.productdisplayname,
      },
    });
  }
  return (
    <article>
      <h3>PRODUCT NAME</h3>
      <p>
        {props.brandname} - {props.season} collection
      </p>
      <button onClick={addToBasket}>Add to basket</button>
    </article>
  );
}
