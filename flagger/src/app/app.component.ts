import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  data: any;

  constructor(private http: HttpClient) {
    /*
    this.http.get(this.JSON_LINK + '/content')
      .subscribe((res: Response) => {
        this.data = data;
        // console.log(JSON.stringify(this.data, null, 2));
        // this.data = AppComponent.parseString(this.data.content);
      });
      */
  }
}

