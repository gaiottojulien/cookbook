import axios from 'axios';

const url = 'http://localhost:3000/cookbooks';

export const fetchCookbooks = () => axios.get(url);
