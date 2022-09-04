import React, { memo } from "react";
import { AuthModalErrorIcon } from "./AuthModalErrorIcon";
import { AuthModalSuccessIcon } from "./AuthModalSuccessIcon";
import { AuthModalMessage } from "./AuthModalMessage";
import { ButtonPrimary } from "../Buttons/ButtonPrimary";
import { useAuth } from "../../../hooks/useAuth";

export const AuthModal = memo(({ error, success }) => {
  const { handleCloseModal } = useAuth();
  const handleClose = () => handleCloseModal(success?.status);

  return (
    <div
      className="swal2-container swal2-center swal2-backdrop-show"
      style={{ display: "overflow-y: auto" }}
    >
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
        <button
          type="button"
          className="swal2-close"
          aria-label="Close this dialog"
          style={{ display: "none" }}
        >
          ×
        </button>
        <ul className="swal2-progress-steps" style={{ display: "none" }} />
        {success && <AuthModalSuccessIcon />}
        {error && <AuthModalErrorIcon />}
        <img
          className="swal2-image"
          style={{ display: "none" }}
          alt="localImg"
        />
        {/* <h2
          className="swal2-title"
          id="swal2-title"
          style={{ display: "none" }}
        /> */}
        <AuthModalMessage
          message={success ? success.title : error.data.title}
        />
        <input className="swal2-input" style={{ display: "none" }} />
        <input type="file" className="swal2-file" style={{ display: "none" }} />
        <div className="swal2-range" style={{ display: "none" }}>
          <input type="range" />
          <output />
        </div>
        <select className="swal2-select" style={{ display: "none" }} />
        <div className="swal2-radio" style={{ display: "none" }} />
        <label
          htmlFor="swal2-checkbox"
          className="swal2-checkbox"
          style={{ display: "none" }}
        >
          <input type="checkbox" />
          <span className="swal2-label" />
        </label>
        <textarea className="swal2-textarea" style={{ display: "none" }} />
        <div
          className="swal2-validation-message"
          id="swal2-validation-message"
          style={{ display: "none" }}
        />
        <div className="swal2-actions" style={{ display: "flex" }}>
          <div className="swal2-loader" />
          <ButtonPrimary
            onClick={handleClose}
            type="button"
            className="swal2-confirm"
            style={{ display: "inline-block" }}
          >
            Ok, got it!
          </ButtonPrimary>
          <button
            type="button"
            className="swal2-deny"
            aria-label=""
            style={{ display: "none" }}
          >
            No
          </button>
          <button
            type="button"
            className="swal2-cancel"
            aria-label=""
            style={{ display: "none" }}
          >
            Cancel
          </button>
        </div>
        <div className="swal2-footer" style={{ display: "none" }} />
        <div className="swal2-timer-progress-bar-container">
          <div
            className="swal2-timer-progress-bar"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
});
