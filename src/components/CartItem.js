import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";

export default function CartItem(props) {
  const dispatch = useContext(DispatchContext);
  function removeOne() {
    dispatch({
      action: "REMOVE_ONE_PRODUCT",
      payload: {
        id: props.id,
      },
    });
  }
  function addOne() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        id: props.id,
      },
    });
  }
}
