import React from 'react';

import '../styles/Header.css';

const Header: React.FunctionComponent<{
	model: string;
	make: string;
	vehicle: any;
}> = props => {
	let headerClass;

	if (props.make !== '') {
		headerClass = 'slide__header slide__header--showing';
	} else {
		headerClass = 'slide__header';
	}

	return (
		<header className={headerClass}>
			<h2 className="slide__header__title">Your vehicle</h2>
			<div className="slide__info-container">
				{props.make && (
					<p className="slide__info">
						<span>Make: </span>
						<strong>{props.make}</strong>
					</p>
				)}
				{props.model && (
					<p className="slide__info">
						<span>Model: </span>
						<strong>{props.model}</strong>
					</p>
				)}
				{props.vehicle.hasOwnProperty('enginePowerPS') && (
					<p className="slide__info">
						<span>Engine Power PS: </span>
						<strong>{props.vehicle.enginePowerPS}</strong>
					</p>
				)}
				{props.vehicle.hasOwnProperty('enginePowerPW') && (
					<p className="slide__info">
						<span>Engine Power PW: </span>
						<strong>{props.vehicle.enginePowerPW}</strong>
					</p>
				)}
				{props.vehicle.hasOwnProperty('fuelType') && (
					<p className="slide__info">
						<span>Fuel Type: </span>
						<strong>{props.vehicle.fuelType}</strong>
					</p>
				)}
				{props.vehicle.hasOwnProperty('bodyType') && (
					<p className="slide__info">
						<span>Body Type: </span>
						<strong>{props.vehicle.bodyType}</strong>
					</p>
				)}
				{props.vehicle.hasOwnProperty('engineCapacity') && (
					<p className="slide__info">
						<span>Engine Capacity: </span>
						<strong>{props.vehicle.engineCapacity}</strong>
					</p>
				)}
			</div>
		</header>
	);
};

export default Header;
