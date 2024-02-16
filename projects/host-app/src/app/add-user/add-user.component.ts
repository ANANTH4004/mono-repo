import { Component } from '@angular/core';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { UserState } from 'projects/host-app/user/store/reducer/user.reducer';
import { AddUser } from '../user/store/action/user.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private store : Store<UserState>){

  }
    addUser(username : string){
        const user = new User();
        user.name = username;
        this.store.dispatch(AddUser(user))
    }
}
