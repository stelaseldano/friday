import React from 'react';
import GetData from './components/GetData';
import Selected from './components/Selected';
import Button from './components/dom/Button';
import Header from './components/Header';
import Error from './components/Error';

import './styles/App.css';

const App: React.FunctionComponent = () => {
	const [make, setMake] = React.useState('');
	const [model, setModel] = React.useState('');
	const [vehicle, setVehicle] = React.useState({});
	const [error, setError] = React.useState('');
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

	function showSlide() {
		// shows the makes
		if (slide === 0) {
			return (
				<GetData
					type={'makes'}
					endpoint={'http://localhost:8080/api/makes'}
					onSelected={(item: string) => {
						setMake(item);
						setSlide(1);
					}}
					onError={(error: any) => setError(error)}
				/>
			);
			// shows the modesl
		} else if (slide === 1) {
			return (
				<GetData
					type={'models'}
					make={make}
					endpoint={modelUrl}
					onSelected={(item: string) => {
						setModel(item);
						setSlide(2);
					}}
					onError={(error: any) => setError(error)}
				/>
			);
			// shows the vehicles
		} else {
			return (
				<GetData
					type={'vehicles'}
					make={make}
					model={model}
					endpoint={vehicleUrl}
					onSelected={(item: any) => setVehicle(item)}
					onError={(error: any) => setError(error)}
				/>
			);
		}
	}

	return (
		<div>
			{error === '' ? (
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
