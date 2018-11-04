import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twit-profile-box',
  templateUrl: './twit-profile-box.component.html',
  styleUrls: ['./twit-profile-box.component.scss']
})

export class TwitProfileBoxComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  posts: string[];

  @Input()
  intUniversities: string[];

  @Input()
  profile_pic_url: string;

  ngOnInit() {
  }

}
