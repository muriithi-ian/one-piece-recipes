import React from "react";

function Search({ search, setSearch }) {
	return (
		<input
			className="nav-search"
			type="text"
			placeholder="Search..."
			onChange={(e) => {
				return setSearch(e.target.value);
			}}
			value={search}
		/>
	);
}

export default Search;
