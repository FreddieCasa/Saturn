import Modal from 'react-bootstrap/Modal';
import {useState} from "react";


export const showModal = () => {


    const [hidden, setHidden] = useState(true);

    const changeHiddenValue = () => {
        if (hidden) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    };
    

    return (

        <div>
            <button onClick={changeHiddenValue}>Read {hidden ? "more" : "less"} </button>
            {!hidden && (
                <div
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                >
                    <Modal.Dialog>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                    </Modal.Dialog>
                </div>
            )}

        </div>

    );

};