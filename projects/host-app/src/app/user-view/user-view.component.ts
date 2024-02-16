import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {selectUser} from 'projects/host-app/user/store/selector/user.selectors'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {
  users$ !: Observable<User[]>;
    constructor(private store :Store){
      this.users$ = this.store.pipe(select(selectUser))
    }
}
