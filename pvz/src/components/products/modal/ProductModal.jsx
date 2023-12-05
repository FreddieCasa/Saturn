import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProductModal = ({
  show,
  setShowModal,
  currentProduct,
  setShowToast,
  showToast,
}) => {
  const handleClose = () => setShowModal(false);

  const handleAddCart = () => {
    setShowToast(true);
    setShowModal(false);
  };

  const { title, description, quantity } = currentProduct;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{description}</div>
          <div>{`quantity: ${quantity}`}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button variant="primary" onClick={handleAddCart}>
            add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
