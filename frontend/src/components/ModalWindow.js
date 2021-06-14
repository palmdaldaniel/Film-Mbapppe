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

  const renderButton = () => {
    if (deleteBooking) {
      return <div>
        <Button variant="danger" onClick={() => handleClick()} className='mr-3'>
          Yes
        </Button>
        <Button variant="primary" onClick={() => toggleBoolean(false)}>
          No
        </Button>
      </div>
    } else {
      return <Button variant="danger" onClick={() => toggleBoolean(false)}>
       Close
      </Button>
    }
  }

  return (
    <>
      <Modal show={booleanValue}
        onHide={() => toggleBoolean(false)}
        animation={false}
      >
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          {renderButton()}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow