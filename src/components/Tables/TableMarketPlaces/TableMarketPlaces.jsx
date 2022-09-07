import React from "react";

export const TableMarketPlaces = () => {
  const marketplaces = useSelector((state) => state.data?.marketplaces?.data);
  const isLoading = useSelector((state) => state.data?.marketplaces?.isLoading);

  useEffect(() => {
    dispatch(loadWareHouseAction());
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
              <LinkPrimary to={"/add"}>Добавить Магазин</LinkPrimary>
            </div>
          </>
        )}
      </div>
      <div className="card-body pt-0">
        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
          <div className="table-responsive">
            <TableContent
              data={marketplaces}
              isLoading={isLoading}
              configTable={headerTableStoragesConfig}
            />
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
};
