import { Injectable } from '@angular/core';
import  Customer  from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllCustomers(): Customer[] {
    return[
      { name: 'Peter', address: 'surulere', age: 100},
      { name: 'John', address: 'abule egba', age: 102},
      { name: 'Smit', address: 'houston-texas', age: 28},
    ]
  }
}
