export const getToken = (name) => {
  const token = localStorage.getItem(name);
  return token ?? "";
};

export const saveToken = (name, token) => {
  localStorage.setItem(name, token);
};

export const dropToken = (name) => {
  localStorage.removeItem(name);
};
