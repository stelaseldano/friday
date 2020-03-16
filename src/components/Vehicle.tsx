import React from 'react';
import VehicleInterface from '../interfaces/VehicleInterface';

const GetData: React.FunctionComponent<{
	vehicle: VehicleInterface;
	onClick: any;
}> = props => {
	return (
		<li onClick={props.onClick}>
			<h3>{props.vehicle.make}</h3>
			<h4>{props.vehicle.model}</h4>
			<p>{props.vehicle.enginePowerPS}</p>
			<p>{props.vehicle.enginePowerPW}</p>
			<p>{props.vehicle.fuelType}</p>
			<p>{props.vehicle.bodyType}</p>
			<p>{props.vehicle.engineCapacity}</p>
		</li>
	);
};

export default GetData;
