import { Injectable } from '@angular/core';
import  Customer  from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllCustomers(): Customer[] {
    return[
      {id: '1', name: 'Peter', address: 'surulere', age: 100},
      {id: '2', name: 'John', address: 'abule egba', age: 102},
      {id: '3', name: 'Smit', address: 'houston-texas', age: 28},
    ]
  }
}
