import React from 'react';
import Button from './dom/Button';

import '../styles/Error.css';

const Error: React.FunctionComponent<{
	error: any;
}> = props => {
	return (
		<main className="error">
			<h1>{props.error.message}</h1>

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
