export const headerTableStoragesConfig = [
  { title: "Название склада", className: "text-center min-w-100px" },
  { title: "id", className: "text-center min-w-30px" },
  { title: "Тип", className: "text-center min-w-100px" },
  { title: "Приоритет", className: "text-center min-w-150px" },
  { title: "Статус", className: "text-center min-w-100px" },
  { title: "Действие", className: "text-end min-w-100px px-5" },
];
export const headerTableMarketConfig = [
  { title: "Наименование товара", className: "text-center min-w-100px" },
  { title: "Количество товара", className: "text-center min-w-30px" },
  { title: "Цена", className: "text-center min-w-150px" },
  { title: "Остатки", className: "text-center min-w-100px" },
  { title: "Статус", className: "text-center min-w-100px" },
  { title: "Действие", className: "text-end min-w-100px px-5" },
];

export const inputTableStorageAddItemConfig = [
  {
    label: "Название склада",
    placeholder: "Название склада",
    className: "form-control mb-2",
    name: "title",
  },
  {
    label: "Приоритет",
    placeholder: "Приоритет",
    className: "form-control mb-2",
    name: "priority",
  },
  { label: "Статус", placeholder: "Статус", className: "form-control mb-2", name: "status" },
];
