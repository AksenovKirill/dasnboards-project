import {
  actionConfig,
  headerTableOrganizationsClasses,
  headerTableStoragesClasses,
} from "./configurators";

const getTitles = (data) => {
  return Object.keys(data[0] ?? {}).map((element) => ({
    title: element,
  }));
};

export const getTableTitles = (data, config) => {
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
  const headers = getTableTitles(adaptItems, headerTableStoragesClasses);
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
  const headers = getTableTitles(adaptItems, headerTableOrganizationsClasses);
  return { items, headers };
};
