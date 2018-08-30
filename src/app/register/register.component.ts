import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
	
	public backsignupshow:boolean = false;
	public playersignupshow:boolean = false;
	public teamsignupshow:boolean = false;
	public companysignupshow:boolean = false;
	public signuptypeshow:boolean = true;
// log(x){ console.log(x);}

// submit(f){
 //  f.value
  // console.log(f);
// }

	showPlayerSignupForm(){
		 console.log('Purushottam Kumar');
		 this.signuptypeshow = false;
		 this.teamsignupshow = false;
		 this.companysignupshow = false;
		 this.playersignupshow = true;
		 this.backsignupshow = true;
	}
	 showTeamSignupForm(){
		 console.log('Purushottam Kumar');
		 this.signuptypeshow = false;
		 this.playersignupshow = false;
		 this.companysignupshow = false;
		 this.teamsignupshow = true;
		 this.backsignupshow = true;
	}
	showCompanySignupForm(){
		 console.log('Purushottam Kumar');
		 this.signuptypeshow = false;
		 this.playersignupshow = false;
		 this.companysignupshow = true;
		 this.teamsignupshow = false;
		 this.backsignupshow = true;
	}
	showSignupTypes(){
		 console.log('Purushottam Kumar');
		 this.playersignupshow = false;
		 this.companysignupshow = false;
		 this.teamsignupshow = false;
		 this.backsignupshow = false;
		 this.signuptypeshow = true;
		 
	}
}
