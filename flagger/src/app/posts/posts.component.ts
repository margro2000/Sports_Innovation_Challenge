import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  JSON_LINK = 'localhost:9000/data/';

  textFieldInput: string;
  trueControversial = false;
  trueProfanity = false;
  trueProspects = false;
  trueInterest = false;

  this_data: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  doThis() {
  }
}
