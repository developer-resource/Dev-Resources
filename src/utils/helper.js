// Theme Mode Handler for Local Storage 

const getThemeMode = () => localStorage.getItem('theme')
const setThemeMode = (value) => localStorage.setItem('theme', value ? value : 'dark')


export { getThemeMode, setThemeMode }
