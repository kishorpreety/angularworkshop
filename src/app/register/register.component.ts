import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
	public playerSignupForm: any;
	public backsignupshow:boolean = false;
	public playersignupshow:boolean = false;
	public teamsignupshow:boolean = false;
	public companysignupshow:boolean = false;
	public signuptypeshow:boolean = true;
	
	//public itemValue = '';
	public players: Observable<any[]>;
	public teams: Observable<any[]>;
	public company: Observable<any[]>;

// log(x){ console.log(x);}

// submit(f){
 //  f.value
  // console.log(f);
// }
	// constructor(private formBuilder: FormBuilder) {
		
	// 	this.playerSignupForm = this.formBuilder.group({
	// 	'playerUserName': ['', Validators.required],
	// 	'playerEmail': ['', [Validators.required]],
	// 	'playerPassword': ['', [Validators.required, Validators.minLength(10)]]
	// 	});
	// }
	playerForm: any;
	teamForm: any;
	companyForm: any;

	constructor(private formBuilder: FormBuilder, public db: AngularFireDatabase) {
		this.players = db.list('players').valueChanges();
		console.log(this.players);
	  //this.items = db.list('items').valueChanges();
	  //assigning form element and adding validations
	  this.playerForm = this.formBuilder.group({
		'playerUserName': ['', Validators.required],
		'playerEmail': ['', [Validators.required]],
		'playerPassword': ['', [Validators.required, Validators.minLength(10)]],
		'playerConfirmPassword': ['', [Validators.required, Validators.minLength(10)]],
		'playerFirstName': ['', [Validators.required]],
		'playerLastName': ['', [Validators.required]],
	  });

	  this.teamForm = this.formBuilder.group({
		'teamUserName': ['', Validators.required],
		'teamEmail': ['', [Validators.required]],
		'teamPassword': ['', [Validators.required, Validators.minLength(10)]],
		'teamConfirmPassword': ['', [Validators.required, Validators.minLength(10)]],
		'teamFirstName': ['', [Validators.required]],
		'teamLastName': ['', [Validators.required]],
	  });
	  this.companyForm = this.formBuilder.group({
		'comanyUserName': ['', Validators.required],
		'comanyEmail': ['', [Validators.required]],
		'comanyPassword': ['', [Validators.required, Validators.minLength(10)]],
		'comanyConfirmPassword': ['', [Validators.required, Validators.minLength(10)]],
		'comanyFirstName': ['', [Validators.required]],
		'comanyLastName': ['', [Validators.required]],
	  });
  
	  console.log(this.playerForm);
	}
	
	savePlayerForm(){
		//alert(`playerUserName: ${this.playerForm.value.playerUserName} Email: ${this.playerForm.value.playerEmail}`);
		// if(this.playerForm.value.playerPassword != this.playerForm.value.playerConfirmPassword){
		// 	alert('not match');
		// 	return false;
		// }

		var playerDetails = {
			playerUserName:this.playerForm.value.playerUserName,
			playerEmail:this.playerForm.value.playerEmail,
			playerPassword:this.playerForm.value.playerPassword,
			playerFirstName:this.playerForm.value.playerFirstName,
			playerLastName:this.playerForm.value.playerLastName,
			teamID:0,
			companyID:0,
			currentTime: Date.now()
		}
		this.db.list('/players').push(playerDetails);
		this.playerForm.value.playerUserName = '';
		this.playerForm.value.playerEmail = '';
		this.playerForm.value.playerPassword = '';
		this.playerForm.value.playerFirstName = '';
		this.playerForm.value.playerLastName = '';
	}
	saveTeamForm(){
		//alert(`playerUserName: ${this.playerForm.value.playerUserName} Email: ${this.playerForm.value.playerEmail}`);
		// if(this.playerForm.value.playerPassword != this.playerForm.value.playerConfirmPassword){
		// 	alert('not match');
		// 	return false;
		// }

		var teamDetails = {
			teamUserName:this.teamForm.value.teamUserName,
			teamEmail:this.teamForm.value.teamEmail,
			teamPassword:this.teamForm.value.teamPassword,
			teamFirstName:this.teamForm.value.teamFirstName,
			teamLastName:this.teamForm.value.teamLastName,
			currentTime: Date.now()
		}
		this.db.list('/teams').push(teamDetails);
		this.teamForm.value.teamUserName = '';
		this.teamForm.value.teamEmail = '';
		this.teamForm.value.teamPassword = '';
		this.teamForm.value.teamFirstName = '';
		this.teamForm.value.teamLastName = '';
	}
	saveCompanyForm(){
		//alert(`playerUserName: ${this.playerForm.value.playerUserName} Email: ${this.playerForm.value.playerEmail}`);
		// if(this.playerForm.value.playerPassword != this.playerForm.value.playerConfirmPassword){
		// 	alert('not match');
		// 	return false;
		// }

		var companyDetails = {
			comanyUserName:this.companyForm.value.comanyUserName,
			comanyEmail:this.companyForm.value.comanyEmail,
			comanyPassword:this.companyForm.value.comanyPassword,
			comanyFirstName:this.companyForm.value.comanyFirstName,
			comanyLastName:this.companyForm.value.comanyLastName,
			currentTime: Date.now()
		}
		this.db.list('/companys').push(companyDetails);
		this.companyForm.value.comanyUserName = '';
		this.companyForm.value.comanyEmail = '';
		this.companyForm.value.comanyPassword = '';
		this.companyForm.value.comanyFirstName = '';
		this.companyForm.value.comanyLastName = '';
	}
	
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

	doSubmitPlayerSignup(event){
	   console.log('Preety');
	  // this.playerSignupForm.playerUserName.value; 
	  // console.log(this.playerSignupForm.playerUserName.value);
  
	}
}
