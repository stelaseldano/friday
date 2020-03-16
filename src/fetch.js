export const fetchData = endpoint => {
	return fetch(endpoint)
		.then(response => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw new Error('Oops something went wrong');
			}
		})
		.catch(err => {
			throw new Error(err);
		});
};
