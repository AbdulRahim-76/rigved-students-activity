import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileInfoStoreComponent } from './profile-info-store/profile-info-store.component';
import { ProfileInfoDeleteComponent } from './profile-info-delete/profile-info-delete.component';
import { ProfileInfoUpdateComponent } from './profile-info-update/profile-info-update.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

let route: Routes = [
  { path: "", component: ProfileInfoStoreComponent },
  { path: "store", component: ProfileInfoStoreComponent },
  { path: "profileInfo", component: ProfileInfoComponent },
  { path: "delete", component: ProfileInfoDeleteComponent },
  { path: "update", component: ProfileInfoUpdateComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoStoreComponent,
    ProfileInfoDeleteComponent,
    ProfileInfoUpdateComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

