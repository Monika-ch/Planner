import React, { useState } from "react";
import { Table, Card, Collapse,ModalBody, ModalHeader, Modal, ModalFooter, Button } from "reactstrap";
import AddWatchList from "./AddWatchList";
import MarketGraph from "./MarketGraph";
// function showDetail(stockSymbol){
//   console.log("called");
//   return(
//       <MarketGraph stock = {stockSymbol} toggleModal={true}/>
//   );

// }
function Portfolio(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { products, deleteProduct } = props;
  
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggleModal}>
      &times;
    </Button>
  );
  const list = products.map((product) => {
    return (
      <tr key={product.id}>
        {/* <td><Button onClick={()=>showDetail(product.stock)} color="primary"><i className="fa fa-plus fa-sm" /></Button></td> */}
        <td><Button onClick={toggleModal} color="primary"><i className="fa fa-eye fa-sm" /></Button></td>
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal} close={closeBtn}>
            Stock Performance
          </ModalHeader>
          <ModalBody>
            <MarketGraph />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        
        <td>{product.stock}</td>
        <td>{product.limitPrice}</td>
        <td>
          <Button
            onClick={() => {
              deleteProduct(product.id);
            }}
            color="danger"
          >
            <i className="fa fa-trash fa-sm" />
          </Button>
        </td>
      </tr>
    );
  });
  if (products != null) {
    return (
      <div className="container container-size">
        <div className="row">
          <div className="col">
            <Card outline color="primary" className="align-center">
              <div className="row">
                <div className="col">
                  <h4>My WatchList</h4>
                </div>
                <div className="col">
                  <Button onClick={toggle} color="primary">
                    {" "}
                    <i className="fa fa-plus fa-lg" /> WatchList
                  </Button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Collapse isOpen={isOpen}>
                    <Card
                      style={{
                        backgroundColor: "#e3f2fd",
                        borderColor: "primary ",
                      }}
                    >
                      <AddWatchList
                        products={props.products}
                        addProduct={props.addProduct}
                        toggle={toggle}
                      />
                    </Card>
                  </Collapse>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            {" "}
            <Table striped responsive>
              <thead>
                <tr>
                  <th scope="row">#</th>
                  <th>Stock </th>

                  <th>Price</th>

                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>{list}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default Portfolio;