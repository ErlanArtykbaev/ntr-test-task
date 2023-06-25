import Axios from 'axios';

const mainURL = process.env.API_BASE_URL;
export const baseURL = `${mainURL}/v1/`;

const instance = Axios.create({ baseURL });

export default instance;
