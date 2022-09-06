import React, { memo } from "react";
import "./SelectTableItemLimit.css";

export const SelectTableItemLimit = memo(() => {
  return (
    <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
      <div
        className="dataTables_length"
        id="kt_ecommerce_products_table_length"
      >
        <label>
          <select
            name="kt_ecommerce_products_table_length"
            aria-controls="kt_ecommerce_products_table"
            className="form-select form-select-sm form-select-solid"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>
    </div>
  );
});
