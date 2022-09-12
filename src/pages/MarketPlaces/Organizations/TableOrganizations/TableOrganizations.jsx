import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadOrganizationsAction } from "../../../../store/api-actions";
import { SelectTableCategory } from "../../../../components/UI/Selects/SelectTableCategory/SelectTableCategory";
import { ButtonPrimary } from "../../../../components/UI/Buttons/ButtonPrimary";
import { TableContent } from "../../../../components/Tables/TableContent";
import { InputTableSearch } from "../../../../components/UI/Inputs/InputTableSearch/InputTableSearch";
import { TableWrapper } from "../../../../components/Tables/TableWrapper";
import { openModal } from "store/app-process/app-process";
import { AddItemsModal } from "../../../../components/UI/Modal/AddItemsModal";

export const TableOrganizations = memo(() => {
  const dispatch = useDispatch();
  const storeOrganizations = useSelector((state) => state.data?.organizations);

  const { data, isLoading } = storeOrganizations;
  const isOpenModal = useSelector((state) => state.app?.isOpenModal);

  const handleClickOpenModal = () => {
    dispatch(openModal({ isOpenModal: true }));
  };

  useEffect(() => {
    dispatch(loadOrganizationsAction());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isOpenModal && <AddItemsModal data={data} />}
      <TableWrapper>
        <div className="card-header align-items-center py-5 px-1 gap-2 gap-md-5">
          <div className="card-title" />
          {isLoading && (
            <>
              <InputTableSearch />
              <div className="card-toolbar flex-row-fluid justify-content-end gap-5 px-10">
                <SelectTableCategory />
                <ButtonPrimary onClick={handleClickOpenModal}>Добавить ИП</ButtonPrimary>
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
    </>
  );
});
