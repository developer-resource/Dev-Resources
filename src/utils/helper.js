// Theme Mode Handler for Local Storage 

const getThemeMode = () => localStorage.getItem('theme')
const setThemeMode = (value) => localStorage.setItem('theme', value ? value : 'dark')

// Authorization
const authHeaderService = () => {
    const accessToken = localStorage.getItem('accessToken')
console.log(accessToken)
    if (accessToken) {
        return { Authorization: "Bearer " + accessToken };
    } else {
        return {};
    }
}
const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

export { getThemeMode, setThemeMode, authHeaderService, BASE_URL }
