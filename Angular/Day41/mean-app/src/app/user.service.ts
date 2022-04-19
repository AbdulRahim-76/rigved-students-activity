import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3001/employees";
  constructor(private _http: HttpClient) { }

  public getEmployees(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  public storeEmployee(formValue: any): Observable<any> {
    return this._http.post(this.baseUrl, formValue);
  }

  public getEmp(id: any): Observable<any> {
    return this._http.get(this.baseUrl + '/' + id)
  }

  public deleteEmployee(id: any): Observable<any> {
    return this._http.delete(this.baseUrl + '/' + id)
  }

  public updateEmployee(id: any, salary: any, data: any): Observable<any> {
    return this._http.put(this.baseUrl + '/' + id + '/' + salary, data)
  }


}






