import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environment';
import { UserViewComponent } from './user-view/user-view.component';
import { AddUserComponent } from './add-user/add-user.component';
import { userFeatureKey, userReducer } from 'projects/host-app/user/store/reducer/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument(): [],
    StoreModule.forFeature(userFeatureKey , userReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
