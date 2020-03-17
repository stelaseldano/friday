export const fetchData = endpoint => {
	return fetch(endpoint)
		.then(response => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw new Error(response.statusText);
			}
		})
		.catch(err => {
			throw new Error(err);
		});
};
