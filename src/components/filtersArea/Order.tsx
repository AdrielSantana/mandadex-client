import Form from "react-bootstrap/Form";
import Favorite from "../Favorite";

const Order = () => {
  return (
    <>
      <div className="order-div">
        <p>Ordernar por</p>
        <span className="order-form-span">
          <Form.Select
            bsPrefix={"order-select form-select"}
            aria-label="Select Order"
          >
            <option value="name">Nome</option>
            <option value="id">ID</option>
            <option value="birthDate">Data de criação</option>
          </Form.Select>
          <Favorite />
        </span>
      </div>
    </>
  );
};

export default Order;
