import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  textFieldInput: string;
  trueControversial = false;
  trueProfanity = false;
  trueProspects = false;
  trueInterest = false;

  constructor() {
  }

  ngOnInit() {
  }

  doThis() {
    console.log(this.textFieldInput + " " + this.trueControversial + " " + this.trueProfanity + " " + this.trueProspects + " " + this.trueInterest);
  }
}
