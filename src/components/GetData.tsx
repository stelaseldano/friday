import React from 'react';
import { fetchData } from '../fetch';

const GetData: React.FunctionComponent<{
	onSelected: any;
	onError: any;
	endpoint: string;
	type: string;
	make?: string;
	model?: string;
}> = props => {
	const [data, setData] = React.useState([]);
	const [fetching, setFetching] = React.useState(false);

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
	}, [props.make]);

	function isFetching() {
		return <div>loading</div>;
	}

	function isFetched() {
		return (
			<ul>
				{data.length > 0 ? (
					data.map((item: string, index: number) => (
						<li
							onClick={(event: React.MouseEvent<HTMLElement>) => {
								props.onSelected(item);
							}}
							key={index}
						>
							{item}
						</li>
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
			<h2>{props.type}</h2>
			{fetching ? isFetching() : isFetched()}
		</section>
	);
};

export default GetData;
