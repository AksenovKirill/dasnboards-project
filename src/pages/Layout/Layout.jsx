import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { RequireAuth } from "../../HOC/RequireAuth";
import Header from "../../components/Header/Header";

export const Layout = memo(() => {
  return (
    <>
      <main className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <div className="wrapper d-flex flex-column flex-row-fluid">
            <Header />
            <div className="d-flex flex-column-fluid align-items-start container-xxl">
              <div className="content flex-row-fluid">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
});
