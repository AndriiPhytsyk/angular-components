import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent {
  @Input() searchTerm = '';
  public searchUpdate$ = new Subject<string>();
  @Output() public searchUpdate = new EventEmitter<string>();

  updateSearchTerm(e: string) {
    this.searchUpdate$.next(e);
  }

  constructor() {
    this.searchUpdate$
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe(value => {
        this.searchUpdate.emit(value);
      });
  }
}
