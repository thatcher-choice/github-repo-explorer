const SortDropdown = ({ sortOption, onSortChange }) => {
    const handleSortChange = (e) => {
        onSortChange(e.target.value);
    };

    return (
        <div className="dropdown">
            <select className="sort-field" value={sortOption} onChange={handleSortChange}>
                <option value="">Sort</option>
                <option value="stars">Stars</option>
                <option value="watchers">Watchers</option>
                <option value="score">Score</option>
                <option value="name">Name</option>
                <option value="created_at">Created At</option>
                <option value="updated_at">Updated At</option>
            </select>
        </div>

    );
};

export default SortDropdown;