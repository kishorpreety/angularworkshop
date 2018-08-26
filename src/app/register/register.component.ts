import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 log(x){ console.log(x);}

 submit(f){
   f.value
  // console.log(f);
 }
}
