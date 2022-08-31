import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchForm } from "store/app-process/app-process";

export const SwitchForm = ({ text, sing }) => {
  const dispatch = useDispatch();
  const isOpenForm = useSelector((state) => state.app.openForm);
  return (
    <div className="text-gray-500 text-center fw-semibold fs-6">
      {text}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        style={{ paddingLeft: "5px" }}
        href="#"
        onClick={() => dispatch(switchForm(!isOpenForm))}
        className="link-primary fw-semibold"
      >
        {sing}
      </a>
    </div>
  );
};
