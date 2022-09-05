import { memo } from "react";
import agency from "../../../assets/media/auth/agency.png";

export const AuthPageImage = memo((props) => {
  return (
    <div className="d-flex flex-lg-row-fluid">
      <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
        <img
          className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
          src={agency}
          alt="agency"
        />
        <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">
          Fast, Efficient and Productive
        </h1>
        <div className="text-gray-600 fs-base text-center fw-semibold">
          In this kind of post,
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="opacity-75-hover text-primary me-1">
            the blogger
          </a>
          introduces a person they’ve interviewed
          <br />
          and provides some background information about
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="opacity-75-hover text-primary me-1">
            the interviewee
          </a>
          and their
          <br />
          work following this is a transcript of the interview.
        </div>
      </div>
    </div>
  );
});
