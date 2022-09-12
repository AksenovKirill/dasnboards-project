import React from "react";
import ReactDOM from "react-dom";

const BackDrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="swal2-container swal2-center swal2-backdrop-show"
      style={{ display: "overflow-y: auto", border: "2px solid red" }}
    />
  );
};
const ModalOverlay = ({ children }) => {
  return (
    <div className="swal2-container swal2-center swal2-backdrop-show" style={{ display: "overflow-y: auto" }}>
      <div
        aria-labelledby="swal2-title"
        aria-describedby="swal2-html-container"
        className="swal2-popup swal2-modal swal2-icon-error swal2-show"
        tabIndex="-1"
        role="dialog"
        aria-live="assertive"
        aria-modal="true"
        style={{ display: "grid", position: "relative" }}
      >
        {children}
      </div>
    </div>
  );
};

export const Modal = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={onClose} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById("overlay-root"))}
    </>
  );
};
