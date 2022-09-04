import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useSelector } from "react-redux";
import logoProfile from "../../../assets/media/avatars/300-2.jpg";
import "./Profile.css";

const Profile = () => {
  const { handleSubmitLogOut } = useAuth();
  const username = useSelector((state) => state?.user?.data?.data?.username || "Гость");
  const status = useSelector((state) => state?.user?.userStatus);
  return (
    <div className="d-flex align-items-center me-n3 ms-1 ms-lg-3 dropdown-content-navigation-profile">
      <div className="btn btn-icon btn-active-light-primary btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px">
        <img className="h-30px w-30px rounded" src={logoProfile} alt="logo" />
      </div>
      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px dropdown-content-navigation-content-profile">
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-3">
            <div className="symbol symbol-50px me-5">
              <img alt="Logo" src={logoProfile} />
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold d-flex align-items-center fs-5">
                {username}
                <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                  Status: {status}
                </span>
              </div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">
                your-mailo@email.com
              </a>
            </div>
          </div>
        </div>
        <div className="separator my-2" />
        <div className="menu-item px-5">
          <button
            style={{ padding: "0.4rem 0.8rem 0.4rem 0.8rem" }}
            type="submit"
            onClick={handleSubmitLogOut}
            className="btn btn-primary"
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
