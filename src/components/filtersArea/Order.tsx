"use client";
import { useFilter } from "@/hooks/useFilter";
import { ChangeEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import FavoriteButton from "../FavoriteButton";

const Order = () => {
  const { setOrder } = useFilter();
  const [active, setActive] = useState<boolean>(false);

  const { setActiveFavoriteFilter } = useFilter();

  const handleFavoriteFilter = () => {
    setActiveFavoriteFilter(!active);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };
  return (
    <>
      <div className="order-div">
        <p>Ordernar por</p>
        <span className="order-form-span">
          <Form.Select
            bsPrefix={"order-select form-select"}
            aria-label="Select Order"
            onChange={(e) => handleSelect(e)}
          >
            <option value="increase">Crescente</option>
            <option value="decrease">Decrescente</option>
          </Form.Select>
          <a onClick={(e) => handleFavoriteFilter()}>
            <FavoriteButton active={active} setActive={setActive} />
          </a>
        </span>
      </div>
    </>
  );
};

export default Order;
