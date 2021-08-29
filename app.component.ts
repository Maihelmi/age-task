import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// public birth:any= document.getElementById('age')

// yourAge(){
//   return 2021-this.birth
// }

age:any;

yourAge(){
  return 2021-this.age
}

}