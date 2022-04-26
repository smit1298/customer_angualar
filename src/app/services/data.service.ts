import { Injectable } from '@angular/core';
import  Customer  from "../models/customer.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllCustomers():Observable<Customer[]> {
    return this.http.get<Customer[]>('http://127.0.0.1:3000/customers');
  }

  addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>('http://127.0.0.1:3000/customers', customer);
  }
  
  getCustomer(id: string): Observable<Customer>{
    return this.http.get<Customer>(`http://127.0.0.1:3000/customers/${id}`);
  }
}
