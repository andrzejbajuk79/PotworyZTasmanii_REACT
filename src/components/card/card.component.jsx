import React from 'react';
import './card.styles.css'
export const Card = props => (
	<div   className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.potwor.id}?set2=set4&size=180x180`}/>
		<h3>{props.potwor.name}</h3>
    <p>{props.potwor.email}</p>
	</div>
);
