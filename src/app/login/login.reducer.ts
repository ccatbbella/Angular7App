/*import { Action,createReducer, on } from '@ngrx/store';
import { addAccount } from './login.actions';

export interface State {
    accounts: Array<string>;
}

export const initialState: State = {
    accounts:[],
};

const accountReducer = createReducer(
    initialState,
    on(addAccount, state => ({   ...state, accounts: [...state.accounts, "Baby"]}))
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return accountReducer(state, action);
  }*/