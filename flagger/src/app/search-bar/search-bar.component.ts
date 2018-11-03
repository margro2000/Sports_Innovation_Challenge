import {Component, Input, EventEmitter, Output} from "@angular/core";

declare const module;

@Component({
  selector: 'search-box',
  moduleId: module.id,
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.scss']
})

export class SearchBarComponent {

  @Input()
  text:string;

  @Output()
  search = new EventEmitter();

  clear(box) {
    box.value = '';
  }

  onSearch(searchText) {
    this.search.emit(searchText);
  }

}
