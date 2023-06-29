import React from 'react'

const DayNightToggle = ({ handleThemeSwitch }) => {
    return (
        <div
            onClick={handleThemeSwitch}
            className="hidden cursor-pointer rounded-full shadow transition-all duration-1000 md:block absolute w-[70px] md:right-24 dark:bg-gradient-to-br dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 bg-gradient-to-b from-sky-200 to-sky-400"
        >
            <div className="h-6 w-6 m-1 dark:ms-10 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-500 dark:bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 transition-all duration-1000" />
        </div>

    )
}

export default DayNightToggle