import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent},
  { path: 'customers/add', component: AddCustomerComponent},
  { path: 'customers/edit/:id', component: EditCustomerComponent},
  { path: '',  redirectTo: '/customers', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
