import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potential-profile-box',
  templateUrl: './potential-profile-box.component.html',
  styleUrls: ['./potential-profile-box.component.scss']
})

export class PotentialProfileBoxComponent implements OnInit {

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
