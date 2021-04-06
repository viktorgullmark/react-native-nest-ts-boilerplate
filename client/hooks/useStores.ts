import React from 'react';
import { RootStore } from '../stores/rootStore';

const rootStore = new RootStore();

const RootStoreContext = React.createContext(rootStore);

export function useStores() {
  return React.useContext(RootStoreContext);
}
