import React from 'react';
import './search-box.styles.css'
//dodajemy dwa parametry zeby moc wielokrotnie uzywac tego inputa
// i przekazywac mu tylko nazwe i funkcje
//dlatego  ustawiamy w propsach te dwa parametry
 export const SearchBox = ({placeholder,handleChange}) => {
	return (
		<input className='search'
			type="search"
			placeholder={placeholder}
			onChange={ handleChange}
		/>
	);
};
 
// e =>this.setState({ searchField: e.target.value.toLowerCase() })