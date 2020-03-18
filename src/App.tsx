import React from 'react';
import GetData from './components/GetData';
import Button from './components/dom/Button';
import Header from './components/Header';
import Error from './components/Error';
import VehicleInterface from './interfaces/VehicleInterface';
import ErrorInterface from './interfaces/ErrorInterface';

import './styles/App.css';

const App: React.FunctionComponent = () => {
	const [make, setMake] = React.useState<string>('');
	const [model, setModel] = React.useState<string>('');
	const [cached, setCached] = React.useState<any>({});
	const [vehicle, setVehicle] = React.useState<VehicleInterface>({});
	const [error, setError] = React.useState<ErrorInterface>({
		message: ''
	});
	const [slide, setSlide] = React.useState(0);

	React.useEffect(() => {
		setModel('');
	}, [make]);

	React.useEffect(() => {
		setVehicle({});
	}, [model]);

	const modelUrl =
		make !== '' ? 'http://localhost:8080/api/models?make=' + make : '';

	const vehicleUrl =
		make !== '' && model !== ''
			? 'http://localhost:8080/api/vehicles?make=' + make + '&model=' + model
			: '';

	function onSetCached(data: string[], type: string) {
		switch (type) {
			case 'makes':
				let makes: any = {};

				data.forEach((item: string) => {
					makes[item] = {};
				});

				setCached({
					...cached,
					...makes
				});
				return;
			case 'models':
				let models: any = {};
				let makeObj: any = {};

				data.forEach((item: string) => {
					models[item] = [];
					makeObj[make] = models;
				});

				setCached({
					...cached,
					...makeObj
				});

				return;
			case 'vehicles':
				let vehicleObj: any = Object.assign({}, cached);

				data.forEach((item: {}) => {
					vehicleObj[make][model].push(item);
				});

				setCached({
					...cached,
					...vehicleObj
				});

				return;
		}

		console.log(cached);
	}

	function showSlide() {
		// shows the makes
		if (slide === 0) {
			return (
				<GetData
					type={'makes'}
					cached={Object.keys(cached)}
					endpoint={'http://localhost:8080/api/makes'}
					onSelected={(item: string) => {
						setMake(item);
						setSlide(1);
					}}
					onError={(error: any) => {
						setError(error);
					}}
					onSetCached={(data: string[]) => {
						onSetCached(data, 'makes');
					}}
				/>
			);
			// shows the models
		} else if (slide === 1) {
			return (
				<GetData
					type={'models'}
					cached={Object.keys(cached[make])}
					make={make}
					endpoint={modelUrl}
					onSelected={(item: string) => {
						setModel(item);
						setSlide(2);
					}}
					onError={(error: ErrorInterface) => {
						setError(error);
					}}
					onSetCached={(data: string[]) => {
						onSetCached(data, 'models');
					}}
				/>
			);
			// shows the vehicles
		} else {
			return (
				<GetData
					type={'vehicles'}
					cached={cached[make][model]}
					make={make}
					model={model}
					endpoint={vehicleUrl}
					onSelected={(item: any) => setVehicle(item)}
					onError={(error: any) => {
						setError(error);
					}}
					onSetCached={(data: string[]) => {
						onSetCached(data, 'vehicles');
					}}
				/>
			);
		}
	}

	return (
		<div className="view">
			{error.message === '' ? (
				<article className="slide">
					<Header make={make} model={model} vehicle={vehicle} />

					<main className="slide__main">
						{slide > 0 && (
							<Button onClick={() => setSlide(slide - 1)} title={'back'} />
						)}
						{showSlide()}
					</main>
				</article>
			) : (
				<Error error={error} />
			)}
		</div>
	);
};

export default App;
