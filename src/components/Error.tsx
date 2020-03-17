import React from 'react';
import Button from './dom/Button';

import '../styles/Error.css';

const Error: React.FunctionComponent<{
	error: string;
}> = props => {
	return (
		<div>
			<h1>error</h1>
			<Button
				onClick={() => {
					window.location.reload();
					return false;
				}}
				title={'reload'}
			/>
		</div>
	);
};

export default Error;
