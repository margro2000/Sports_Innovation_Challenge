import { Component, OnInit } from '@angular/core';
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Component({
  selector: 'app-caution-box',
  templateUrl: './caution-box.component.html',
  styleUrls: ['./caution-box.component.scss']
})

export class CautionBoxComponent implements OnInit {
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

