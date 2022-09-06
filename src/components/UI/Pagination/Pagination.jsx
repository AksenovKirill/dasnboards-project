import React, { memo } from "react";

export const Pagination = memo(() => {
  return (
    <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
      <div className="dataTables_paginate paging_simple_numbers">
        <ul className="pagination">
          <li
            className="paginate_button page-item previous disabled"
            id="kt_ecommerce_products_table_previous"
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              aria-controls="kt_ecommerce_products_table"
              data-dt-idx="0"
              tabIndex="0"
              className="page-link"
            >
              <i className="previous" />
            </a>
          </li>
          <li className="paginate_button page-item active">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              aria-controls="kt_ecommerce_products_table"
              data-dt-idx="1"
              tabIndex="0"
              className="page-link"
            >
              1
            </a>
          </li>
          <li className="paginate_button page-item ">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              aria-controls="kt_ecommerce_products_table"
              data-dt-idx="2"
              tabIndex="0"
              className="page-link"
            >
              2
            </a>
          </li>
          <li className="paginate_button page-item ">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              aria-controls="kt_ecommerce_products_table"
              data-dt-idx="3"
              tabIndex="0"
              className="page-link"
            >
              3
            </a>
          </li>
          <li className="paginate_button page-item ">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              aria-controls="kt_ecommerce_products_table"
              data-dt-idx="4"
              tabIndex="0"
              className="page-link"
            >
              4
            </a>
          </li>
          <li className="paginate_button page-item ">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              aria-controls="kt_ecommerce_products_table"
              data-dt-idx="5"
              tabIndex="0"
              className="page-link"
            >
              5
            </a>
          </li>
          <li
            className="paginate_button page-item next"
            id="kt_ecommerce_products_table_next"
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              aria-controls="kt_ecommerce_products_table"
              data-dt-idx="6"
              tabIndex="0"
              className="page-link"
            >
              <i className="next" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});
