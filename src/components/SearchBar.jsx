import { useState } from 'react';
import searchLogo from '../assests/search.svg'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input repoholder='Explore GitHub Repositories...' type="text" value={query} onChange={handleChange} />
            <button type="submit"><img src={searchLogo} alt='magnifying-glass' /></button>
        </form>
    );
};

export default SearchBar;