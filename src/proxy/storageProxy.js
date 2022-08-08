export const getLocalStorage = () => {
  const logged = localStorage.getItem("logged");
  const loggedStorage = JSON.parse(logged) || { log: false, permission: 0 };
  return loggedStorage;
};
