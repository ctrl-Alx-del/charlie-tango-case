import { useContext } from "react";
import { DispatchContext } from "@/contexts/buyerContext";

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
  return <></>;
}
