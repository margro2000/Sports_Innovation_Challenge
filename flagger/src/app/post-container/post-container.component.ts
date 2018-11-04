import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})

export class PostContainerComponent implements OnInit {

  @Input()
  postsContents: string[];

  constructor() {
  }

  ngOnInit() {
  }
}
