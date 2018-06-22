import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 3.3 Function call';
  name:String;
  len;
  public fun()
  {
  
    this.name= "Inside fun";
    
  }
}
