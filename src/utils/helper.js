// Theme Mode Handler for Local Storage 

const getThemeMode = () => localStorage.getItem('theme')
const setThemeMode = (value) => localStorage.setItem('theme', value ? value : 'dark')


const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

export { getThemeMode, setThemeMode, BASE_URL }
