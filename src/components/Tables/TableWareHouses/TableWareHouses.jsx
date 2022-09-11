import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadWareHouseAction, refreshTokenAction } from "../../../store/api-actions";
import { SelectTableCategory } from "../../UI/Selects/SelectTableCategory/SelectTableCategory";
import { LinkPrimary } from "../../UI/Links/LinkPrimary";
import { TableContent } from "../Table/TableContent";
import { SelectTableItemLimit } from "../../UI/Selects/SelectTableItemLimit/SelectTableItemLimit";
import { Pagination } from "../../UI/Pagination/Pagination";
import { InputTableSearch } from "../../UI/Inputs/InputTableSearch/InputTableSearch";
import { TableWrapper } from "../Table/TableWrapper";
import { headerTableStoragesClasses } from "../../../assets/configurators";
import { getToken } from "../../../api/token";
import { AUTH_TOKEN_KEY_NAMES } from "../../../assets/const";

export const TableWareHouses = memo(() => {
  const dispatch = useDispatch();
  const storeWarehouses = useSelector((state) => state.data?.warehouses);
  const { data, isLoading } = storeWarehouses;

  const handleClick = () => {
    dispatch(refreshTokenAction(getToken(AUTH_TOKEN_KEY_NAMES.refresh)));
  };

  useEffect(() => {
    dispatch(loadWareHouseAction());
    // eslint-disable-next-line
  }, []);

  return (
    <TableWrapper>
      <div className="card-header align-items-center py-5 px-1 gap-2 gap-md-5">
        <div className="card-title" />
        <button onClick={handleClick}>Refresh</button>
        {isLoading && (
          <>
            <InputTableSearch />
            <div className="card-toolbar flex-row-fluid justify-content-end gap-5 px-10">
              <SelectTableCategory />
              <LinkPrimary to={"/add"}>Добавить склад</LinkPrimary>
            </div>
          </>
        )}
      </div>
      <div className="card-body pt-0">
        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
          <div className="table-responsive">
            <TableContent data={data?.items} isLoading={isLoading} />
          </div>
          {isLoading && (
            <div className="row">
              <SelectTableItemLimit />
              <Pagination />
            </div>
          )}
        </div>
      </div>
    </TableWrapper>
  );
});
