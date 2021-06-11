import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ModalWindow(props) {
  const { booleanValue, toggleBoolean, modalText, deleteBooking } = props.modalValues
  const bookingId = props.bookingId

  const handleClick = () => {
    toggleBoolean(false)

    //needed when using modal window on Profile page while deleting a booking
    if (props.bookingId) {
      deleteBooking(bookingId)
    }
  }

  return (
    <>
      <Modal className="d-flex justify-content-center align-items-center" show={booleanValue} onHide={() => toggleBoolean(false)} animation={false}>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleClick()}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow