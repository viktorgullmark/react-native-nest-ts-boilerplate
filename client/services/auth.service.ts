import { AxiosResponse } from 'axios';
import axios from 'axios-observable';
import { Observable } from 'rxjs';
import AppConfig from './../config/app.config';

export const authService = {
  googleLogin,
};

function googleLogin(): Observable<AxiosResponse<any>> {
  return axios.get(`${AppConfig.baseUrl}/google`);
}
