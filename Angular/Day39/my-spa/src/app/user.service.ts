import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray: any[] = [];

  constructor() { }

  public getProfile(): any[] {
    return this.userArray;
  }

  public saveProfile(obj: any): void {
    let b = this.userArray.length;
    let a = b + 1;
    let object = {
      userId: a,
      name: obj.name,
      gender: obj.gender,
      phone: obj.phone,
      email: obj.email,
      state: obj.state,
      city: obj.city,
      pincode: obj.pincode
    };
    this.userArray.push(object);
  }

  public deleteProfile(id: number): void {
    for (let i = 0; i < this.userArray.length; i++) {
      let profile = this.userArray[i];
      if (profile.userId == id) {
        this.userArray.splice(i, 1);
      }
    }
  }

  public updateProfile(id: number): void {
    for (let i = 0; i < this.userArray.length; i++) {
      let profile = this.userArray[i];
      if (profile.userId == id) {
        return this.userArray[i];
      } 
    }
  }

  public updateform(obj:any):void{
    for(let i=0; i< this.userArray.length; i++){
      let profile=this.userArray[i];
      if(profile.userId==obj.id){
        profile.name=obj.name;
        profile.gender=obj.gender;
        profile.phone=obj.phone;
        profile.email=obj.email;
        profile.state=obj.state;
        profile.city=obj.city;
        profile.pincode=obj.pincode;
      }
    }
  }
}
