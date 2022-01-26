export const saveToLc = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getFromLc = (name, defaultResponse = []) => JSON.parse(localStorage.getItem(name) || JSON.stringify(defaultResponse));
