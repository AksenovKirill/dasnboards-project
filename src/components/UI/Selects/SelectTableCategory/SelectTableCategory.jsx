import React, { memo } from "react";
import "./SelectTableCategory.css";

export const SelectTableCategory = memo(({ ...props }) => {
  return (
    <div {...props} className="w-100 mw-200px">
      <select className="form-select form-select-solid select2-hidden-accessible">
        <option data-select2-id="select2-data-12-307w" disabled>
          Статус
        </option>
        <option value="all" data-select2-id="select2-data-128-sr94">
          Все
        </option>
        <option value="published" data-select2-id="select2-data-129-13mm">
          Опубликован
        </option>
        <option value="scheduled" data-select2-id="select2-data-130-jnmo">
          Запланирован
        </option>
        <option value="inactive" data-select2-id="select2-data-131-nm5h">
          Отключен
        </option>
      </select>
    </div>
  );
});
