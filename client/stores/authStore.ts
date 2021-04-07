import { makeAutoObservable } from 'mobx';
import { RootStore } from './rootStore';

export class AuthStore {
  jwt?: string = undefined;
  constructor(private _rootStore: RootStore) {
    makeAutoObservable(this);
  }

  get loggedIn() {
    return !!this.jwt;
  }

  setToken(token: string) {
    this.jwt = token;
  }
}
