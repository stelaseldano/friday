import React from 'react';
import VehicleInterface from '../interfaces/VehicleInterface';

const Selected: React.FunctionComponent<{
	vehicle: VehicleInterface;
}> = props => {
	return (
		<section>
			<ul>
				<li>
					<span>Make: </span>
					{props.vehicle.make}
				</li>
				<li>
					<span>Model: </span>
					{props.vehicle.model}
				</li>
				<li>
					<span>Engine Power PS: </span>
					{props.vehicle.enginePowerPS}
				</li>
				<li>
					<span>Engine Power PW: </span>
					{props.vehicle.enginePowerPW}
				</li>
				<li>
					<span>Fuel Type: </span>
					{props.vehicle.fuelType}
				</li>
				<li>
					<span>Body Type: </span>
					{props.vehicle.bodyType}
				</li>
				<li>
					<span>Engine Capacity: </span>
					{props.vehicle.engineCapacity}
				</li>
			</ul>
		</section>
	);
};

export default Selected;
