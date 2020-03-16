import React from 'react';
import VehicleInterface from '../interfaces/VehicleInterface';

const Selected: React.FunctionComponent<{
	vehicle: VehicleInterface;
}> = props => {
	return (
		<section>
			<div>{props.vehicle.make}</div>
			<div>{props.vehicle.model}</div>
			<div>{props.vehicle.enginePowerPS}</div>
			<div>{props.vehicle.enginePowerPW}</div>
			<div>{props.vehicle.fuelType}</div>
			<div>{props.vehicle.bodyType}</div>
			<div>{props.vehicle.engineCapacity}</div>
		</section>
	);
};

export default Selected;
