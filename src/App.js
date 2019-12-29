import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: []
		};
		//bind wskazuje do ktoer THIS sie odnosimy w funkcji
		// this.handleChange = this.handleChange.bind(this);
	}
	handleChange = e => {
		this.setState({ searchField: e.target.value.toLowerCase() });
	};
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}
	render() {
		//destracture pobiera  atrybut obiektu
		const { monsters, searchField } = this.state;
		const filteredMonstesrs = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField)
		);

		return (
			<div className="App">
				<h1>Potwory Z Tasmanii</h1>
				<SearchBox
					placeholder="search monster"
					handleChange={this.handleChange}
				/>
				><CardList monsters={filteredMonstesrs}></CardList>
			</div>
		);
	}
}
export default App;
