import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadOrganizationsAction } from "../../../store/api-actions";
import { SelectTableCategory } from "../../UI/Selects/SelectTableCategory/SelectTableCategory";
import { LinkPrimary } from "../../UI/Links/LinkPrimary";
import { TableContent } from "../Table/TableContent";
import { InputTableSearch } from "../../UI/Inputs/InputTableSearch/InputTableSearch";
import { TableWrapper } from "../Table/TableWrapper";

export const TableOrganizations = memo(() => {
  const dispatch = useDispatch();
  const storeOrganizations = useSelector((state) => state.data?.organizations);
  const { data, isLoading } = storeOrganizations;
  console.log(data);

  useEffect(() => {
    dispatch(loadOrganizationsAction());
    // eslint-disable-next-line
  }, []);

  return (
    <TableWrapper>
      <div className="card-header align-items-center py-5 px-1 gap-2 gap-md-5">
        <div className="card-title" />
        {isLoading && (
          <>
            <InputTableSearch />
            <div className="card-toolbar flex-row-fluid justify-content-end gap-5 px-10">
              <SelectTableCategory />
              <LinkPrimary to={"/add"}>Добавить ИП</LinkPrimary>
            </div>
          </>
        )}
      </div>
      <div className="card-body pt-0">
        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
          <div className="table-responsive">
            <TableContent data={data} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </TableWrapper>
  );
});
