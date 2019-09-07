import { LOGIN, DASHBOARD } from './types';
import { environment } from '../environment/environment';
import axios from 'axios';

export const login = (email, password) => dispatch => {
  let url = `${environment.LOGIN}${email}/login`;
  let options = {
    password
  };
  return axios
    .post(url, options)
    .then(response => response.data)
    .then((userData) => {
      dispatch({ type: LOGIN, payload: userData });
    });
};

export const dashboard = (token) => dispatch => {
  let url = environment.DASHBOARD_URL;
  return axios({
    url: url,
    method: 'get',
    headers: {
      'X-COIN': token
    }
  })
    .then(response => response.data)
    .then((data) => {
      dispatch({ type: DASHBOARD, payload: data });
    });
};