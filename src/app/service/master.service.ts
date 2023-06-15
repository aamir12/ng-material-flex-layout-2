import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country, Customer, Response } from '../Model/Customer';
const URL = 'http://localhost:3000/api/customers'
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  
  constructor(private http: HttpClient) { }

  GetColorList(): colorentity[] {
    return [
      { code: 'c0', name: 'black' },
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'White' }
    ]
  }

  GetCustomer():Observable<Response<Customer[]>>{
    return this.http.get<Response<Customer[]>>(URL);
  }

  Savecustomer(data:Customer){

    return this.http.post(`${URL}/add`,data);
  }


  Updatecustomer(data:Customer){
    return this.http.post(`${URL}/update`,data);
  }

  deleteCustomer(id:string) {
    return this.http.delete(`${URL}/delete/${id}`);
  }

  GetCustomerbycode(code:any):Observable<Response<Customer>>{
    return this.http.get<Response<Customer>>(`${URL}/${code}`);
  }

  GetAssociate(){
    return this.http.get('http://localhost:3000/associate');
  }
  GetAssociatebycode(code:any){
    return this.http.get('http://localhost:3000/associate/'+code);
  }
  GetCountry():Observable<Country[]>{
    return this.http.get<Country[]>('http://localhost:3000/country');
  }

  SaveAssociate(data:any,code:any){
    return this.http.put('http://localhost:3000/associate/'+code,data);
  }

}
