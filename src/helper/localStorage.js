export const saveToLc = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data))
}

export const getFromLc = (name, defaultResponse = []) => {
    return JSON.parse(localStorage.getItem(name) || JSON.stringify(defaultResponse))
}