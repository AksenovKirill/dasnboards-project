import { actionConfig, headerOrganizationsClasses, headerWRHousesClasses } from "./configurators";

const getTitles = (data) => {
  return Object.keys(data[0] ?? {}).map((element) => ({
    title: element,
  }));
};

const getTableTitles = (data, config) => {
  const result = getTitles(data)?.map((element, index) => ({
    ...element,
    className: config[index].className,
  }));
  result.push(actionConfig);
  return result;
};

const getAdaptArrays = (data) => {
  const adaptItems = data.map((object) => Object.values(object));
  return adaptItems;
};

export const getDataInputForm = (data, validation) => {
  const result = data?.map((object, index) => ({
    label: object.title,
    isLabel: false,
    placeholder: object.title,
    id: `${object.title}${index}`,
    type: "text",
    className: "mb-10 fv-row",
    validation: validation,
  }));

  return result;
};

export const adapterWareHouses = (data) => {
  const adaptItems = Object.entries(data).map(([key, value]) => {
    const { id, moysklad_id, name, priority, type, virtual_moysklad_id } = value;

    return {
      id: id,
      name: name,
      type: type,
      priority: priority ?? "empty",
      moysklad: moysklad_id ?? "empty",
      virtual: virtual_moysklad_id ?? "empty",
    };
  });

  const items = getAdaptArrays(adaptItems);
  const headers = getTableTitles(adaptItems, headerWRHousesClasses);
  return { items, headers };
};

export const adapterOrganizations = (data) => {
  const adaptItems = Object.entries(data).map(([key, value]) => {
    const { id, moysklad_id, name } = value;
    return {
      id: id,
      name: name,
      moysklad: moysklad_id,
    };
  });
  const items = getAdaptArrays(adaptItems);
  const headers = getTableTitles(adaptItems, headerOrganizationsClasses);
  return { items, headers };
};
