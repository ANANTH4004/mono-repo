import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../../store/reducer/user.reducer'


export const userSelectorState  = createFeatureSelector<fromUser.UserState>(
    fromUser.userFeatureKey
)
export const selectUser = createSelector(
    userSelectorState,
    (state : fromUser.UserState) => (state.users)
)