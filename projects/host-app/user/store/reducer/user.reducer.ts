import { createReducer, on } from '@ngrx/store';
import { User } from 'projects/host-app/src/app/models/user';
// import { UserActions } from './user.actions';
import * as userActions from '../../../src/app/user/store/action/user.actions'

export const userFeatureKey = 'user';

export interface UserState {
  users : User[];

}

export const initialState: UserState = {
  users : []
};

export const userReducer = createReducer(
  initialState,
  on(userActions.AddUser , (state :UserState , {user}) => ({
    ...state,
    users : [...state.users , user]
  }))
);

