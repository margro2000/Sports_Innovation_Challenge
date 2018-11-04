import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profiles-viewbox',
  templateUrl: './profiles-viewbox.component.html',
  styleUrls: ['./profiles-viewbox.component.scss']
})

export class ProfilesViewboxComponent implements OnInit {
  TEST_JSON_LINK = 'http://localhost:3000';

  profiles: any;

  constructor(private http: HttpClient) {
    this.http.get(this.TEST_JSON_LINK + '/content')
      .subscribe((res: Response) => {
        this.profiles = res;
        // console.log(JSON.stringify(this.data, null, 2));
        // this.data = AppComponent.parseString(this.data.content);
      });
  }

  ngOnInit() {
  }

}
