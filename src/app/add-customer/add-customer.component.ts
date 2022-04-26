import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Customer from '../models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCustomer(form: NgForm): void{
    console.log('Saving cusotmer', form.value);

    const name = form.value.name;
    const address = form.value.address;
    const age = form.value.age;
    const imageUrl = form.value.imageUrl
    
    const customer = new Customer('', name, address, age, imageUrl);

    this.dataService.addCustomer(customer).subscribe(cs => {
      console.log('Saved Customer', cs);
            this.router.navigate(['customers']);
    })
  }

}
