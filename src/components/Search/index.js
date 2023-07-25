import React from 'react'
import { debounce } from '../debounce'

const Search = ({ searchAPI, fetchAPI }) => {
    const handleSearch = (e) => {
        let query = e.target.value;

        if (query) {
            searchAPI(query);
        } else {
            fetchAPI();
        }
    };

    const debouncedHandleSearch = debounce(handleSearch, 300);

    return (
        <div className='flex justify-center mt-4'>
            <input
                onChange={debouncedHandleSearch}
                className='bg-transparent dark:text-gray-300 outline-none dark:placeholder:text-gray-300 placeholder:text-gray-500 border-b border-gray-400'
                placeholder='Search'
            />
        </div>
    )
}

export default Search