import { AuthStore } from './authStore';

export class RootStore {
  authStore: AuthStore;
  constructor() {
    this.authStore = new AuthStore(this);
  }
}
