import React from 'react';
import GetData from './components/GetData';
// import Model from './components/Model';
import VehiclesData from './components/VehiclesData';
import Selected from './components/Selected';
import VehicleInterface from './interfaces/VehicleInterface';

import './App.css';

const App: React.FunctionComponent = () => {
	const [make, setMake] = React.useState('');
	const [model, setModel] = React.useState('');
	const [vehicle, setVehicle] = React.useState();
	const [error, setError] = React.useState('');

	React.useEffect(() => {
		setModel('');
	}, [make]);

	React.useEffect(() => {
		setVehicle({});
	}, [model]);

	return (
		<main>
			{error === '' ? (
				<div className="view">
					<GetData
						type={'makes'}
						endpoint={'http://localhost:8080/api/makes'}
						onSelected={(item: string) => setMake(item)}
						onError={(error: any) => setError(error)}
					/>

					{make && (
						<GetData
							type={'models'}
							make={make}
							endpoint={'http://localhost:8080/api/models?make=' + make}
							onSelected={(item: string) => setModel(item)}
							onError={(error: any) => setError(error)}
						/>
					)}

					{make && model && (
						<VehiclesData
							make={make}
							model={model}
							onSelected={(item: VehicleInterface) => setVehicle(item)}
							onError={(error: any) => setError(error)}
						/>
					)}

					{vehicle && <Selected vehicle={vehicle} />}
				</div>
			) : (
				<div>
					<h1>error</h1>
					<button
						onClick={() => {
							window.location.reload();
							return false;
						}}
					>
						refresh
					</button>
				</div>
			)}
		</main>
	);
};

export default App;
