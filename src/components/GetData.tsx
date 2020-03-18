import React from 'react';
import Item from './Item';
import { fetchData } from '../fetch';

import '../styles/GetData.css';

const GetData: React.FunctionComponent<{
	onSelected: Function;
	onError: Function;
	onSetCached: Function;
	endpoint: string;
	type: string;
	cached: any;
	make?: string;
	model?: string;
}> = props => {
	const [data, setData] = React.useState<string[]>([]);
	const [fetching, setFetching] = React.useState<boolean>(false);
	const { model, make } = props;

	React.useEffect(() => {
		if (props.cached.length === 0) {
			setFetching(true);
			fetchData(props.endpoint)
				.then(data => {
					setData(data);
					props.onSetCached(data);
					setFetching(false);
				})
				.catch(err => {
					setFetching(false);
					props.onError(err);
				});
		} else {
			setData(props.cached);
		}
	}, [make, model]);

	function isFetching() {
		return <div className="slide-container">loading</div>;
	}

	function isFetched() {
		return (
			<section>
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
