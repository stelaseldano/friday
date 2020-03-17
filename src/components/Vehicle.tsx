import React from 'react';
import VehicleInterface from '../interfaces/VehicleInterface';

import '../styles/Vehicle.css';

const GetData: React.FunctionComponent<{
	vehicle: VehicleInterface;
	onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}> = props => {
	return (
		<li onClick={props.onClick} className="vehicle-card">
			<article>
				<header className="vehicle__header">
					<h2 className="vehicle__header-item">{props.vehicle.make}</h2>
					<h3 className="vehicle__header-item">{props.vehicle.model}</h3>
				</header>
				<section className="vehicle__info">
					{props.vehicle.enginePowerPS && (
						<p className="vehicle__info-item">
							<span>Engine Power PS: </span>
							{props.vehicle.enginePowerPS}
						</p>
					)}
					{props.vehicle.enginePowerPW && (
						<p className="vehicle__info-item">
							<span>Engine Power PW: </span>
							{props.vehicle.enginePowerPW}
						</p>
					)}
					{props.vehicle.fuelType && (
						<p className="vehicle__info-item">
							<span>Fuel Type: </span>
							{props.vehicle.fuelType}
						</p>
					)}
					{props.vehicle.bodyType && (
						<p className="vehicle__info-item">
							<span>Body Type: </span>
							{props.vehicle.bodyType}
						</p>
					)}
					{props.vehicle.engineCapacity && (
						<p className="vehicle__info-item">
							<span>Engine Capacity: </span>
							{props.vehicle.engineCapacity}
						</p>
					)}
				</section>
			</article>
		</li>
	);
};

export default GetData;
