import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ModalWindowSecond(props) {
  const {bookingIsDeleted, setBookingIsDeleted, modalText} = props.modalValues
    
    return (
      <>
        <Modal show={bookingIsDeleted} onHide={()=>setBookingIsDeleted(false)} animation={false}>
          <Modal.Body>{modalText}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={()=>setBookingIsDeleted(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalWindowSecond