import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks";
import { getWareHouses } from "store/app-data/app-data";
import { getToken } from "../../../../api/token";
import { loadWareHousesAction, refreshTokenAction } from "../../../../store/api-actions";
import { getIsOpenModal, openModal } from "store/app-process/app-process";
import { TableWrapper } from "../../../../components/Tables/TableWrapper";
import { TableContent } from "../../../../components/Tables/TableContent";
import { AddItemsModal } from "../../../../components/UI/Modal/AddItemsModal/AddItemsModal";
import { SelectTableCategory } from "../../../../components/UI/Selects/SelectTableCategory/SelectTableCategory";
import { SelectTableItemLimit } from "../../../../components/UI/Selects/SelectTableItemLimit/SelectTableItemLimit";
import { InputTableSearch } from "../../../../components/UI/Inputs/InputTableSearch/InputTableSearch";
import { Pagination } from "../../../../components/UI/Pagination/Pagination";
import { ButtonPrimary } from "../../../../components/UI/Buttons/ButtonPrimary";
import { TOKEN_KEY_NAMES } from "../../../../assets/const";

export const TableWareHouses = memo(() => {
  const dispatch = useDispatch();
  const storeWarehouses = useAppSelector(getWareHouses);
  const isOpenModal = useAppSelector(getIsOpenModal);
  const { data, isLoading } = storeWarehouses;

  const handleClick = () => {
    dispatch(refreshTokenAction(getToken(TOKEN_KEY_NAMES.refresh)));
  };

  const handleClickOpenModal = () => {
    dispatch(openModal({ isOpenModal: true }));
  };

  useEffect(() => {
    dispatch(loadWareHousesAction());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isOpenModal && <AddItemsModal data={data?.items} />}
      <TableWrapper>
        <div className="card-header align-items-center py-5 px-1 gap-2 gap-md-5">
          <div className="card-title" />
          <button onClick={handleClick}>Refresh</button>
          {isLoading && (
            <>
              <InputTableSearch />
              <div className="card-toolbar flex-row-fluid justify-content-end gap-5 px-10">
                <SelectTableCategory />
                <ButtonPrimary onClick={handleClickOpenModal}>Добавить склад</ButtonPrimary>
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
    </>
  );
});
