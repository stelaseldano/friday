import React from 'react';
import Item from './Item';
import { fetchData } from '../fetch';

import '../styles/GetData.css';

const GetData: React.FunctionComponent<{
	onSelected: Function;
	onError: Function;
	endpoint: string;
	type: string;
	make?: string;
	model?: string;
}> = props => {
	const [data, setData] = React.useState([]);
	const [fetching, setFetching] = React.useState(false);
	const { model, make } = props;

	React.useEffect(() => {
		setFetching(true);
		fetchData(props.endpoint)
			.then(data => {
				setData(data);
				setFetching(false);
			})
			.catch(err => {
				setFetching(false);
				props.onError(err);
			});
	}, [make, model]);

	function isFetching() {
		return <div className="slide-container">loading</div>;
	}

	function isFetched() {
		return (
			<section className="slide-container">
				<ul className="slide__items">
					{data.length > 0 ? (
						data.map((item: string, index: number) => (
							<Item
								key={index}
								onClick={() => {
									props.onSelected(item);
								}}
								item={item}
								type={props.type}
							/>
						))
					) : (
						<div className="slide__items">
							no {props.type} for {props.make} {props.model}
						</div>
					)}
				</ul>
			</section>
		);
	}

	return (
		<section className="slide-container">
			<h2 className="slide__title">{props.type}</h2>
			{fetching ? isFetching() : isFetched()}
		</section>
	);
};

export default GetData;
