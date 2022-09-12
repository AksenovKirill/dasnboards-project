import React, { memo } from "react";
import { TableContent } from "../TableContent";

export const TableProductStock = memo(() => {
  return (
    <div style={{ marginTop: "9.5rem" }} className="card card-flush">
      <div className="card-header align-items-center py-5 px-1 gap-2 gap-md-5">
        <div className="card-title" />
        {/* {!isLoading && (
          <>
            <InputTableSearch />
            <div className="card-toolbar flex-row-fluid justify-content-end gap-5 px-10">
              <SelectTableCategory />
              <LinkPrimary to={"/addproduct"}>Добавить товар</LinkPrimary>
            </div>
          </>
        )} */}
      </div>
      <div className="card-body pt-0">
        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
          <div className="table-responsive">
            <TableContent data={[]} isLoading={"isLoading"} configTable={[]} />
          </div>
          {/* {!isLoading && (
            <div className="row">
              <SelectTableItemLimit />
              <Pagination />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
});
