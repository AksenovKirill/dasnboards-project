import React, { memo } from "react";
import { GoHomeLink } from "../../components/UI/Links/GoHomeLink/GoHomeLink";
import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/media/auth/404-error.png";
import { useSelector } from "react-redux";
import { AuthorizationStatus } from "assets/const";

export const NotFound = memo(() => {
  const authStatus = useSelector((state) => state.user.authorizationStatus);

  const navigate = useNavigate();

  const goHome = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate("/storages");
    }
    navigate("/");
  };
  return (
    <div className="container-xxl mt-20">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-center flex-column-fluid">
          <div className="d-flex flex-column flex-center text-center p-10">
            <div className="card card-flush w-lg-650px py-5">
              <div className="card-body py-15 py-lg-20">
                <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
                <div className="fw-semibold fs-6 text-gray-500 mb-7">
                  We can't find that page.
                </div>
                <div className="mb-3">
                  <img
                    src={errorImg}
                    className="mw-100 mh-300px theme-light-show"
                    alt=""
                  />
                </div>
                <div className="mb-0">
                  <GoHomeLink onClick={goHome}>Вернуться на Главную</GoHomeLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
