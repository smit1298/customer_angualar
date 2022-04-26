import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Customer  from "../models/customer.model";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer?: Customer;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      
      if (id){
      this.dataService.getCustomer(id).subscribe(cs => {
        this.customer = cs;
        console.log(this.customer);        
      })
    }
    })
  }

}
