import { DeleteOutline } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { disableRemove } from "../utils/DisableRemove";

const CartCard = ({
  name,
  index,
  category,
  quantity,
  addFunc,
  removeFunc,
  item,
  deleteItem
}) => {
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    disableRemove(item, setDisable);
  }, [item]);
  return (
    <div className="cart_card_root d-flex align-items-center justify-content-between">
      <div>
        <p>
          {index + 1}. {name}
        </p>
        <p>{category}</p>
      </div>
      <div className="d-flex align-items-center">
        <div className="product_page_addtc">
          <button onClick={removeFunc} className="mr-12" disabled={disable}>
            -
          </button>
          <input
            type="number"
            placeholder="0"
            className="body1"
            value={quantity}
          />
          <button onClick={addFunc} className="ml-12">
            +
          </button>
        </div>
        <button className="ml-16 cart_card_deleteBTn" onClick={deleteItem}>
          <DeleteOutline fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
