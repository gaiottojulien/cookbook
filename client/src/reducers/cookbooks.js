/* eslint-disable import/no-anonymous-default-export */
export default (cookbooks = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return cookbooks;
		case 'CREATE':
			return cookbooks;
		default:
			return cookbooks;
	}
}
