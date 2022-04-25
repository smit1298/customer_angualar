import { Component, OnInit } from '@angular/core';
import Customer from '../models/customer.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {



customers: Customer[] = [];

constructor(private dataService: DataService) { }

ngOnInit(): void {
  this.customers = this.dataService.getAllCustomers()
}
}


