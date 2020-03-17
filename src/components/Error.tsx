import React from 'react';
import Button from './dom/Button';
import ErrorInterface from '../interfaces/ErrorInterface';

import '../styles/Error.css';

const Error: React.FunctionComponent<{
	error: ErrorInterface;
}> = props => {
	return (
		<main className="error">
			<h2 className="error__title">{props.error.message}</h2>

			<Button
				onClick={() => {
					window.location.reload();
					return false;
				}}
				title={'reload'}
			/>
		</main>
	);
};

export default Error;
