import React, { useState } from "react";
import "./portfolio.css";
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn btn-primary">
        Description
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{props.title}</h2>
            <p>
              {props.description}
            </p>
            <AiOutlineCloseCircle onClick={toggleModal} className="close-modal"/>
          </div>
        </div>
      )}
    </>
  );
}