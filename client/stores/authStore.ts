import { action, makeObservable } from 'mobx';
import { fromStream } from 'mobx-utils';
import { authService } from '../services/auth.service';
import { RootStore } from './rootStore';
import { catchError, map } from 'rxjs/operators';
import { AxiosError, AxiosResponse } from 'axios';
import { of } from 'rxjs';

export class AuthStore {
  constructor(private _rootStore: RootStore) {
    makeObservable(this);
  }

  @action
  loginWithGoogle() {
    fromStream(
      authService.googleLogin().pipe(
        map((res: AxiosResponse<any>) => {
          console.log('google login response', res);
        }),
        catchError((e: AxiosError) => of(console.log('google login error', e))),
      ),
    );
  }
}
