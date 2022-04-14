import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  delete(value: any) {
    throw new Error('Method not implemented.');
  }

  profileArray: any[] = [];

  constructor() { }

  public getProfile(): any[] {
    return this.profileArray;
  }

  public save(obj: any): void {
    let l = this.profileArray.length;
    let id = l + 1;
    let object = { profileId: id, name: obj.name, gender: obj.gender, phoneNo: obj.phoneNo, emailId: obj.emailId, address: { state: obj.address.state, city: obj.address.city, pin: obj.address.pin } }
    this.profileArray.push(object);
  }

  public deleteProfile(id: number): void {
    for (let i = 0; i < this.profileArray.length; i++) {
      let profile = this.profileArray[i];
      if (profile.profileId == id) {
        console.log('its working');
        this.profileArray.splice(i, 1);
      }
    }
  }

  public update(id:number):any{
    for(let i=0; i< this.profileArray.length; i++){
      let user=this.profileArray[i];
      if(user.profileId==id){
        return this.profileArray[i];
      }
    }
  }

  public updateform(obj:any):void{
    for(let i=0; i< this.profileArray.length; i++){
      let user=this.profileArray[i];
      if(user.profileId==obj.id){
        user.name=obj.name;
        user.gender=obj.gender;
        user.phoneNo=obj.phoneNo;
        user.emailId=obj.emailId;
        user.address.state=obj.address.state;
        user.address.city=obj.address.city;
        user.address.pin=obj.address.pin;
        console.log('hi')
      }
    }
  }

}
