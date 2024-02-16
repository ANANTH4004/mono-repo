import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../../models/user';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
  }
});

export const AddUser = createAction(
  '[User] Add Users',
(user :User) => ({user})
)
