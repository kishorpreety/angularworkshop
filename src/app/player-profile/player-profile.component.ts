import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  public teamList: any;

  constructor(public db: AngularFireDatabase) {
    this.teamList = db.list('/teams').valueChanges();
    console.log(this.teamList);
   }

  ngOnInit() {
  }

}
