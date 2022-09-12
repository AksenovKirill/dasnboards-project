import React from "react";
import ReactDOM from "react-dom";

const BackDrop = ({ onClose, children }) => {
  return (
    <div className="swal2-container swal2-center swal2-backdrop-show" style={{ display: "overflow-y: auto" }}>
      {children}
    </div>
  );
};
const ModalOverlay = ({ onClose, children }) => {
  return (
    <BackDrop>
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
    </BackDrop>
  );
};

export const Modal = ({ children }) => {
  return <>{ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById("overlay-root"))}</>;
};
