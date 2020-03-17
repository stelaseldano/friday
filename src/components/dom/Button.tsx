import React from 'react';

import '../../styles/Button.css';

const Button: React.FunctionComponent<{
	title: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = props => {
	return (
		<button
			className="button primary-button"
			name={props.title}
			type="button"
			onClick={props.onClick}
		>
			{props.title}
		</button>
	);
};

export default Button;
