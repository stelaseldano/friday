import React from 'react';
import Vehicle from './Vehicle';
import VehicleInterface from '../interfaces/VehicleInterface';
import { fetchData } from '../fetch';

const VehiclesData: React.FunctionComponent<{
	onSelected: any;
	onError: any;
	make: string;
	model: string;
}> = props => {
	const [data, setData] = React.useState([]);
	const [fetching, setFetching] = React.useState(false);
	const make = props.make.charAt(0).toUpperCase() + props.make.slice(1);
	const model = props.model.charAt(0).toUpperCase() + props.model.slice(1);

	React.useEffect(() => {
		setFetching(true);
		fetchData(
			'http://localhost:8080/api/vehicles?make=' + make + '&model=' + model
		)
			.then(data => {
				setFetching(false);
				setData(data);
			})
			.catch(err => {
				setFetching(false);
				props.onError(err);
			});
	}, [make, model]);

	function isFetching() {
		return <div>loading</div>;
	}

	function isFetched() {
		return (
			<ul>
				{data.length > 0 ? (
					data.map((vehicle: VehicleInterface, index: number) => (
						<Vehicle
							key={index}
							vehicle={vehicle}
							onClick={(event: React.MouseEvent<HTMLElement>) => {
								props.onSelected(vehicle);
							}}
						/>
					))
				) : (
					<div>
						no items for {props.make} {props.model}
					</div>
				)}
			</ul>
		);
	}

	return (
		<section>
			<h2>Vehicles</h2>
			{fetching ? isFetching() : isFetched()}
		</section>
	);
};

export default VehiclesData;
