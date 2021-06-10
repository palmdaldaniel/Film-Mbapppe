import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ModalWindow(props) {
  const {booleanValue, toggleBoolean, modalText} = props.modalValues
    
    return (
      <>
        <Modal show={booleanValue} onHide={()=>toggleBoolean(false)} animation={false}>
          <Modal.Body>{modalText}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={()=>toggleBoolean(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalWindow