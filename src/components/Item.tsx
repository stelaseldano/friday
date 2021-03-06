import React from 'react';
import Vehicle from './Vehicle';
import VehicleInterface from '../interfaces/VehicleInterface';

import '../styles/Item.css';

const Item: React.FunctionComponent<{
	type: string;
	item: string | VehicleInterface;
	onClick: any;
}> = props => {
	if (typeof props.item === 'string') {
		return (
			<li className="item" onClick={props.onClick}>
				{props.item}
			</li>
		);
	} else {
		return <Vehicle vehicle={props.item} onClick={props.onClick} />;
	}
};

export default Item;
