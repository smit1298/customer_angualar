import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Elev8 customer management';
  description = 'This is the best customer manger solution in the markey';
  imageURL = 'https://www.bradaronson.com/wp-content/uploads/2013/10/happy.jpg';

  clickMe(){
    // console.log('Button CLicked');
    this.name = 'I am changed'
  }
}
