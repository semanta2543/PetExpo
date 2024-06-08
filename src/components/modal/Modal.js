import React, { useEffect } from "react";
import "./modal.css";

const Modal = ({ animal, isBird, onModalClose }) => {
  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content p-2">
          <div className="bg-white rounded">
            <div className="modal-header">
              <h5 className="modal-title">{animal.name}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onModalClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex gap-2">
                <img className="modalImg" src={animal.image} alt="item_photo" />
                <p>
                  <b>Description: </b>
                  {animal.description}
                </p>
              </div>

              {Object.values(animal)?.map((item, index) => {
                return (
                  Object.keys(animal)[index] !== "id" &&
                  Object.keys(animal)[index] !== "name" &&
                  Object.keys(animal)[index] !== "image" &&
                  Object.keys(animal)[index] !== "description" && (
                    <p className="d-flex gap-2">
                      <b className="text-capitalize">{Object.keys(animal)[index].includes('_')? Object.keys(animal)[index].replace('_', " ") : Object.keys(animal)[index]}: </b> { typeof(item) === 'object' ? item.map((item2, index)=>{return(<p>{item2}</p>)}) : item}
                    </p>
                  )
                );
              })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn closeBtn"
                onClick={onModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
