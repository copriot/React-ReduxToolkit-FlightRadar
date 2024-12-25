import React from "react";

const Modal = ({ id, close }) => {
  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div>
          <button onClick={close}>X</button>
        </div>
        <h2>{id}</h2>
      </div>
    </div>
  );
};

export default Modal;
